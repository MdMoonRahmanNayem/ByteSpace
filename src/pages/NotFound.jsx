import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#003BE7]">

      {/* 404 PAGE CONTAINER */}
      <div className="min-h-screen w-full">

        <section className="grid-pattern flex min-h-screen w-full flex-col items-center justify-center bg-[#003BE7] px-6 text-center">

          {/* 404 */}
          <h1
            className="
              text-[100px]
              font-bold
              leading-none
              tracking-[-5px]
              text-[#D4FB20]
              sm:text-[140px]
              md:text-[170px]
            "
          >
            404
          </h1>

          {/* TITLE */}
          <h2
            className="
              mt-3
              text-[22px]
              font-semibold
              leading-[25px]
              text-white
              sm:text-[26px]
              sm:leading-[29px]
            "
          >
            The page you are looking
            <br />
            for doesn't exist
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              text-[7px]
              leading-[10px]
              text-white/70
              sm:text-[8px]
            "
          >
            The page you are looking for might have been moved,
            <br />
            deleted, or never existed.
          </p>

          {/* BUTTON */}
          <Link
            to="/"
            className="
              mt-5
              rounded-full
              bg-[#D4FB20]
              px-5
              py-2
              text-[7px]
              font-medium
              text-black
              transition
              hover:scale-105
              sm:px-6
              sm:py-[9px]
            "
          >
            Back to Home
          </Link>

        </section>

      </div>

    </div>
  );
}