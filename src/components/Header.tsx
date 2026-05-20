export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-medium">⛏ VanillaCraft</div>
        <nav className="flex gap-8">
          <a
            href="#rules"
            className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm"
          >
            Правила
          </a>
          <a
            href="#join"
            className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm"
          >
            Как зайти
          </a>
        </nav>
      </div>
    </header>
  )
}