import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Check,
  Star,
  Wrench,
  Code2,
  Laptop,
  BriefcaseBusiness,
  Megaphone,
  Camera,
  BarChart2,
} from "lucide-react";

/* ============================================================
   HELPERS & STATIC DATA  (outside component — no re-creation)
============================================================ */

const asset = (name) => `/assets/${name}`;

const courses = [
  { id: "1", image: "course1.jpg", title: "Learn Figma from Basic", creator: "purepat studio", price: "$25", rating: "4.5", level: "Beginner" },
  { id: "2", image: "course2.jpg", title: "Build Digital Marketing Skills", creator: "purepat studio", price: "$25", rating: "4.5", level: "Beginner" },
  { id: "3", image: "course3.jpg", title: "Unlock the Power of Big Data", creator: "purepat studio", price: "$25", rating: "4.5", level: "Beginner" },
  { id: "4", image: "course4.jpg", title: "Balancing Productivity and Life", creator: "purepat studio", price: "$25", rating: "4.5", level: "Beginner" },
  { id: "5", image: "course5.jpg", title: "Mastering Money Management", creator: "purepat studio", price: "$25", rating: "4.5", level: "Beginner" },
  { id: "6", image: "course6.jpg", title: "From Idea to Startup Success", creator: "purepat studio", price: "$25", rating: "4.5", level: "Beginner" },
];

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration",
  "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design",
  "Photography", "Productivity", "Web Development", "Data Science", "Cooking",
];

const learningPaths = [
  { icon: <Wrench size={20} />, title: "Design" },
  { icon: <Code2 size={20} />, title: "Development" },
  { icon: <Laptop size={20} />, title: "IT & Software" },
  { icon: <BriefcaseBusiness size={20} />, title: "Business" },
  { icon: <Megaphone size={20} />, title: "Marketing" },
  { icon: <Camera size={20} />, title: "Photography" },
];

