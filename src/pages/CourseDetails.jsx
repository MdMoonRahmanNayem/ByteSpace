import { useParams, useNavigate } from "react-router-dom";
import {
  Share2,
  Play,
  Star,
  Users,
  Check,
  Award,
  Video,
  FileText,
} from "lucide-react";

const asset = (name) => `/src/assets/${name}`;

const courses = {
  1: {
    image: "course1.jpg",
    title: "Learn Figma from Basic",
    shortTitle: "Learn Figma from Basic",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    creator: "purepat studio",
    price: "$25",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    students: "1000+ Students",
    level: "Beginner",
  },

  2: {
    image: "course2.jpg",
    title: "Build Digital Asset: A Comprehensive Guide",
    shortTitle: "Build Digital Asset",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    creator: "purepat studio",
    price: "$25",
    lessons: "12 Lessons",
    duration: "24 hours",
    students: "1000+ Students",
    level: "Intermediate",
  },

  3: {
    image: "course3.jpg",
    title: "Unlock the Power of Big Data",
    shortTitle: "The Power of Big Data",
    subtitle:
      "Learn how to work with data and turn it into valuable insights.",
    creator: "purepat studio",
    price: "$25",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    students: "1000+ Students",
    level: "Beginner",
  },

  4: {
    image: "course4.jpg",
    title: "Balancing Productivity and Life",
    shortTitle: "Balancing Productivity",
    subtitle:
      "Build better productivity habits and create a balanced lifestyle.",
    creator: "purepat studio",
    price: "$25",
    lessons: "15 Lessons",
    duration: "3 hours 20 mins",
    students: "800+ Students",
    level: "Beginner",
  },

  5: {
    image: "course5.jpg",
    title: "Mastering Money Management",
    shortTitle: "Mastering Money Management",
    subtitle: "Learn practical financial skills for everyday life.",
    creator: "purepat studio",
    price: "$25",
    lessons: "14 Lessons",
    duration: "4 hours",
    students: "900+ Students",
    level: "Beginner",
  },

  6: {
    image: "course6.jpg",
    title: "From Idea to Startup Success",
    shortTitle: "From Idea to Startup Success",
    subtitle:
      "Turn your idea into a successful business with practical guidance.",
    creator: "purepat studio",
    price: "$25",
    lessons: "16 Lessons",
    duration: "5 hours",
    students: "1000+ Students",
    level: "Beginner",
  },
};

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses[id] || courses[2];

  return (
    <div className="min-h-screen bg-white text-[#111827]">

      {/* =====================================================
          BLUE COURSE HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#063BE8] text-white">

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.8) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto max-w-[1180px] px-5 pb-8 pt-8">

          {/* Top Course Info */}

          <div className="flex items-start justify-between gap-6">

            <div>

              <div className="mb-3 flex flex-wrap items-center gap-2">

                <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-[#111827]">
                  {course.level}
                </span>

                <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[10px] text-[#111827]">
                  <Star size={11} fill="currentColor" />
                  4.5
                </span>

                <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[10px] text-[#111827]">
                  <Users size={11} />
                  {course.students}
                </span>

              </div>

              <h1 className="max-w-[700px] text-[24px] font-bold leading-tight sm:text-[30px]">
                {course.title}
              </h1>

              <p className="mt-2 text-[11px] text-white/80">
                {course.subtitle}
              </p>

              <p className="mt-2 text-[10px] text-white/80">
                by{" "}
                <span className="text-[#D4FB20]">
                  {course.creator}
                </span>
              </p>

            </div>

            <button
              type="button"
              className="mt-1 flex shrink-0 items-center gap-2 rounded-full bg-[#D4FB20] px-4 py-2 text-[10px] font-medium text-black"
            >
              <Share2 size={12} />
              Share
            </button>

          </div>


          {/* Main Course Area */}

          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_330px]">

            {/* Video */}

            <div className="relative overflow-hidden rounded-xl bg-gray-200">

              <img
                src={asset(course.image)}
                alt={course.title}
                className="h-[300px] w-full object-cover sm:h-[380px]"
              />

              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl"
              >
                <Play
                  size={21}
                  fill="currentColor"
                  className="ml-1 text-[#111827]"
                />
              </button>

            </div>


            {/* Course Information Card */}

            <div className="rounded-xl bg-white p-5 text-[#111827] shadow-xl">

              <h2 className="text-[14px] font-bold">
                {course.lessons} ({course.duration})
              </h2>


              {/* =====================================================
                  LESSONS
              ===================================================== */}

              <div className="mt-4 space-y-3">

                {/* Lesson 01 */}

                <button
                  type="button"
                  onClick={() =>
                    navigate(`/course/${id}/lesson/1`)
                  }
                  className="flex w-full items-start justify-between rounded-md p-1 text-left text-[10px] transition hover:bg-gray-50"
                >
                  <div className="flex gap-2">
                    <span className="text-gray-400">
                      01
                    </span>

                    <span>
                      Introduction to Digital Creation
                    </span>
                  </div>

                  <span className="text-[#315BE8]">
                    12 mins
                  </span>
                </button>


                {/* Lesson 02 */}

                <button
                  type="button"
                  onClick={() =>
                    navigate(`/course/${id}/lesson/2`)
                  }
                  className="flex w-full items-start justify-between rounded-md p-1 text-left text-[10px] transition hover:bg-gray-50"
                >
                  <div className="flex gap-2">
                    <span className="text-gray-400">
                      02
                    </span>

                    <span>
                      Design Principles
                    </span>
                  </div>

                  <span className="text-[#315BE8]">
                    25 mins
                  </span>
                </button>


                {/* Lesson 03 */}

                <button
                  type="button"
                  onClick={() =>
                    navigate(`/course/${id}/lesson/3`)
                  }
                  className="flex w-full items-start justify-between rounded-md p-1 text-left text-[10px] transition hover:bg-gray-50"
                >
                  <div className="flex gap-2">
                    <span className="text-gray-400">
                      03
                    </span>

                    <span>
                      Practical Techniques
                    </span>
                  </div>

                  <span className="text-[#315BE8]">
                    40 mins
                  </span>
                </button>


                {/* Lesson 04 */}

                <button
                  type="button"
                  onClick={() =>
                    navigate(`/course/${id}/lesson/4`)
                  }
                  className="flex w-full items-start justify-between rounded-md p-1 text-left text-[10px] transition hover:bg-gray-50"
                >
                  <div className="flex gap-2">
                    <span className="text-gray-400">
                      04
                    </span>

                    <span>
                      Advanced Techniques
                    </span>
                  </div>

                  <span className="text-[#315BE8]">
                    35 mins
                  </span>
                </button>

              </div>


              {/* Price */}

              <div className="mt-5 flex items-baseline gap-1">

                <span className="text-[23px] font-bold text-[#1350E8]">
                  {course.price}
                </span>

                <span className="text-[10px] text-gray-400">
                  lifetime
                </span>

              </div>


              {/* Enroll */}

              <button
                type="button"
                className="mt-3 h-9 w-full rounded-full bg-[#D4FB20] text-[11px] font-semibold text-black transition hover:bg-[#c5ed16]"
              >
                Enroll Now
              </button>


              {/* Includes */}

              <h3 className="mt-5 text-[11px] font-semibold">
                This course includes
              </h3>

              <div className="mt-3 space-y-2 text-[9px] text-gray-500">

                <p className="flex items-center gap-2">
                  <Video size={11} />
                  Online Learning Resources
                </p>

                <p className="flex items-center gap-2">
                  <FileText size={11} />
                  Quality Lesson Videos
                </p>

                <p className="flex items-center gap-2">
                  <Award size={11} />
                  Certificate of Completion
                </p>

                <p className="flex items-center gap-2">
                  <Check size={11} />
                  Private Discussion
                </p>

              </div>


              {/* Creator */}

              <div className="mt-5 border-t border-gray-100 pt-4">

                <div className="flex items-center gap-3">

                  <img
                    src={asset("student-01.png")}
                    alt={course.creator}
                    className="h-9 w-9 rounded-full object-cover"
                  />

                  <div>

                    <p className="text-[10px] font-semibold">
                      {course.creator}
                    </p>

                    <p className="text-[8px] text-gray-400">
                      Professional Course Creator
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          COURSE CONTENT
      ===================================================== */}

      <main className="mx-auto max-w-[1180px] px-5 py-8">

        {/* Tabs */}

        <div className="flex gap-2">

          {/* ABOUT */}
          <button
            type="button"
            onClick={() => {
              navigate(`/course/${id}`);
              window.scrollTo(0, 0);
            }}
            className="rounded-full bg-[#D4FB20] px-4 py-2 text-[10px] text-black"
          >
            About
          </button>


          {/* LESSONS */}
          <button
            type="button"
            onClick={() => {
              navigate(`/course/${id}/lesson/1`);
              window.scrollTo(0, 0);
            }}
            className="rounded-full bg-gray-100 px-4 py-2 text-[10px] text-gray-500 hover:bg-gray-200"
          >
            Lessons
          </button>


          {/* REVIEWS */}
          <button
            type="button"
            onClick={() => {
              navigate(`/course/${id}/reviews`);
              window.scrollTo(0, 0);
            }}
            className="rounded-full bg-gray-100 px-4 py-2 text-[10px] text-gray-500 hover:bg-gray-200"
          >
            Reviews
          </button>

        </div>


        {/* Description */}

        <section className="mt-7 max-w-[850px]">

          <h2 className="text-[15px] font-bold">
            Description
          </h2>

          <div className="mt-3 space-y-3 text-[10px] leading-5 text-gray-500">

            <p>
              Embark on an enlightening exploration into the world of
              digital creation with this comprehensive course. You will
              gain practical knowledge and develop the skills needed to
              create engaging and professional digital content.
            </p>

            <p>
              This course is designed for learners who want to understand
              the complete process of digital creation. From fundamental
              concepts to practical techniques, every lesson is structured
              to make learning simple and effective.
            </p>

            <p>
              By completing this course, you will gain valuable knowledge
              and practical experience that can be applied to your own
              projects and professional work.
            </p>

          </div>

        </section>


        {/* Sneak Peek */}

        <section className="mt-8">

          <h2 className="text-[14px] font-bold">
            Sneak Peek
          </h2>

          <div className="mt-3 flex gap-3 overflow-x-auto">

            {[
              course.image,
              "course2.jpg",
              "course3.jpg",
              "course4.jpg",
            ].map((img, index) => (

              <div
                key={`${img}-${index}`}
                className="h-[70px] w-[105px] shrink-0 overflow-hidden rounded-lg"
              >

                <img
                  src={asset(img)}
                  alt=""
                  className="h-full w-full object-cover"
                />

              </div>

            ))}

          </div>

        </section>


        {/* Key Points */}

        <section className="mt-7">

          <h2 className="text-[14px] font-bold">
            Key Points
          </h2>

          <div className="mt-3 space-y-2 text-[10px] text-gray-600">

            {[
              "Foundational Concepts",
              "Design Principles Mastery",
              "Advanced Techniques in Digital Creation",
              "Project Showcase and Usage",
              "Optimizing for Various Platforms",
              "Practical Applications",
              "Interactive Assignments",
              "Complete Project Portfolio",
            ].map((point) => (

              <p
                key={point}
                className="flex items-center gap-2"
              >

                <Check
                  size={11}
                  className="rounded-full bg-[#1350E8] p-[1px] text-white"
                />

                {point}

              </p>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default CourseDetails;