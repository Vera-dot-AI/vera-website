"use client";

export function FloatingTiles() {
  return (
    <>
      <div className="hidden lg:flex lg:col-span-5 relative w-full h-[450px] items-center justify-center lg:translate-x-12">
        {/* Badge 1: Top left */}
        <div className="absolute top-[0%] left-[0%] md:left-[5%] z-30 border border-[#9945ff]/20 bg-black/45 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-4 rounded-full flex items-center gap-2.5 md:gap-4 shadow-[0_4px_25px_rgba(153,69,255,0.15)] text-white text-sm sm:text-base md:text-lg font-medium tracking-wide animate-[float_6s_ease-in-out_infinite] transition-all duration-300">
          <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#9945ff]/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#9945ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a4 4 0 0 1 4 4c2.2 0 4 1.8 4 4s-1.8 4-4 4H8a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4a4 4 0 0 1 4-4z" />
              <path d="M12 14v4M8 18h8" />
            </svg>
          </span>
          <span>Context-aware copilots</span>
        </div>

        {/* Badge 2: Top right */}
        <div className="absolute top-[25%] right-[0%] md:right-[8%] z-30 border border-[#9945ff]/20 bg-black/45 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-4 rounded-full flex items-center gap-2.5 md:gap-4 shadow-[0_4px_25px_rgba(153,69,255,0.15)] text-white text-sm sm:text-base md:text-lg font-medium tracking-wide animate-[float_5s_ease-in-out_0.8s_infinite] transition-all duration-300">
          <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#9945ff]/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#9945ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </span>
          <span>Guided workflows</span>
        </div>

        {/* Badge 3: Middle left */}
        <div className="absolute top-[50%] left-[0%] z-30 border border-[#9945ff]/20 bg-black/45 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-4 rounded-full flex items-center gap-2.5 md:gap-4 shadow-[0_4px_25px_rgba(153,69,255,0.15)] text-white text-sm sm:text-base md:text-lg font-medium tracking-wide animate-[float_7s_ease-in-out_1.5s_infinite] transition-all duration-300">
          <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#9945ff]/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#9945ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </span>
          <span>Real-time diagnostics</span>
        </div>

        {/* Badge 4: Bottom right */}
        <div className="absolute top-[75%] right-[0%] md:right-[10%] z-30 border border-[#9945ff]/20 bg-black/45 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-4 rounded-full flex items-center gap-2.5 md:gap-4 shadow-[0_4px_25px_rgba(153,69,255,0.15)] text-white text-sm sm:text-base md:text-lg font-medium tracking-wide animate-[float_6.5s_ease-in-out_2s_infinite] transition-all duration-300">
          <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#9945ff]/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#9945ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </span>
          <span>Faster issue resolution</span>
        </div>
      </div>
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
}
