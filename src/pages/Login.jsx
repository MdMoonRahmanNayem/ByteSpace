import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import authVisual from "../assets/auth-visual.svg";
import logo from "../assets/logo.svg";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  // Email & Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.log("Firebase Login Error:", error.code, error.message);

      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setError("Invalid email or password.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else {
        setError(`${error.code}: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setError("");

    try {
      setGoogleLoading(true);

      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      navigate("/");
    } catch (error) {
      console.log("Google Login Error:", error.code, error.message);

      if (error.code === "auth/popup-closed-by-user") {
        setError("Google login was cancelled.");
      } else {
        setError(`${error.code}: ${error.message}`);
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#003BE7] grid-pattern flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-[1100px] grid lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden lg:flex justify-center">

          <div className="w-full max-w-[548px]">

            {/* LOGO */}
            <div className="mb-6">
              <img
                src={logo}
                alt="ByteSpace"
                className="w-[95px] h-auto object-contain"
              />
            </div>

            {/* LEFT TEXT */}
            <div className="mb-5">

              <h2 className="text-white text-[13px] font-medium mb-2">
                Sign in with ease
              </h2>

              <p className="text-white text-[8px] leading-[1.5] max-w-[270px] opacity-90">
                Experience a seamless and efficient sign-in process that
                grants you instant access to a world of knowledge.
              </p>

            </div>

            {/* AUTH VISUAL */}
            <img
              src={authVisual}
              alt="ByteSpace authentication"
              className="w-full max-w-[548px] h-auto block"
            />

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="flex justify-center">

          <div className="w-full max-w-[430px] bg-white rounded-2xl px-8 sm:px-10 py-10 shadow-xl">

            {/* Heading */}
            <p className="text-[12px] text-[#2563EB] font-medium mb-1">
              Sign In
            </p>

            <h1 className="text-[28px] sm:text-[32px] font-bold text-[#101828] leading-tight">
              Welcome Back
            </h1>


            {/* ================= LOGIN FORM ================= */}
            <form onSubmit={handleLogin} className="mt-8">

              {/* Email */}
              <div className="mb-5">

                <label className="block text-[11px] font-medium text-[#344054] mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[42px] px-4 rounded-lg border border-[#E4E7EC] text-[12px] outline-none focus:border-[#B8F500] transition"
                />

              </div>


              {/* Password */}
              <div className="mb-4">

                <label className="block text-[11px] font-medium text-[#344054] mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[42px] px-4 rounded-lg border border-[#E4E7EC] text-[12px] outline-none focus:border-[#B8F500] transition"
                />

              </div>


              {/* Error */}
              {error && (
                <p className="text-red-500 text-[11px] leading-5 mb-4">
                  {error}
                </p>
              )}


              {/* Sign In Button */}
              <div className="flex justify-end mt-6">

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#B8F500] hover:bg-[#A9E800] disabled:opacity-60 text-[#101828] text-[11px] font-semibold px-6 py-3 rounded-full transition"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>

              </div>

            </form>


            {/* ================= DIVIDER ================= */}
            <div className="flex items-center gap-4 my-8">

              <div className="h-px bg-[#E4E7EC] flex-1"></div>

              <span className="text-[10px] text-[#98A2B3]">
                or
              </span>

              <div className="h-px bg-[#E4E7EC] flex-1"></div>

            </div>


            {/* ================= GOOGLE LOGIN ================= */}
            <div className="flex justify-center">

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={googleLoading}
                className="w-[42px] h-[42px] rounded-lg border border-[#E4E7EC] flex items-center justify-center hover:bg-gray-50 disabled:opacity-60 transition"
                title="Continue with Google"
              >

                <span className="text-[18px] font-bold text-[#4285F4]">
                  G
                </span>

              </button>

            </div>


            {/* ================= REGISTER LINK ================= */}
            <p className="text-center text-[10px] text-[#98A2B3] mt-10">

              New user?

              <Link
                to="/register"
                className="text-[#2563EB] ml-1 font-medium hover:underline"
              >
                Create an account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}