import { useNavigate, useParams } from "react-router-dom";
import {
  Play,
  Clock,
  CheckCircle,
  Video,
  ArrowLeft,
  BarChart2,
} from "lucide-react";

const asset = (name) => `/src/assets/${name}`;

const lessons = [
  {
    id: 1,
    title: "Introduction to Digital Creation",
    duration: "12 mins",
    description:
      "Learn the fundamentals of digital creation and understand the basic concepts you need to get started.",
  },
  {
    id: 2,
    title: "Design Principles",
    duration: "20 mins",
    description:
      "Understand important design principles and learn how to create visually engaging digital content.",
  },
  {
    id: 3,
    title: "Advanced Techniques in Digital Creation",
    duration: "15 mins",
    description:
      "Explore advanced techniques and practical methods used to create professional digital assets.",
  },
  {
    id: 4,
    title: "Project Showcase and Editing",
    duration: "18 mins",
    description:
      "Learn how to organize, edit and present your digital projects professionally.",
  },
  {
    id: 5,
    title: "Optimizing Your Visuals",
    duration: "14 mins",
    description:
      "Discover techniques for improving visual quality, consistency and overall presentation.",
  },
  {
    id: 6,
    title: "Digital Asset Management",
    duration: "16 mins",
    description:
      "Learn how to manage, organize and maintain your digital assets efficiently.",
  },
  {
    id: 7,
    title: "Building Your Portfolio",
    duration: "20 mins",
    description:
      "Create a professional portfolio and learn how to showcase your work effectively.",
  },
];

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

