import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    category: "Design",
    level: "Beginner",
    price: 25,
    rating: 4.8,
    image: course1,
  },
  {
    id: 2,
    title: "Build Digital Assets",
    category: "Design",
    level: "Beginner",
    price: 25,
    rating: 4.7,
    image: course2,
  },
  {
    id: 3,
    title: "the Power of Big Data",
    category: "Data Science",
    level: "Beginner",
    price: 25,
    rating: 4.5,
    image: course3,
  },
  {
    id: 4,
    title: "Exploring Productivity with AI",
    category: "Technology",
    level: "Intermediate",
    price: 35,
    rating: 4.7,
    image: course4,
  },
  {
    id: 5,
    title: "Mastering Money Management",
    category: "Business",
    level: "Beginner",
    price: 30,
    rating: 4.6,
    image: course5,
  },
  {
    id: 6,
    title: "How to do Startup Successfully",
    category: "Business",
    level: "Intermediate",
    price: 40,
    rating: 4.8,
    image: course6,
  },

  {
    id: 7,
    title: "Learn Figma from Basic",
    category: "Design",
    level: "Beginner",
    price: 25,
    rating: 4.8,
    image: course1,
  },
  {
    id: 8,
    title: "Build Digital Assets",
    category: "Design",
    level: "Beginner",
    price: 25,
    rating: 4.7,
    image: course2,
  },
  {
    id: 9,
    title: "the Power of Big Data",
    category: "Data Science",
    level: "Beginner",
    price: 25,
    rating: 4.5,
    image: course3,
  },
  {
    id: 10,
    title: "Exploring Productivity with AI",
    category: "Technology",
    level: "Intermediate",
    price: 35,
    rating: 4.7,
    image: course4,
  },
  {
    id: 11,
    title: "Mastering Money Management",
    category: "Business",
    level: "Beginner",
    price: 30,
    rating: 4.6,
    image: course5,
  },
  {
    id: 12,
    title: "How to do Startup Successfully",
    category: "Business",
    level: "Intermediate",
    price: 40,
    rating: 4.8,
    image: course6,
  },

  {
    id: 13,
    title: "Learn Figma from Basic",
    category: "Design",
    level: "Beginner",
    price: 25,
    rating: 4.8,
    image: course1,
  },
  {
    id: 14,
    title: "Build Digital Assets",
    category: "Design",
    level: "Beginner",
    price: 25,
    rating: 4.7,
    image: course2,
  },
  {
    id: 15,
    title: "the Power of Big Data",
    category: "Data Science",
    level: "Beginner",
    price: 25,
    rating: 4.5,
    image: course3,
  },
  {
    id: 16,
    title: "Exploring Productivity with AI",
    category: "Technology",
    level: "Intermediate",
    price: 35,
    rating: 4.7,
    image: course4,
  },
  {
    id: 17,
    title: "Mastering Money Management",
    category: "Business",
    level: "Beginner",
    price: 30,
    rating: 4.6,
    image: course5,
  },
  {
    id: 18,
    title: "How to do Startup Successfully",
    category: "Business",
    level: "Intermediate",
    price: 40,
    rating: 4.8,
    image: course6,
  },
];

const categories = [
  "All",
  "Design",
  "Business",
  "Data Science",
  "Technology",
  "Marketing",
  "Development",
];

