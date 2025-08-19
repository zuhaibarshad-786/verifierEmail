import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
  // Read reset token from URL: /reset-password?token=XXXX
  const token =
    (typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("token")
      : "") || "";

  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const STRONG_PW_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);

    if (!token) {
      setMsg({ type: "error", text: "Reset link is invalid or expired." });
      return;
    }
    if (pw !== pw2) {
      setMsg({ type: "error", text: "Passwords do not match." });
      return;
    }
    if (!STRONG_PW_REGEX.test(pw)) {
      setMsg({
        type: "error",
        text: "Password must be 8+ chars and include upper, lower, number, and symbol.",
      });
      return;
    }

    try {
      setLoading(true);

      // TODO: replace with your real API
      // await fetch(`/api/auth/reset-password?token=${encodeURIComponent(token)}`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ password: pw }),
      // });

      // Demo delay only
      await new Promise((r) => setTimeout(r, 800));

      setMsg({
        type: "success",
        text: "Password updated successfully. You can now log in.",
      });
      setPw("");
      setPw2("");
    } catch (_) {
      setMsg({
        type: "error",
        text: "Something went wrong while resetting your password.",
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
          Reset Password
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor="new-password"
              className="flex flex-1 text-sm text-white/80 mb-1"
            >
              New Password
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showPw ? "text" : "password"}
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                className="w-full rounded-lg bg-white/10 text-white placeholder-white/50 px-3 py-2 pr-16 outline-none focus:ring-2 focus:ring-fuchsia-400/50 border border-white/10"
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 text-xs hover:text-white"
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="flex flex-1 text-sm text-white/80 mb-1"
            >
              Confirm New Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showPw2 ? "text" : "password"}
                value={pw2}
                onChange={(e) => setPw2(e.target.value)}
                className="w-full rounded-lg bg-white/10 text-white placeholder-white/50 px-3 py-2 pr-16 outline-none focus:ring-2 focus:ring-fuchsia-400/50 border border-white/10"
              />
              <button
                type="button"
                onClick={() => setShowPw2((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 text-xs hover:text-white"
              >
                {showPw2 ? "Hide" : "Show"}
              </button>
            </div>
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

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-lg cursor-pointer py-2.5 text-white font-semibold shadow-lg
                       bg-gradient-to-r from-[#8A5CF6] via-[#B35CFF] to-[#FF6B6B]
                       hover:opacity-80 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>

          <div className="text-center">
            <Link
              to="/login"
              className="text-[#C16598] hover:text-fuchsia-200 text-xs sm:text-sm"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
