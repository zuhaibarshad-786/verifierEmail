"use client";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmail) {
      setMsg({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    try {
      setLoading(true);
      // TODO: wire up your API
      // await fetch("/api/auth/forgot-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });

      // Demo delay
      await new Promise((r) => setTimeout(r, 800));

      setMsg({
        type: "success",
        text: "If this email exists, we’ve sent a password reset link.",
      });
    } catch (_) {
      setMsg({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(32.14% 49.96% at 60.13% 50.04%, #19132E 0%, #110D23 34.92%, #0F0E1A 100%)",
      }}
    >
      {/* Background Orbs */}
      <div
        className="pointer-events-none absolute -top-12 -left-10 md:h-80 md:w-120 sm:h-80 sm:w-80 rounded-full
             bg-[radial-gradient(circle_at_70%_70%,#9B5CFF55,transparent_60%)]
             scale-x-[-1] scale-y-[-1]"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-15 -right-10 h-100 md:w-120 sm:h-80 sm:w-80 rounded-full bg-[radial-gradient(circle_at_70%_70%,#5CB8FF4d,transparent_60%)]" />
      </div>
      {/* Card */}
      <div
        className="relative w-full max-w-lg rounded-3xl border border-white/10 p-6 sm:p-8 my-12 mt-20 mb-20"
        style={{
          background: "#18274099",
          boxShadow: "0px 0px 20px 0px #2A3D5B",
          backdropFilter: "blur(35px)",
        }}
      >
        <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_80px_0_rgba(99,102,241,0.08)] pointer-events-none" />

        <h1 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-2">
          Forgot Password
        </h1>
        <p className="text-white text-center text-sm mb-6">
          Enter your email to get password reset link
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor="email"
              className="flex flex-1 text-sm text-white/80 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-white/10 text-white placeholder-white/50 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-400/50 border border-white/10"
            />
          </div>

          {msg && (
            <div
              className={`text-sm rounded-md px-3 py-2 ${
                msg.type === "success"
                  ? "bg-emerald-500/10 text-emerald-200 border border-emerald-400/30"
                  : "bg-rose-500/10 text-rose-200 border border-rose-400/30"
              }`}
            >
              {msg.text}
            </div>
          )}

          <Link to="/confirmEmail">
            <button
              type="submit"
              disabled={loading}
              className="mb-5 w-full rounded-lg cursor-pointer py-2.5 text-white font-semibold shadow-lg
                       bg-gradient-to-r from-[#8A5CF6] via-[#B35CFF] to-[#FF6B6B]
                       hover:opacity-80 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send reset link"}
            </button>
          </Link>

          <div className="text-center">
            <Link
              to="/login"
              className="text-[#C16598] hover:text-fuchsia-200 text-semibold text-xs sm:text-sm"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