export default function Search() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Popular");
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 6;

  // SEARCH + CATEGORY FILTER
  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchText.toLowerCase()) ||
        course.category.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        course.category === activeCategory;

      return matchesSearch && matchesCategory;
    });

    // SORT
    if (sortBy === "Price Low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price High") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sortBy === "Rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchText, activeCategory, sortBy]);

  // PAGINATION
  const totalPages = Math.max(
    1,
    Math.ceil(filteredCourses.length / coursesPerPage)
  );

  const visibleCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleClear = () => {
    setSearchText("");
    setActiveCategory("All");
    setSortBy("Popular");
    setCurrentPage(1);
  };

  const handleCourseClick = (course) => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="min-h-screen bg-white text-[#101828]">




      {/* ================= HERO / SEARCH ================= */}
      <section className="bg-[#003BE7] text-white">

        <div className="max-w-[1180px] mx-auto px-6">

          <div className="pt-7 pb-10 text-center">

            <p className="text-[10px] mb-2 opacity-90">
              Explore thousands of courses
            </p>

            <h1 className="text-[24px] sm:text-[30px] font-bold leading-tight mb-5">
              Find Your Next Course
            </h1>

            {/* SEARCH */}
            <div className="mx-auto max-w-[480px] flex items-center bg-white rounded-full p-1">

              <input
                type="text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setCurrentPage(1);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Search courses..."
                className="flex-1 h-[34px] px-4 rounded-full outline-none text-[#101828] text-[10px]"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="bg-[#B8F500] text-[#101828] h-[34px] px-5 rounded-full text-[9px] font-semibold hover:bg-[#A9E800] transition"
              >
                Search
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTENT ================= */}
      <main className="max-w-[1180px] mx-auto px-6">

        {/* FILTER ROW */}
        <section
          id="categories"
          className="pt-6"
        >

          <div className="flex flex-wrap items-center justify-between gap-4">

            {/* CATEGORIES */}
            <div className="flex flex-wrap gap-2">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategory(category)}
                  className={`px-3 py-1.5 rounded-full border text-[9px] transition ${activeCategory === category
                    ? "bg-[#B8F500] border-[#B8F500] text-[#101828] font-semibold"
                    : "bg-white border-[#E4E7EC] text-[#667085] hover:border-[#003BE7] hover:text-[#003BE7]"
                    }`}
                >
                  {category}
                </button>
              ))}

            </div>

            {/* SORT */}
            <div className="flex items-center gap-2">

              <span className="text-[9px] text-[#98A2B3]">
                Sort:
              </span>

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-[#E4E7EC] rounded-full px-3 py-1.5 text-[9px] text-[#344054] outline-none cursor-pointer"
              >
                <option value="Popular">Popular</option>
                <option value="Rating">Rating</option>
                <option value="Price Low">Price: Low</option>
                <option value="Price High">Price: High</option>
              </select>

            </div>

          </div>

        </section>

        {/* SEARCH RESULT INFO */}
        <div className="flex items-center justify-between mt-7 mb-4">

          <p className="text-[11px] text-[#667085]">
            {filteredCourses.length} courses found
          </p>

          {(searchText || activeCategory !== "All") && (
            <button
              type="button"
              onClick={handleClear}
              className="text-[9px] text-[#2563EB] hover:underline"
            >
              Clear filters
            </button>
          )}

        </div>

        {/* ================= COURSE GRID ================= */}
        {visibleCourses.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6">

            {visibleCourses.map((course) => (

              <button
                key={course.id}
                type="button"
                onClick={() => handleCourseClick(course)}
                className="text-left group"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-xl bg-[#F2F4F7] border border-[#EAECF0]">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-[145px] object-cover group-hover:scale-[1.03] transition duration-300"
                  />

                  {/* RATING */}
                  <div className="absolute right-2 top-2 bg-white/95 rounded-full px-2 py-1 text-[8px] font-medium">
                    {course.rating}
                    <span className="text-[#B8F500] ml-1">
                      ★
                    </span>
                  </div>

                </div>

                {/* CARD CONTENT */}
                <div className="pt-2.5">

                  <h3 className="text-[12px] font-semibold text-[#101828] leading-5 line-clamp-1 group-hover:text-[#003BE7] transition">
                    {course.title}
                  </h3>

                  <p className="text-[9px] text-[#98A2B3] mt-0.5">
                    by <span className="text-[#2563EB]">purepearl studio</span>
                  </p>

                  <div className="flex items-center justify-between mt-2">

                    <span className="inline-flex items-center gap-1 bg-[#F2F4F7] rounded-full px-2 py-1 text-[8px] text-[#667085]">
                      <span>▥</span>
                      {course.level}
                    </span>

                    <span className="text-[10px] font-semibold text-[#003BE7]">
                      ${course.price}
                      <span className="font-normal text-[#98A2B3]">
                        /lifetime
                      </span>
                    </span>

                  </div>

                </div>

              </button>

            ))}

          </div>

        ) : (

          /* EMPTY STATE */
          <div className="py-24 text-center">

            <div className="text-[35px] mb-3">
              🔍
            </div>

            <h2 className="text-[18px] font-semibold">
              No courses found
            </h2>

            <p className="text-[11px] text-[#98A2B3] mt-2">
              Try another search term or category.
            </p>

            <button
              type="button"
              onClick={handleClear}
              className="mt-5 bg-[#B8F500] px-5 py-2.5 rounded-full text-[10px] font-semibold"
            >
              Show All Courses
            </button>

          </div>

        )}

        {/* ================= PAGINATION ================= */}
        {filteredCourses.length > coursesPerPage && (

          <div className="flex justify-center items-center gap-2 py-10">

            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((page) => Math.max(1, page - 1))
              }
              className="w-7 h-7 rounded-full border border-[#E4E7EC] text-[9px] disabled:opacity-30 hover:border-[#003BE7]"
            >
              ‹
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 rounded-full text-[9px] ${currentPage === page
                  ? "bg-[#003BE7] text-white"
                  : "border border-[#E4E7EC] text-[#667085] hover:border-[#003BE7]"
                  }`}
              >
                {page}
              </button>

            ))}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(totalPages, page + 1)
                )
              }
              className="w-7 h-7 rounded-full border border-[#E4E7EC] text-[9px] disabled:opacity-30 hover:border-[#003BE7]"
            >
              ›
            </button>

          </div>

        )}

      </main>



    </div>
  );
}