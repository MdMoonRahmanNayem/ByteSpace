import { Link } from "react-router-dom";

import studentImage from "../assets/student-01.png";

import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";
import course6 from "../assets/course6.jpg";


const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    image: course1,
    rating: "4.8",
    students: "120",
    price: "$25",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    image: course2,
    rating: "4.7",
    students: "120",
    price: "$25",
  },
  {
    id: 3,
    title: "The Power of Big Data",
    image: course3,
    rating: "4.9",
    students: "120",
    price: "$30",
  },
  {
    id: 4,
    title: "Blockchain Productivity...",
    image: course4,
    rating: "4.6",
    students: "120",
    price: "$20",
  },
  {
    id: 5,
    title: "Mastering Story Mapping...",
    image: course5,
    rating: "4.8",
    students: "120",
    price: "$25",
  },
  {
    id: 6,
    title: "From Ideas to Startup Success...",
    image: course6,
    rating: "4.7",
    students: "120",
    price: "$30",
  },
];


export default function CreatorProfile() {
  return (
    <div className="min-h-screen w-full bg-white text-[#111827]">

      {/* CREATOR HERO — full width */}
      <section className="grid-pattern bg-[#003BE7] px-5 pt-[140px] pb-12 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1000px]">

          {/* Top row: avatar + name + follow */}
          <div className="flex flex-wrap items-center justify-between gap-4">

            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-4 border-white/30 bg-gray-200">
                <img src={studentImage} alt="PurePearl Studio" className="h-full w-full object-cover" />
              </div>
              {/* Name + badge */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-[22px] font-bold text-white sm:text-[26px]">PurePearl Studio</h1>
                  <span className="rounded-full bg-[#D4FB20] px-3 py-[3px] text-[11px] font-semibold text-black">Creator</span>
                </div>
                <p className="mt-1 text-[13px] text-white/70">Digital skills · Design · Technology</p>
              </div>
            </div>

            {/* Follow button */}
            <button type="button" className="rounded-full bg-[#D4FB20] px-7 py-2.5 text-[13px] font-bold text-black transition hover:bg-[#c5ed16] active:scale-95">
              Follow
            </button>

          </div>

          {/* Description */}
          <p className="mt-6 max-w-[680px] text-[14px] leading-[24px] text-white/80">
            Welcome to the creative world of PurePearl Studio. We create practical,
            engaging and valuable learning experiences for modern creators. We focus on
            practical digital skills, design, technology and professional development.
            Our goal is to make learning simple, useful and enjoyable.
          </p>

          {/* Stats pills */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="rounded-full bg-white/15 px-4 py-2 text-[12px] text-white">📚 <span className="font-semibold">6</span> Courses</div>
            <div className="rounded-full bg-white/15 px-4 py-2 text-[12px] text-white">👥 <span className="font-semibold">685</span> Students</div>
            <div className="rounded-full bg-white/15 px-4 py-2 text-[12px] text-white">❤️ <span className="font-semibold">12</span> Followers</div>
            <div className="rounded-full bg-white/15 px-4 py-2 text-[12px] text-white">⭐ <span className="font-semibold">4.8</span> Avg Rating</div>
          </div>

        </div>
      </section>

      {/* COURSES AREA */}
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-0">
        <div className="mx-auto max-w-[1000px]">

          {/* Heading + filter row */}
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[20px] font-bold">Courses by PurePearl Studio</h2>
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" className="rounded-full bg-[#D4FB20] px-4 py-1.5 text-[12px] font-semibold text-black">All</button>
              <button type="button" className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[12px] text-gray-500 hover:bg-gray-50 transition">Latest</button>
              <button type="button" className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[12px] text-gray-500 hover:bg-gray-50 transition">Category</button>
              <button type="button" className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[12px] text-gray-500 hover:bg-gray-50 transition">Filter ↓</button>
            </div>
          </div>

          {/* Course grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <img src={course.image} alt={course.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 text-[14px] font-semibold leading-snug text-[#111827]">{course.title}</h3>
                  <p className="mt-1 line-clamp-2 text-[12px] leading-[18px] text-gray-400">
                    Learn practical skills and build your knowledge through this comprehensive course.
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[12px]">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium text-gray-700">{course.rating}</span>
                    <span className="text-gray-400">({course.students} students)</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="h-5 w-5 overflow-hidden rounded-full bg-gray-200">
                        <img src={studentImage} alt="" className="h-full w-full object-cover" />
                      </div>
                      <span className="text-[11px] text-gray-400">PurePearl Studio</span>
                    </div>
                    <span className="text-[15px] font-bold text-[#003BE7]">{course.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}