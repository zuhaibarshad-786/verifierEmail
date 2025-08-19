// VerifyEmailPage.jsx — React (Vite) — static UI only, no timers / no API
import { useNavigate } from "react-router-dom";

export default function VerifyEmailPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center px-4 overflow-hidden" // +overflow-hidden for orb clipping
      style={{
        background:
          "radial-gradient(32.14% 49.96% at 60.13% 50.04%, #19132E 0%, #110D23 34.92%, #0F0E1A 100%)",
      }}
    >
      {/* Background Orbs */}
      <div
        className="pointer-events-none absolute -top-12 -left-10 w-64 h-64 sm:h-80 sm:w-80 md:h-80 md:w-120 rounded-full
             bg-[radial-gradient(circle_at_70%_70%,#9B5CFF55,transparent_60%)]
             scale-x-[-1] scale-y-[-1]"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-15 -right-10 w-64 h-100 sm:h-80 sm:w-80 md:w-120 rounded-full bg-[radial-gradient(circle_at_70%_70%,#5CB8FF4d,transparent_60%)]" />
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

        <h1 className="text-white text-2xl sm:text-3xl font-semibold text-center">
          Verify Email
        </h1>
        <p className="text-white text-center text-sm mt-4 mb-6">
          Verify your email by entering the OTP that we have sent you
        </p>

        {/* Static form (no timers, no API) */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/resetPassword");
          }}
        >
          {/* OTP + Button share width */}
          <div className="mx-auto w-fit">
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap select-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl sm:text-2xl
                     rounded-lg bg-white/10 text-white border border-white/10
                     outline-none focus:ring-2 focus:ring-fuchsia-400/50"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              ))}
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg cursor-pointer py-2.5 text-white font-semibold shadow-lg
                 bg-gradient-to-r from-[#8A5CF6] via-[#B35CFF] to-[#FF6B6B]
                 hover:opacity-80 transition"
            >
              Continue
            </button>
          </div>

          <div className="flex flex-col text-center text-sm text-white">
            Didn&apos;t receive the code?
            <span className="ml-2 cursor-pointer text-[#C16598]">
              Resend Code
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
