import { useNavigate, useParams } from "react-router-dom";
import {
  Play,
  Star,
  Clock,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

const asset = (name) => `/src/assets/${name}`;


/* ============================================================
   REVIEW DATA
============================================================ */

const reviews = [
  {
    id: 1,
    name: "Purpa Patel",
    role: "Professional Creator",
    rating: 5,
    date: "2 days ago",
    text: "This course is very helpful and easy to follow. The lessons are clear and the practical examples made everything much easier to understand.",
  },
  {
    id: 2,
    name: "Albert Parks",
    role: "Digital Creator",
    rating: 5,
    date: "1 week ago",
    text: "I really enjoyed this course. The content is well organized and the instructor explains the concepts in a simple and practical way.",
  },
  {
    id: 3,
    name: "Emily Taylor",
    role: "Creative Designer",
    rating: 4,
    date: "2 weeks ago",
    text: "A great learning experience overall. I especially liked the practical lessons and the way the modules were structured.",
  },
  {
    id: 4,
    name: "Brenda Johnson",
    role: "Digital Artist",
    rating: 5,
    date: "3 weeks ago",
    text: "Very useful course for anyone who wants to improve their digital creation skills. The lessons are short, focused and easy to understand.",
  },
];


/* ============================================================
   MAIN PAGE
============================================================ */

const courseDataMap = {
  1: {
    title: "Learn Figma from Basic",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    creator: "purepat studio",
    level: "Beginner",
    rating: "4.5 (85 reviews)",
    students: "1000+ Students",
    image: "course1.jpg",
  },
  2: {
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    creator: "purepat studio",
    level: "Intermediate",
    rating: "4.5 (72 reviews)",
    students: "1000+ Students",
    image: "course2.jpg",
  },
  3: {
    title: "Unlock the Power of Big Data",
    subtitle: "Learn how to work with data and turn it into valuable insights.",
    creator: "purepat studio",
    level: "Beginner",
    rating: "4.6 (90 reviews)",
    students: "1000+ Students",
    image: "course3.jpg",
  },
  4: {
    title: "Balancing Productivity and Life",
    subtitle: "Build better productivity habits and create a balanced lifestyle.",
    creator: "purepat studio",
    level: "Beginner",
    rating: "4.4 (60 reviews)",
    students: "800+ Students",
    image: "course4.jpg",
  },
  5: {
    title: "Mastering Money Management",
    subtitle: "Learn practical financial skills for everyday life.",
    creator: "purepat studio",
    level: "Beginner",
    rating: "4.7 (110 reviews)",
    students: "900+ Students",
    image: "course5.jpg",
  },
  6: {
    title: "From Idea to Startup Success",
    subtitle: "Turn your idea into a successful business with practical guidance.",
    creator: "purepat studio",
    level: "Beginner",
    rating: "4.8 (120 reviews)",
    students: "1000+ Students",
    image: "course6.jpg",
  },
};

function CourseReviews() {
  const navigate = useNavigate();
  const { id } = useParams();
  const cId = id || "1";

  const currentCourse = courseDataMap[cId] || courseDataMap[1];

  return (
    <div className="min-h-screen bg-white text-[#111827]">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#063BE8] text-white">

        {/* Grid Background */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,.8) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,.8) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-[1050px] px-6 pt-7">

          {/* ==================================================
              COURSE HEADER
          ================================================== */}

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[12px] font-bold text-white">
                Course Reviews
              </p>

            </div>

            <button
              type="button"
              onClick={() => navigate(`/course/${cId}`)}
              className="flex items-center gap-1 rounded-full bg-[#D4FB20] px-4 py-1.5 text-[8px] font-medium text-black"
            >
              <ArrowLeft size={9} />
              Back to Course
            </button>

          </div>


          {/* Course Title */}

          <div className="mt-7">

            <h1 className="text-[23px] font-bold leading-tight sm:text-[30px]">
              {currentCourse.title}
            </h1>

            <p className="mt-1 max-w-[600px] text-[8px] text-white/80">
              {currentCourse.subtitle}
            </p>

            <p className="mt-2 text-[7px] text-white/70">
              by {currentCourse.creator}
            </p>


            {/* Badges */}

            <div className="mt-3 flex flex-wrap gap-2">

              <span className="rounded-full bg-white px-3 py-1 text-[7px] text-gray-700">
                {currentCourse.level}
              </span>

              <span className="rounded-full bg-white px-3 py-1 text-[7px] text-gray-700">
                {currentCourse.rating}
              </span>

              <span className="rounded-full bg-white px-3 py-1 text-[7px] text-gray-700">
                {currentCourse.students}
              </span>

            </div>

          </div>


          {/* ==================================================
              VIDEO + COURSE CARD
          ================================================== */}

          <div className="mt-5 grid gap-5 pb-6 lg:grid-cols-[1fr_300px]">

            {/* VIDEO */}

            <div className="relative overflow-hidden rounded-xl bg-gray-200">

              <div className="aspect-video">

                <img
                  src={asset(currentCourse.image)}
                  alt={currentCourse.title}
                  className="h-full w-full object-cover"
                />

              </div>


              {/* Play */}

              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg"
              >
                <Play
                  size={17}
                  fill="currentColor"
                  className="ml-0.5 text-gray-700"
                />
              </button>

            </div>


            {/* RIGHT COURSE CARD */}

            <div className="rounded-xl bg-white p-4 text-[#111827] shadow-sm">

              <h2 className="text-[10px] font-bold">
                T2 Lessons (24 hours)
              </h2>


              {/* Lessons */}

              <div className="mt-3 space-y-2">

                {[
                  ["01", "Introduction to Digital Creation", "12 mins"],
                  ["02", "Design Principles", "20 mins"],
                  ["03", "Practical Techniques", "15 mins"],
                  ["04", "Advanced Techniques", "30 mins"],
                  ["05", "Digital Asset Management", "18 mins"],
                ].map(([number, title, time]) => (

                  <div
                    key={number}
                    className="flex items-start justify-between gap-2 text-[7px]"
                  >

                    <div className="flex gap-1">

                      <span className="text-gray-400">
                        {number}
                      </span>

                      <span className="text-gray-600">
                        {title}
                      </span>

                    </div>

                    <span className="shrink-0 text-[#1350E8]">
                      {time}
                    </span>

                  </div>

                ))}

              </div>


              {/* Price */}

              <div className="mt-3 border-t border-gray-100 pt-3">

                <p className="text-[7px] text-gray-400">
                  Price
                </p>

                <p className="text-[18px] font-bold text-[#1350E8]">
                  $25
                  <span className="ml-1 text-[7px] font-normal text-gray-400">
                    lifetime
                  </span>
                </p>

                <button
                  type="button"
                  className="mt-2 w-full rounded-full bg-[#D4FB20] py-2 text-[8px] font-medium text-black"
                >
                  Enroll Now
                </button>

              </div>


              {/* Includes */}

              <div className="mt-4">

                <p className="text-[8px] font-semibold">
                  This course includes
                </p>

                <div className="mt-2 space-y-1.5 text-[7px] text-gray-500">

                  <p>✓ Learning Resources</p>
                  <p>✓ Quality Lesson Videos</p>
                  <p>✓ Certificate of Completion</p>
                  <p>✓ Private Consultation</p>

                </div>

              </div>


              {/* Creator */}

              <div className="mt-4 border-t border-gray-100 pt-3">

                <p className="text-[8px] font-semibold">
                  Purpa Patel Studio
                </p>

                <p className="mt-1 text-[7px] text-gray-400">
                  Professional Course Creator
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          MAIN
      ====================================================== */}

      <main className="mx-auto max-w-[1050px] px-6 py-6">


        {/* ====================================================
            TABS
        ==================================================== */}

        <div className="flex gap-2">

          {/* ABOUT */}

          <button
            type="button"
            onClick={() => {
              navigate(`/course/${id}`);
              window.scrollTo(0, 0);
            }}
            className="rounded-full bg-gray-100 px-4 py-2 text-[9px] text-gray-500 transition hover:bg-gray-200"
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
            className="rounded-full bg-gray-100 px-4 py-2 text-[9px] text-gray-500 transition hover:bg-gray-200"
          >
            Lessons
          </button>


          {/* REVIEWS */}

          <button
            type="button"
            className="rounded-full bg-[#D4FB20] px-4 py-2 text-[9px] font-medium text-black"
          >
            Reviews
          </button>

        </div>


        {/* ====================================================
            REVIEW SUMMARY
        ==================================================== */}

        <section className="mt-5">

          <h2 className="text-[13px] font-bold">
            What Learners Are Saying
          </h2>

          <p className="mt-2 max-w-[700px] text-[8px] leading-5 text-gray-500">
            Read reviews from students who have completed this
            course and learn about their experience with the
            content, lessons and learning process.
          </p>


          {/* Summary Card */}

          <div className="mt-4 max-w-[650px] rounded-xl border border-gray-200 p-4">

            <div className="grid grid-cols-[90px_1fr] gap-5">


              {/* Rating */}

              <div className="flex flex-col items-center justify-center rounded-lg bg-[#D4FB20] py-3">

                <span className="text-[26px] font-bold">
                  4.7
                </span>

                <div className="mt-1 flex">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      size={9}
                      fill="currentColor"
                      className="text-black"
                    />

                  ))}

                </div>

                <span className="mt-1 text-[6px]">
                  72 Reviews
                </span>

              </div>


              {/* Rating Bars */}

              <div className="flex flex-col justify-center space-y-2">

                {[
                  ["5", "82%"],
                  ["4", "64%"],
                  ["3", "28%"],
                  ["2", "10%"],
                  ["1", "5%"],
                ].map(([rating, width]) => (

                  <div
                    key={rating}
                    className="flex items-center gap-2"
                  >

                    <span className="w-3 text-[7px] text-gray-500">
                      {rating}
                    </span>

                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">

                      <div
                        className="h-full rounded-full bg-[#D4FB20]"
                        style={{
                          width,
                        }}
                      />

                    </div>

                    <div className="flex">

                      {[1, 2, 3, 4, 5].map((star) => (

                        <Star
                          key={star}
                          size={7}
                          fill="currentColor"
                          className="text-black"
                        />

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ====================================================
            INDIVIDUAL REVIEWS
        ==================================================== */}

        <section className="mt-6 max-w-[650px]">

          <div className="flex items-center justify-between">

            <h2 className="text-[11px] font-bold">
              Individual Reviews
            </h2>

            <button
              type="button"
              className="rounded-full bg-[#D4FB20] px-3 py-1 text-[7px] font-medium text-black"
            >
              Write a review
            </button>

          </div>


          {/* Review Filter */}

          <div className="mt-3 flex gap-2">

            {["All", "5", "4", "3", "2"].map(
              (item, index) => (

                <button
                  key={item}
                  type="button"
                  className={`rounded-full px-3 py-1 text-[7px] ${index === 0
                    ? "bg-[#D4FB20] text-black"
                    : "bg-gray-100 text-gray-500"
                    }`}
                >
                  {item === "All" ? "All Reviews" : `${item} ★`}
                </button>

              )
            )}

          </div>


          {/* Reviews */}

          <div className="mt-4 space-y-3">

            {reviews.map((review) => (

              <article
                key={review.id}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >

                {/* Header */}

                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-2">

                    {/* Avatar */}

                    <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-gray-100">

                      <img
                        src={asset(
                          `student-0${((review.id - 1) % 4) + 1}.png`
                        )}
                        alt=""
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                    </div>


                    <div>

                      <p className="text-[8px] font-semibold">
                        {review.name}
                      </p>

                      <p className="mt-0.5 text-[6px] text-gray-400">
                        {review.role}
                      </p>

                    </div>

                  </div>


                  <span className="text-[6px] text-gray-400">
                    {review.date}
                  </span>

                </div>


                {/* Stars */}

                <div className="mt-2 flex">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      size={8}
                      fill={
                        star <= review.rating
                          ? "currentColor"
                          : "none"
                      }
                      className={
                        star <= review.rating
                          ? "text-black"
                          : "text-gray-300"
                      }
                    />

                  ))}

                </div>


                {/* Text */}

                <p className="mt-2 text-[7px] leading-5 text-gray-500">
                  {review.text}
                </p>

              </article>

            ))}

          </div>

        </section>


        {/* ====================================================
            BACK TO COURSE
        ==================================================== */}

        <button
          type="button"
          onClick={() => {
            navigate(`/course/${id}`);
            window.scrollTo(0, 0);
          }}
          className="mt-6 flex items-center gap-1 rounded-full border border-gray-200 px-4 py-2 text-[8px] text-gray-500 hover:bg-gray-50"
        >
          <ArrowLeft size={9} />
          Back to Course
        </button>

      </main>

    </div>
  );
}

export default CourseReviews;