const testimonials = [
  {
    image: "testimonial-sarah.png",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    text: `"ByteSpace has transformed my approach to online learning. The range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    image: "testimonial-james.png",
    name: "James L.",
    role: "Lifelong Learner",
    text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    image: "testimonial-alex.png",
    name: "Alex R.",
    role: "Inspired Creator",
    text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

const studentAvatars = ["student-01.png", "student-02.png", "student-03.png", "student-04.png"];

/* ============================================================
   COURSE CARD — defined OUTSIDE Home to prevent re-creation
============================================================ */

function CourseCard({ course }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={asset(course.image)}
          alt={course.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {/* Overlay badges */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1">
          <span className="rounded-full bg-black/55 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">17 Lessons</span>
          <span className="rounded-full bg-black/55 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">2 hrs 16 mins</span>
          <span className="rounded-full bg-black/55 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">59 Comments</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">

        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-[14px] font-semibold leading-snug text-[#111827]">
            {course.title}
          </h3>
          <div className="mt-0.5 flex shrink-0 items-center gap-1 text-[12px] text-gray-500">
            <span>{course.rating}</span>
            <Star size={12} fill="currentColor" />
          </div>
        </div>

        {/* Creator */}
        <p className="mt-1 text-[12px] text-gray-400">
          by <span className="text-[#315BE8]">{course.creator}</span>
        </p>

        {/* Level + Avatars */}
        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
            <BarChart2 size={12} />
            {course.level}
          </span>

          <div className="flex items-center">
            {studentAvatars.map((img) => (
              <img
                key={img}
                src={asset(img)}
                alt=""
                className="-ml-1.5 h-6 w-6 rounded-full border-2 border-white object-cover first:ml-0"
              />
            ))}
            <span className="ml-2 rounded-full bg-[#D4FB20] px-2 py-0.5 text-[9px] font-bold">2K+</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-baseline gap-1.5">
          <span className="text-[16px] font-bold text-[#1350E8]">{course.price}</span>
          <span className="text-[11px] text-gray-400">lifetime</span>
        </div>

      </div>
    </article>
  );
}

/* ============================================================
   HOME PAGE
============================================================ */

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#111827]">

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        id="home"
        className="relative min-h-[700px] overflow-hidden bg-[#063BE8] text-white sm:min-h-[680px] lg:min-h-[660px]"
      >

        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.8) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Left lime blobs */}
        <div className="absolute left-[-42px] top-[200px] z-10 scale-75 sm:left-[-22px] sm:scale-100">
          <div className="h-10 w-[122px] rotate-[10deg] rounded-full bg-[#D4FB20]" />
          <div className="-mt-[3px] h-10 w-[112px] rotate-[28deg] rounded-full bg-[#D4FB20]" />
          <div className="-mt-[3px] h-10 w-[118px] rotate-[38deg] rounded-full bg-[#D4FB20]" />
        </div>

        {/* Right lime rectangle */}
        <div className="absolute right-[-36px] top-[185px] z-10 scale-75 sm:right-[-26px] sm:scale-100">
          <div className="h-[138px] w-[112px] rotate-[-25deg] rounded-[22px] bg-[#D4FB20]" />
        </div>

        {/* Centre content */}
        <div className="relative z-30 mx-auto flex max-w-[860px] flex-col items-center px-5 pt-[130px] text-center sm:pt-[150px]">

          <h1 className="max-w-[400px] text-[38px] font-extrabold leading-[1.1] tracking-tight sm:max-w-[700px] sm:text-[54px] lg:text-[60px]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p className="mt-5 max-w-[340px] text-[13px] leading-[22px] text-white/75 sm:max-w-[560px] sm:text-[14px]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="mt-7 flex w-full justify-center px-4">
            <div className="flex w-full max-w-[470px] items-center gap-2">

              {/* Input */}
              <div className="flex h-[42px] flex-1 items-center rounded-full bg-white px-4 shadow-sm">
                <svg
                  className="mr-2 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="Course, topic, creator"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchQuery.trim()) {
                      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                    }
                  }}
                  className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Search Button */}
              <button
                type="button"
                onClick={() => {
                  if (searchQuery.trim()) {
                    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                  }
                }}
                className="h-[42px] rounded-full bg-[#D4FB20] px-6 text-sm font-medium text-black transition hover:bg-[#c5ed16]"
              >
                Search
              </button>

            </div>
          </div>

        </div>

        {/* Large lime circle (bottom) */}
        <div className="absolute bottom-[-285px] left-1/2 z-10 h-[540px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4FB20] sm:bottom-[-315px] sm:h-[590px] sm:w-[740px]" />

        {/* White oval ring */}
        <div className="absolute bottom-[45px] left-[7%] z-20 hidden h-[108px] w-[108px] rotate-[18deg] rounded-[45%] border-[26px] border-white sm:block lg:left-[44px]" />

        {/* Left white scribble lines */}
        <div className="absolute left-[18%] top-[340px] z-30 hidden rotate-[-15deg] sm:block lg:left-[205px]">
          <div className="h-[15px] w-[56px] rounded-full bg-white" />
          <div className="mt-1 h-[15px] w-[50px] rotate-[-12deg] rounded-full bg-white" />
          <div className="mt-1 h-[15px] w-[46px] rotate-[-18deg] rounded-full bg-white" />
        </div>

        {/* Right white triangle */}
        <div className="absolute right-[8%] top-[325px] z-30 hidden rotate-[18deg] sm:block lg:right-[108px]">
          <div className="h-0 w-0 border-b-[74px] border-l-[37px] border-r-[37px] border-b-white border-l-transparent border-r-transparent" />
        </div>

        {/* Right white scribble lines */}
        <div className="absolute right-[5%] top-[455px] z-30 hidden rotate-[12deg] sm:block lg:right-[52px]">
          <div className="h-[18px] w-[74px] rounded-full bg-white" />
          <div className="mt-1 h-[18px] w-[74px] rotate-[14deg] rounded-full bg-white" />
          <div className="mt-1 h-[18px] w-[68px] rotate-[14deg] rounded-full bg-white" />
          <div className="mt-1 h-[18px] w-[62px] rotate-[14deg] rounded-full bg-white" />
        </div>

        {/* Floating card — UI/UX Design */}
        <div className="absolute bottom-[178px] left-[8%] z-50 hidden rounded-xl bg-white px-4 py-2.5 text-left shadow-lg sm:block lg:left-[27%]">
          <p className="text-[12px] font-semibold text-gray-900">UI/UX Design</p>
          <p className="mt-0.5 text-[10px] text-gray-400">200 Courses • 1000+ Students</p>
        </div>

        {/* Floating card — Learning Progress */}
        <div className="absolute bottom-[148px] right-[8%] z-50 hidden w-[155px] rounded-xl bg-white px-4 py-3 text-left shadow-lg sm:block lg:right-[23%]">
          <p className="text-[11px] text-gray-500">Learning Progress</p>
          <p className="mt-1 text-[34px] font-extrabold leading-none text-[#111827]">55%</p>
          <div className="mt-2 h-[5px] w-[72px] rounded-full bg-[#D4FB20]" />
        </div>

        {/* Floating card — Happy Students */}
        <div className="absolute bottom-[36px] left-[7%] z-50 hidden rounded-xl bg-white px-4 py-2.5 text-left shadow-lg sm:block lg:left-[21%]">
          <p className="text-[11px] text-gray-500">Happy Students</p>
          <div className="mt-1.5 flex items-center gap-2">
            <div className="flex -space-x-2">
              {["student-01.png", "student-02.png", "student-03.png", "student-04.png", "student-05.png", "student-06.png"].map((img) => (
                <img
                  key={img}
                  src={asset(img)}
                  alt=""
                  className="h-[24px] w-[24px] rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="rounded-full bg-[#D4FB20] px-2 py-0.5 text-[10px] font-bold">2K+</span>
          </div>
        </div>

        {/* Hero person */}
        <div className="absolute bottom-0 left-1/2 z-40 w-[260px] -translate-x-1/2 sm:w-[330px] lg:w-[375px]">
          <img
            src={asset("hero-person.png")}
            alt="Student"
            className="block h-auto w-full"
          />
        </div>

      </section>

      {/* ==================================================
          PARTNER LOGOS
      ================================================== */}

      <section className="border-b border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-[800px] items-center justify-between gap-8 overflow-x-auto px-6">
          {[
            "partner-logo-01.svg",
            "partner-logo-02.svg",
            "partner-logo-03.svg",
            "partner-logo-04.svg",
            "partner-logo-05.svg",
          ].map((img) => (
            <img
              key={img}
              src={asset(img)}
              alt="Partner"
              className="h-7 w-auto min-w-[80px] object-contain opacity-50 grayscale"
            />
          ))}
        </div>
      </section>

      {/* ==================================================
          COURSES SECTION
      ================================================== */}

      <section id="courses" className="bg-white px-5 py-16 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1000px]">

          {/* Heading */}
          <div className="mx-auto max-w-[620px] text-center">
            <h2 className="text-[28px] font-bold leading-[1.2] sm:text-[34px]">
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>
            <p className="mt-4 text-[13px] leading-[22px] text-gray-400 sm:text-[14px]">
              At ByteSpace Courses, we bring you closer to life-changing knowledge.
              Explore a variety of courses across different fields, from technology
              to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="mx-auto mt-7 flex max-w-[840px] flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-[7px] text-[11px] font-medium transition-all ${activeCategory === cat
                  ? "bg-[#D4FB20] text-black"
                  : "bg-gray-100 text-gray-600 hover:bg-[#D4FB20] hover:text-black"
                  }`}
              >
                {cat}
              </button>
            ))}
            <button className="px-3 text-[11px] font-medium text-[#315BE8] hover:underline">
              + More
            </button>
          </div>

          {/* Course grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          LEARNING PATHS
      ================================================== */}

      <section className="bg-white px-5 pb-16 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1000px] text-center">

          <h2 className="text-[26px] font-bold sm:text-[30px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-3 max-w-[660px] text-[13px] leading-[22px] text-gray-400 sm:text-[14px]">
            At ByteSpace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there's
            something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {learningPaths.map((item) => (
              <div
                key={item.title}
                className="group flex min-h-[115px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#D4FB20] text-black transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <p className="mt-3 text-[13px] font-semibold">{item.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          PROFESSIONAL GROWTH
      ================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#fbffe8] via-white to-[#edf2ff] px-5 py-16 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1000px]">

          {/* ---- Row 1: Text (left) + Course visual (right) ---- */}
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Text */}
            <div>
              <h2 className="max-w-[400px] text-[30px] font-bold leading-[1.12] sm:text-[36px]">
                Your Path to Professional
                <br />
                Growth Starts Here!
              </h2>
              <p className="mt-5 max-w-[420px] text-[13px] leading-[23px] text-gray-500">
                Explore our curated selection of courses tailored to enhance your
                capabilities and accelerate your career journey. Whether you're
                looking to sharpen specific skills, gain industry expertise, or
                embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Stats */}
              <div className="mt-8 flex gap-10">
                <div>
                  <p className="text-[30px] font-extrabold text-[#1552E8]">12K</p>
                  <p className="text-[12px] text-gray-500">Students</p>
                </div>
                <div>
                  <p className="text-[30px] font-extrabold text-[#1552E8]">70+</p>
                  <p className="text-[12px] text-gray-500">Courses</p>
                </div>
                <div>
                  <p className="text-[30px] font-extrabold text-[#1552E8]">16</p>
                  <p className="text-[12px] text-gray-500">Creators</p>
                </div>
              </div>
            </div>

            {/* Course card visual — built entirely with JSX, no image needed */}
            <div className="relative mx-auto w-full max-w-[460px] pb-10">

              {/* Mock course card */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-2xl w-[78%]">

                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={asset("course1.jpg")}
                    alt="Learn Figma"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                    <span className="rounded-full bg-black/55 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">17 Lessons</span>
                    <span className="rounded-full bg-black/55 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">2 hrs 16 mins</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <h3 className="text-[15px] font-bold text-[#111827]">Learn Figma from Basic</h3>
                  <p className="mt-1 text-[12px] text-gray-400">
                    by <span className="text-[#315BE8]">purepat studio</span>
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-gray-500">
                    <BarChart2 size={12} />
                    <span>Beginner</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-[17px] font-bold text-[#1350E8]">$25</span>
                    <span className="text-[11px] text-gray-400">lifetime</span>
                  </div>
                </div>

              </div>

              {/* Person overlay — on top of the card */}
              <img
                src={asset("hero-person.png")}
                alt=""
                className="absolute bottom-0 left-[38%] w-[46%] z-10"
              />

              {/* Learning Progress floating card */}
              <div className="absolute bottom-[55px] right-0 rounded-xl bg-white px-4 py-3 shadow-xl z-20">
                <p className="text-[11px] text-gray-500">Learning Progress</p>
                <p className="mt-1 text-[30px] font-extrabold leading-none">55%</p>
                <div className="mt-2 h-[5px] w-[62px] rounded-full bg-[#D4FB20]" />
              </div>

              {/* Lime scribble — top right */}
              <div className="absolute right-[2%] top-[18%] rotate-[20deg]">
                <div className="h-4 w-12 rounded-full bg-[#D4FB20]" />
                <div className="mt-1 h-4 w-10 rotate-[25deg] rounded-full bg-[#D4FB20]" />
                <div className="mt-1 h-4 w-12 rotate-[35deg] rounded-full bg-[#D4FB20]" />
              </div>

            </div>

          </div>

          {/* ---- Row 2: Female visual (left) + Feature text (right) ---- */}
          <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

            {/* Female visual */}
            <div className="relative mx-auto w-full max-w-[440px]">
              <img
                src={asset("professional-woman.png")}
                alt="Professional creator"
                className="mx-auto w-[75%] object-contain"
              />

              {/* Revenue cards */}
              <div className="absolute left-0 top-[20%] space-y-3">
                <div className="rounded-xl bg-[#063BE8] px-4 py-3 text-white shadow-lg">
                  <p className="text-[10px]">Total Revenue</p>
                  <p className="mt-1 text-[16px] font-bold">$120.29</p>
                </div>
                <div className="rounded-xl bg-[#063BE8] px-4 py-3 text-white shadow-lg">
                  <p className="text-[10px]">Year to Date</p>
                  <p className="mt-1 text-[16px] font-bold">$1,200.38</p>
                </div>
              </div>

              {/* Happy students */}
              <div className="absolute bottom-[12%] right-0 rounded-xl bg-white px-3 py-2.5 shadow-lg">
                <p className="text-[10px] text-gray-500">Happy Students</p>
                <div className="mt-1.5 flex -space-x-2">
                  {["student-01.png", "student-02.png", "student-03.png", "student-04.png", "student-05.png"].map((img) => (
                    <img
                      key={img}
                      src={asset(img)}
                      alt=""
                      className="h-6 w-6 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Feature text */}
            <div>
              <h2 className="text-[30px] font-bold leading-[1.12] sm:text-[36px]">
                Create & Manage
                <br />
                Courses Easily.
              </h2>
              <p className="mt-5 max-w-[420px] text-[13px] leading-[23px] text-gray-500">
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>
              <div className="mt-7 space-y-4">
                {[
                  "Share Your Expertise",
                  "Monetize Your Passion",
                  "Flexibility and Autonomy",
                  "Build a Community",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[13px] text-gray-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1552E8] text-white">
                      <Check size={11} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          CREATOR CTA
      ================================================== */}

      <section
        id="creators"
        className="relative overflow-hidden bg-[#063BE8] px-5 py-16 text-white sm:px-8 lg:px-0"
      >

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Lime blobs — left */}
        <div className="absolute left-[-28px] top-[15px] rotate-[20deg]">
          <div className="h-7 w-20 rounded-full bg-[#D4FB20]" />
          <div className="mt-1 h-7 w-16 rotate-[20deg] rounded-full bg-[#D4FB20]" />
        </div>

        {/* Lime blobs — right */}
        <div className="absolute right-[3%] top-[25px] rotate-[25deg]">
          <div className="h-7 w-20 rounded-full bg-[#D4FB20]" />
          <div className="mt-1 h-7 w-16 rotate-[20deg] rounded-full bg-[#D4FB20]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[820px] text-center">

          <h2 className="text-[28px] font-bold leading-[1.2] sm:text-[36px]">
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>

          <p className="mx-auto mt-5 max-w-[660px] text-[13px] leading-[22px] text-white/75 sm:text-[14px]">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a dynamic
            community comprising over 10,000 local and international creators.
            Utilize our Course Editor, and showcase your expertise by publishing
            your finest course on the ByteSpace Course Library.
          </p>

          <button
            id="join-creator-btn"
            className="mt-8 rounded-full bg-[#D4FB20] px-8 py-3 text-[13px] font-bold text-black transition-colors hover:bg-[#c5ee10]"
          >
            Join as Creator
          </button>

        </div>
      </section>

      {/* ==================================================
          TESTIMONIALS
      ================================================== */}

      <section className="bg-gradient-to-br from-[#fbffe9] via-white to-[#f4f8ff] px-5 py-16 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1000px]">

          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <h2 className="text-[28px] font-bold leading-[1.2] sm:text-[34px]">
                Discover What Our
                <br />
                Community Is Saying
              </h2>
            </div>
            <div>
              <p className="text-[13px] leading-[22px] text-gray-500 sm:text-[14px]">
                At ByteSpace, our vibrant community of learners and creators is at
                the heart of what we do. Hear directly from those who have
                experienced the transformative journey of learning and creating on
                our platform. Explore testimonials that reflect the diverse
                perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={asset(t.image)}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[13px] font-semibold">{t.name}</h3>
                    <p className="mt-0.5 text-[11px] text-[#315BE8]">{t.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-[12px] leading-[20px] text-gray-500">{t.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>



    </div>
  );
}

export default Home;