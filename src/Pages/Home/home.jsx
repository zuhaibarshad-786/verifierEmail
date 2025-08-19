import React from "react";
import EmailToolsSection from "./components/toolsSection";
import Footer from "../../components/footer";
import CTASection from "./components/transformSection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col text-white"
        style={{
          background:
            "radial-gradient(32.14% 49.96% at 60.13% 50.04%, #19132E 0%, #110D23 34.92%, #0F0E1A 100%)",
        }}
      >
        {/* Navbar */}
        <header className="flex justify-center px-4 md:px-12 py-4 md:py-6">
          <div className="relative flex justify-between items-center w-full max-w-4xl h-18 px-4 sm:px-6 py-2 border border-gray-700/60 rounded-full bg-transparent">
            {/* Logo */}
            <div className="text-white font-bold text-base sm:text-lg border px-3 py-1 rounded-md">
              SSM
            </div>

            {/* Center Highlight */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <a
                href="#"
                className="text-white hover:text-white text-sm md:text-base"
              >
                Highlights
              </a>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
              <Link
                to="SignUp"
                className="px-3 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r cursor-pointer from-pink-500 to-purple-500 rounded-lg text-xs sm:text-sm md:text-base text-white font-medium hover:opacity-90 transition"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="px-3 sm:px-5 py-1.5 sm:py-2 border border-gray-600 cursor-pointer rounded-lg text-xs sm:text-sm md:text-base text-white font-medium hover:bg-gray-800 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center text-center px-4 sm:px-6 mt-16 sm:mt-20 md:mt-28">
          <h1
            className="font-bold text-white leading-[100%]"
            style={{
              fontFamily: "Geist, sans-serif",
            }}
          >
            <span className="block text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl">
              Advanced Email Verification
            </span>
            <span className="block text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl mt-2">
              Made Simple
            </span>
          </h1>

          <p className="text-white mt-6 max-w-xl sm:max-w-2xl text-xs sm:text-sm  md:text-base">
            Power your sales systems with our 97%+ accurate email verification
            platform. Never land in spam again with our auto-scaling SMTP, DNS,
            and inbox checks.
          </p>

          <Link to= "/SignUp" className="mt-8 lg:w-60 sm:mt-10 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r cursor-pointer from-pink-500 to-purple-500 rounded-full text-sm sm:text-lg font-semibold hover:opacity-90 transition">
            Get Started
          </Link>
        </main>
      </div>
      {/* Moon horizon  */}
      <div className="flex justify-center bg-[#0F0E1A]">
        <img width={900} height={100} src="/moonHorizon.PNG" alt="" />
      </div>
      <EmailToolsSection />
      {/* Ready to transform section */}
      <CTASection />
      {/* footer  */}
      <Footer />
    </>
  );
}
