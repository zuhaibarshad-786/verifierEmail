export default function CTASection() {
  return (
    <section
      className="relative isolate flex flex-col items-center justify-center overflow-hidden px-6 py-20 text-center sm:py-24"
      style={{
        background: "linear-gradient(180deg, #0F0E1A 0%, #1A182C 8.65%, #2F2448 100%)",
      }}
    >
      {/* Top rectangular bar - adjusted for responsiveness */}
      <div className="absolute top-0 h-4 w-42 rounded bg-black/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] sm:h-5 sm:w-64 lg:w-140" />

      {/* Spotlight beams container */}
      <div className="pointer-events-none absolute top-0 h-full w-full max-w-5xl">
        {/* Smoky/Blurry Border */}
        <div
          className="absolute inset-0 mx-auto h-full w-[95%]
                     bg-gradient-to-b from-[#B388FF1A] via-[#8B5CF626] to-transparent
                     blur-2xl sm:blur-3xl md:blur-4xl lg:blur-6xl
                     [clip-path:polygon(25%_0,75%_0,100%_100%,0_100%)]"
        />
        
        {/* Main Torch Light Beam */}
        <div
          className="absolute inset-0 mx-auto h-full w-[92%] 
                     bg-gradient-to-b from-[#B388FF33] via-[#8B5CF64D] to-transparent
                     blur-[3px] sm:blur-[5px]
                     [clip-path:polygon(25%_0,75%_0,100%_100%,0_100%)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-4xl">
          Ready to Transform <br className="sm:hidden" /> Your Email Outreach?
        </h2>
        <p className="mt-6 max-w-lg text-base text-white/90 sm:text-lg">
          Join thousands of businesses that trust our platform for their email
          verification needs. Get started with 100 free verifications today.
        </p>
        <button
          className="mt-8 w-auto rounded-full 
             bg-gradient-to-r from-pink-500 to-purple-500
             px-8 py-3 text-base font-semibold text-white 
             shadow-lg transition hover:opacity-80 focus:outline-none 
             focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
             focus:ring-offset-gray-900 md:px-10 md:py-4 md:text-lg"
        >
          Start Verifying Now
        </button>
      </div>
    </section>
  );
}
