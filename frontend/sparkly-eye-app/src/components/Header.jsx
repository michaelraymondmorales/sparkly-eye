import { SparklyEye } from './SparklyEye'

export const Header = () => (
  /* The container is transparent (bg-none), no borders. */
  <header className="relative z-20 flex w-full h-16 md:h-32 lg:h-48 bg-none pointer-events-none">
    
    {/* TITLE SECTION: pure white text over black background */}
    <div className="flex-1 px-8 md:px-12 flex flex-col justify-center space-y-1 md:space-y-2">
      <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none select-none">
        Artifacts
      </h1>
      <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-white select-none opacity-90">
        // Technical Journal & Archive
      </p>
    </div>

    {/* ICON BOX: pointer-events-auto ensures the icon remains clickable if needed */}
    <div className="w-32 md:w-48 lg:w-64 bg-none flex items-center justify-center pointer-events-auto">
      <SparklyEye />
    </div>

  </header>
);