function Lesson() {
  const navigate = useNavigate();
  const { courseId, id, lessonId } = useParams();
  const cId = courseId || id || "1";

  const currentCourse = courseDataMap[cId] || courseDataMap[1];

  const currentLessonId = Number(lessonId) || 1;

  const currentLesson =
    lessons.find((lesson) => lesson.id === currentLessonId) || lessons[0];

  const progress = Math.round(
    (currentLessonId / lessons.length) * 100
  );

  return (
    <div className="min-h-screen bg-white text-[#111827]">

      {/* =====================================================
          HERO
      ===================================================== */}

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

        <div className="relative mx-auto max-w-[1050px] px-6 pb-0 pt-8">

          {/* Back */}
          <button
            type="button"
            onClick={() => navigate(`/course/${cId}`)}
            className="mb-5 flex items-center gap-2 text-[10px] text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={13} />
            Back to Course
          </button>

          {/* Course Title */}
          <p className="text-[8px] text-white/60">
            Course Lessons
          </p>

          <h1 className="mt-2 text-[24px] font-bold leading-tight sm:text-[30px]">
            {currentCourse.title}
          </h1>

          <p className="mt-1 max-w-[600px] text-[9px] text-white/70">
            {currentCourse.subtitle}
          </p>

          <p className="mt-2 text-[8px] text-white/60">
            by {currentCourse.creator}
          </p>

          {/* Course badges */}
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


          {/* =================================================
              VIDEO + COURSE INFO
          ================================================= */}

          <div className="mt-5 grid gap-5 pb-6 lg:grid-cols-[1fr_300px]">

            {/* Video */}
            <div className="relative overflow-hidden rounded-xl bg-gray-200">

              <div className="aspect-video">

                <img
                  src={asset(currentCourse.image)}
                  alt={currentCourse.title}
                  className="h-full w-full object-cover"
                />

              </div>

              {/* Play button */}
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


            {/* Right Course Card */}
            <div className="rounded-xl bg-white p-4 text-[#111827] shadow-sm">

              <h2 className="text-[10px] font-bold">
                T2 Lessons (24 hours)
              </h2>

              <div className="mt-3 space-y-2">

                {lessons.slice(0, 5).map((lesson) => (

                  <div
                    key={lesson.id}
                    className="flex items-start justify-between gap-2 text-[7px]"
                  >

                    <div>
                      <span className="mr-1 text-gray-400">
                        {String(lesson.id).padStart(2, "0")}
                      </span>

                      <span className="text-gray-600">
                        {lesson.title}
                      </span>
                    </div>

                    <span className="shrink-0 text-[#1350E8]">
                      {lesson.duration}
                    </span>

                  </div>

                ))}

              </div>

              <div className="mt-3 border-t border-gray-100 pt-3">

                <p className="text-[8px] text-gray-400">
                  Price
                </p>

                <p className="mt-1 text-[18px] font-bold text-[#1350E8]">
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

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TABS + MAIN CONTENT
      ===================================================== */}

      <main className="mx-auto max-w-[1050px] px-6 py-6">

        {/* Tabs */}

        <div className="flex gap-2">

          {/* ABOUT */}

          <button
            type="button"
            onClick={() => {
              navigate(`/course/${courseId}`);
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
              navigate(`/course/${courseId}/lesson/${currentLessonId}`);
              window.scrollTo(0, 0);
            }}
            className="rounded-full bg-[#D4FB20] px-4 py-2 text-[9px] font-medium text-black"
          >
            Lessons
          </button>


          {/* REVIEWS */}

          <button
            type="button"
            onClick={() => {
              navigate(`/course/${courseId}/reviews`);
              window.scrollTo(0, 0);
            }}
            className="rounded-full bg-gray-100 px-4 py-2 text-[9px] text-gray-500 transition hover:bg-gray-200"
          >
            Reviews
          </button>

        </div>


        {/* =================================================
            TWO COLUMN CONTENT
        ================================================= */}

        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_300px]">


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>

            {/* Explore Modules */}

            <section>

              <h2 className="text-[12px] font-bold">
                Explore the Modules
              </h2>

              <p className="mt-2 max-w-[700px] text-[8px] leading-5 text-gray-500">
                Explore the different modules of this course and
                progress through each lesson at your own pace.
              </p>

            </section>


            {/* Lesson List */}

            <section className="mt-5">

              <h2 className="text-[11px] font-bold">
                Lesson List
              </h2>

              <div className="mt-3 space-y-2">

                {lessons.map((lesson) => {

                  const active = lesson.id === currentLessonId;

                  return (
                    <button
                      key={lesson.id}
                      type="button"
                      onClick={() => {
                        navigate(
                          `/course/${courseId}/lesson/${lesson.id}`
                        );
                        window.scrollTo(0, 0);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg p-2.5 text-left transition ${active
                        ? "bg-[#D4FB20]"
                        : "bg-gray-50 hover:bg-gray-100"
                        }`}
                    >

                      {/* Icon */}

                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${active
                          ? "bg-[#D4FB20]"
                          : "bg-[#D4FB20]"
                          }`}
                      >
                        <Video
                          size={13}
                          className="text-black"
                        />
                      </div>


                      {/* Text */}

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center justify-between gap-2">

                          <h3 className="text-[8px] font-semibold text-gray-700">
                            {lesson.id}. {lesson.title}
                          </h3>

                          <span className="shrink-0 text-[7px] text-gray-400">
                            {lesson.duration}
                          </span>

                        </div>

                        <p className="mt-1 line-clamp-1 text-[7px] text-gray-400">
                          {lesson.description}
                        </p>

                      </div>

                    </button>
                  );
                })}

              </div>

            </section>


            {/* =================================================
                LESSON CONTENT
            ================================================= */}

            <section className="mt-7">

              <h2 className="text-[12px] font-bold">
                Lesson Content
              </h2>

              <p className="mt-3 text-[8px] leading-5 text-gray-500">
                In this lesson, you will learn the key concepts,
                techniques and practical knowledge required to
                work with digital assets effectively. Follow the
                lesson carefully and practice the concepts as you
                progress through the course.
              </p>

              <p className="mt-3 text-[8px] leading-5 text-gray-500">
                Each module is designed to help you gradually build
                your knowledge. By completing the lessons, you will
                develop a better understanding of digital creation
                and be able to apply the concepts to your own work.
              </p>

            </section>


            {/* =================================================
                PROGRESS
            ================================================= */}

            <section className="mt-7">

              <h2 className="text-[11px] font-bold">
                Lesson Progress Tracking
              </h2>

              <p className="mt-2 text-[8px] leading-5 text-gray-500">
                Follow your progress as you complete each lesson.
                Keep learning to complete the course.
              </p>


              <div className="mt-3 rounded-xl border border-gray-200 p-3">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <BarChart2 size={13} />

                    <span className="text-[8px] font-medium">
                      Learning Progress
                    </span>

                  </div>

                  <span className="text-[9px] font-bold">
                    {progress}%
                  </span>

                </div>


                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">

                  <div
                    className="h-full rounded-full bg-[#D4FB20]"
                    style={{
                      width: `${progress}%`,
                    }}
                  />

                </div>

              </div>

            </section>

          </div>


          {/* =================================================
              RIGHT SIDE LESSON NAVIGATION
          ================================================= */}

          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-4">

            <h2 className="text-[10px] font-bold">
              {lessons.length} Lessons
            </h2>

            <p className="mt-1 text-[7px] text-gray-400">
              Course curriculum
            </p>


            <div className="mt-4 space-y-1">

              {lessons.map((lesson) => {

                const active = lesson.id === currentLessonId;

                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => {
                      navigate(
                        `/course/${courseId}/lesson/${lesson.id}`
                      );
                      window.scrollTo(0, 0);
                    }}
                    className={`flex w-full items-center gap-2 rounded-lg p-2 text-left ${active
                      ? "bg-[#D4FB20]"
                      : "hover:bg-gray-50"
                      }`}
                  >

                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${active
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-500"
                        }`}
                    >
                      {active ? (
                        <Play
                          size={9}
                          fill="currentColor"
                        />
                      ) : (
                        <span className="text-[7px] font-bold">
                          {lesson.id}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="line-clamp-2 text-[7px] font-medium">
                        {lesson.title}
                      </p>

                      <div className="mt-1 flex items-center gap-1 text-[6px] text-gray-400">
                        <Clock size={7} />
                        {lesson.duration}
                      </div>

                    </div>

                  </button>
                );
              })}

            </div>


            {/* Current Lesson */}

            <div className="mt-4 border-t border-gray-100 pt-4">

              <p className="text-[7px] text-gray-400">
                Currently watching
              </p>

              <p className="mt-1 text-[8px] font-semibold">
                Lesson {currentLessonId}
              </p>

              <p className="mt-1 text-[7px] text-gray-400">
                {currentLesson.title}
              </p>

            </div>


            {/* Back */}

            <button
              type="button"
              onClick={() => navigate(`/course/${courseId}`)}
              className="mt-4 flex w-full items-center justify-center gap-1 rounded-full border border-gray-200 py-2 text-[7px] text-gray-500 hover:bg-gray-50"
            >
              <ArrowLeft size={9} />
              Back to Course
            </button>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default Lesson;