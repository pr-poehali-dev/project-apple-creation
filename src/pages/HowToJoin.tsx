import { useState } from "react"
import ShaderBackground from "@/components/ShaderBackground"

const steps = [
  {
    number: "01",
    title: "Купи Minecraft Java Edition",
    description: "Зайди на официальный сайт minecraft.net и приобрети лицензионную версию Java Edition. Именно она нужна для подключения к нашему серверу.",
    link: { label: "minecraft.net", href: "https://www.minecraft.net" },
  },
  {
    number: "02",
    title: "Запусти лаунчер",
    description: "Открой официальный лаунчер Minecraft. Убедись, что выбрана версия Java Edition. Войди в свой аккаунт Microsoft.",
  },
  {
    number: "03",
    title: "Выбери версию сервера",
    description: "В лаунчере выбери версию 1.21.4 — именно на ней работает наш сервер.",
  },
  {
    number: "04",
    title: "Прочитай правила сервера",
    description: "Перед входом обязательно ознакомься с правилами. Вход на сервер означает автоматическое согласие с ними.",
    link: { label: "Правила сервера", href: "/rules" },
  },
  {
    number: "05",
    title: "Подключись к серверу",
    description: 'Нажми «Сетевая игра» → «Добавить сервер». Введи наш адрес и нажми «Готово». Затем дважды кликни по серверу — и ты в игре!',
  },
]

export default function HowToJoin() {
  const [copied, setCopied] = useState(false)

  const copyIp = () => {
    navigator.clipboard.writeText("nmlrix.hypixel.ws")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <ShaderBackground>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 p-6">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://cdn.poehali.dev/projects/ea47bab3-4be8-4aa2-ac50-874a6052c17e/bucket/30381984-284b-478a-8f4b-5d3af08eda78.png"
              alt="NMLRIXFAN logo"
              className="w-14 h-14 object-contain"
            />
            <div className="text-white text-sm uppercase tracking-wide font-medium">NMLRIXFAN</div>
          </a>
          <a href="/" className="text-white hover:text-green-400 transition-colors duration-300 uppercase text-sm">
            ← Назад
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-32 pb-16 px-6 md:px-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-2 tracking-tight">
          <span className="font-medium italic">Как</span> зайти
        </h1>
        <p className="text-white/50 text-xs mb-10 uppercase tracking-widest">NMLRIXFAN — Ванильный Minecraft</p>

        {/* IP Block */}
        <div className="mb-12 p-5 rounded-2xl bg-white/5 border border-green-400/20 backdrop-blur-sm flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Адрес сервера</p>
            <p className="text-green-400 font-mono text-xl font-medium">nmlrix.hypixel.ws</p>
          </div>
          <button
            onClick={copyIp}
            className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-400 text-white text-xs font-normal transition-all duration-200 cursor-pointer"
          >
            {copied ? "Скопировано ✓" : "Скопировать IP"}
          </button>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 group">
              <div className="text-green-400/40 font-mono text-2xl font-light w-10 shrink-0 pt-0.5 group-hover:text-green-400 transition-colors duration-300">
                {step.number}
              </div>
              <div className="border-l border-white/10 pl-6 pb-6">
                <h3 className="text-white font-medium text-base mb-1">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                {step.link && (
                  <a
                    href={step.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 text-xs mt-2 inline-block hover:text-green-300 transition-colors"
                  >
                    {step.link.label} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4 flex-wrap">
          <a
            href="https://t.me/NMLRIXFANMC"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-400 text-white text-xs font-normal transition-all duration-200"
          >
            Наш ТГ
          </a>
          <a
            href="/rules"
            className="px-8 py-3 rounded-full bg-transparent border border-white/30 hover:bg-white/10 text-white text-xs font-normal transition-all duration-200"
          >
            Правила сервера
          </a>
        </div>
      </div>
    </ShaderBackground>
  )
}