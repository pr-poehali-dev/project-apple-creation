export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="https://cdn.poehali.dev/projects/ea47bab3-4be8-4aa2-ac50-874a6052c17e/bucket/2c5c43d6-5807-498c-8a69-60cdb93d895d.png" alt="NMLRIXFAN logo" className="w-8 h-8 object-contain invert" />
          <div className="text-white text-sm uppercase tracking-wide font-medium">NMLRIXFAN</div>
        </div>
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