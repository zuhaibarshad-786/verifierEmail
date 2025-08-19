export default function CTASection() {
  return (
    <section
      className="relative isolate min-h-[90vh] flex flex-col items-center justify-center text-center px-6"
      style={{
        background:
          "linear-gradient(180deg, #0F0E1A 0%, #1A182C 8.65%, #2F2448 100%)",
      }}
    >
      {/* Top rectangular bar*/}
      <div className="absolute top-4 h-5 lg:w-140 sm:w-64 rounded bg-black/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)]" />

      {/* Spotlight beams */}
      <div className="pointer-events-none absolute top-8 w-full max-w-5xl h-[95%]">
        {/* Smoky/Blurry Border */}
        <div
          className="absolute inset-0 mx-auto w-[92%] h-full 
                       bg-gradient-to-b from-[#B388FF1A] via-[#8B5CF626] to-transparent
                        blur-6xl
                        [clip-path:polygon(20%_0,80%_0,100%_100%,0_100%)]"
        />
        
        {/* Main Torch Light Beam */}
        <div
          className="absolute inset-0 mx-auto w-[90%] h-full 
                       bg-gradient-to-b from-[#B388FF33] via-[#8B5CF64D] to-transparent
                        blur-[5px]
                        [clip-path:polygon(20%_0,80%_0,100%_100%,0_100%)]"
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl -mt-8 font-bold text-white mb-12">
          Ready to Transform Your <br /> Email Outreach?
        </h2>
        <p className="text-white/90 mt-5 mb-6 text-sm sm:text-base px-1">
          Join thousands of businesses that trust our platform for their email
          verification needs. Get started with 100 free verifications today.
        </p>
        <button
          className="w-40 px-4 py-2 text-xs
             md:w-70 md:px-8 md:py-3.5 md:text-lg
             mt-2 rounded-full cursor-pointer
             bg-gradient-to-r from-pink-500 to-purple-500
             text-white font-semibold shadow-lg
             hover:opacity-70 transition"
        >
          Start Verifying Now
        </button>
      </div>
    </section>
  );
}