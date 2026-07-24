import Reveal from "./Reveal";

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="pt-40 pb-20 px-8 text-center max-w-[900px] mx-auto z-10 relative">
      <Reveal>
        <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight drop-shadow-2xl">
          {title}
        </h1>
      </Reveal>
      <Reveal delay={150}>
        <p className="text-lg md:text-xl font-sans text-white/80 font-light leading-relaxed drop-shadow-lg">
          {subtitle}
        </p>
      </Reveal>
    </header>
  );
}
