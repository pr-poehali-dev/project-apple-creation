export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="https://cdn.poehali.dev/projects/ea47bab3-4be8-4aa2-ac50-874a6052c17e/bucket/30381984-284b-478a-8f4b-5d3af08eda78.png" alt="NMLRIXFAN logo" className="w-14 h-14 object-contain" />
          <div className="text-white text-sm uppercase tracking-wide font-medium">NMLRIXFAN</div>
        </div>
        <nav className="flex gap-8">
          <a
            href="/rules"
            className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm"
          >
            Правила
          </a>
          <a
            href="/join"
            className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm"
          >
            Как зайти
          </a>
        </nav>
      </div>
    </header>
  )
}