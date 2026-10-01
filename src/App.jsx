import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";

import CourseDetails from "./pages/CourseDetails";
import CourseReviews from "./pages/CourseReviews";
import Lesson from "./pages/Lesson";
import CreatorProfile from "./pages/CreatorProfile";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* NAVBAR + FOOTER */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/search" element={<Search />} />

          <Route
            path="/course/:id"
            element={<CourseDetails />}
          />

          <Route
            path="/course/:courseId/lesson/:lessonId"
            element={<Lesson />}
          />

          <Route
            path="/course/:id/reviews"
            element={<CourseReviews />}
          />

          <Route
            path="/creator/:id"
            element={<CreatorProfile />}
          />

          {/* 404 + NAVBAR + FOOTER */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Route>


        {/* WITHOUT NAVBAR + FOOTER */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;