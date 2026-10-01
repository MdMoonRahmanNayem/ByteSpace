import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import authVisual from "../assets/auth-visual.svg";
import logo from "../assets/logo.svg";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      setName("");
      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.log(
        "Firebase Register Error:",
        error.code,
        error.message
      );

      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email.");
      } else if (error.code === "auth/weak-password") {
        setError("Password must be at least 6 characters.");
      } else if (error.code === "auth/operation-not-allowed") {
        setError(
          "Email/Password authentication is not enabled."
        );
      } else {
        setError(`${error.code}: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#003BE7] grid-pattern flex items-center justify-center px-6 py-8">

      <div className="w-full max-w-[1250px] grid lg:grid-cols-[1fr_430px] gap-12 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden lg:block relative">

          {/* LOGO */}
          <div className="absolute left-[40px] top-[-20px]">
            <img
              src={logo}
              alt="ByteSpace"
              className="w-[28px] h-auto"
            />
          </div>

          {/* TOP TEXT */}
          <div className="absolute left-[40px] top-[85px] z-10">

            <h2 className="text-white text-[16px] font-semibold leading-tight">
              Sign up and come in
            </h2>

            <p className="text-white/80 text-[10px] leading-[16px] mt-[8px] max-w-[300px]">
              Experience a straightforward, uncomplicated
              <br />
              and efficient, allowing users to sign up quickly, easily, and
              <br />
              no cost.
            </p>

          </div>

          {/* MAIN VISUAL */}
          <div className="pt-[145px]">
            <img
              src={authVisual}
              alt="ByteSpace"
              className="
                w-full
                max-w-[650px]
                h-auto
                object-contain
              "
            />
          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex justify-center">

          <div
            className="
              w-full
              max-w-[430px]
              bg-white
              rounded-[16px]
              px-[40px]
              py-[40px]
              shadow-xl
            "
          >

            {/* SMALL TITLE */}
            <p className="text-[12px] text-[#2563EB] font-medium mb-[3px]">
              Create an Account
            </p>

            {/* MAIN TITLE */}
            <h1
              className="
                text-[32px]
                font-bold
                text-[#101828]
                leading-[1.08]
                tracking-[-0.5px]
              "
            >
              Welcome to
              <br />
              ByteSpace
            </h1>

            {/* FORM */}
            <form
              onSubmit={handleRegister}
              className="mt-[38px]"
            >

              {/* FULL NAME */}
              <div className="mb-[25px]">

                <label
                  className="
                    block
                    text-[11px]
                    font-medium
                    text-[#344054]
                    mb-[9px]
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Jamie Davis"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full
                    h-[42px]
                    px-[15px]
                    rounded-[8px]
                    border
                    border-[#E4E7EC]
                    text-[12px]
                    text-[#101828]
                    outline-none
                    placeholder:text-[#98A2B3]
                    focus:border-[#B8F500]
                    transition
                  "
                />

              </div>

              {/* EMAIL */}
              <div className="mb-[25px]">

                <label
                  className="
                    block
                    text-[11px]
                    font-medium
                    text-[#344054]
                    mb-[9px]
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full
                    h-[42px]
                    px-[15px]
                    rounded-[8px]
                    border
                    border-[#E4E7EC]
                    text-[12px]
                    text-[#101828]
                    outline-none
                    placeholder:text-[#98A2B3]
                    focus:border-[#B8F500]
                    transition
                  "
                />

              </div>

              {/* PASSWORD */}
              <div className="mb-[5px]">

                <label
                  className="
                    block
                    text-[11px]
                    font-medium
                    text-[#344054]
                    mb-[9px]
                  "
                >
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    w-full
                    h-[42px]
                    px-[15px]
                    rounded-[8px]
                    border
                    border-[#E4E7EC]
                    text-[12px]
                    text-[#101828]
                    outline-none
                    placeholder:text-[#98A2B3]
                    focus:border-[#B8F500]
                    transition
                  "
                />

              </div>

              {/* ERROR */}
              {error && (
                <p className="text-red-500 text-[11px] leading-[18px] mt-[12px]">
                  {error}
                </p>
              )}

              {/* CONTINUE */}
              <div className="flex justify-end mt-[28px]">

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    bg-[#B8F500]
                    hover:bg-[#A9E800]
                    disabled:opacity-60
                    text-[#101828]
                    text-[11px]
                    font-semibold
                    px-[24px]
                    py-[12px]
                    rounded-full
                    transition
                  "
                >
                  {loading ? "Creating..." : "Continue"}
                </button>

              </div>

            </form>

            {/* LOGIN */}
            <p
              className="
                text-center
                text-[10px]
                text-[#98A2B3]
                mt-[64px]
              "
            >
              Already have an account?

              <Link
                to="/login"
                className="
                  text-[#2563EB]
                  ml-1
                  font-medium
                  hover:underline
                "
              >
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}