/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Layers,
  Github,
  Heart,
  Twitter,
  Cpu,
  Shield,
  PenTool,
  Maximize2,
  Box,
  Monitor,
  Code,
  Users,
  Coffee,
  Layers2,
  Crop,
  Link2,
  Menu,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const DOWNLOAD_URL =
  'https://github.com/Maxi000001/prisma-desktop/releases/download/v1.0.0/Prisma_Setup_v1.0.0.exe';
const GITHUB_URL = 'https://github.com/Maxi000001/prisma-desktop';

const DOWNLOAD_LABEL = 'Скачать для Windows';
const DOWNLOAD_LOADING_LABEL = 'Загрузка начинается...';

function useDownloadLoading() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2500);
  };
  return { loading, handleClick };
}

const Navbar = ({
  downloadLoading,
  onDownloadClick,
}: {
  downloadLoading: boolean;
  onDownloadClick: () => void;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#ux', label: 'Возможности' },
    { href: '#tech', label: 'Технологии' },
    { href: '#roadmap', label: 'Дорожная карта' },
    { href: '#open-source', label: 'Поддержать' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-prisma-border bg-prisma-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-prisma-emerald rounded flex items-center justify-center">
            <Layers className="text-prisma-black w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Prisma</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={DOWNLOAD_URL}
            download
            className="bg-prisma-emerald text-prisma-black px-4 py-1.5 rounded text-sm font-bold hover:brightness-110 transition-all inline-flex items-center justify-center min-w-[100px]"
            onClick={onDownloadClick}
          >
            {downloadLoading ? DOWNLOAD_LOADING_LABEL : 'Скачать'}
          </a>

          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors rounded"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-expanded={mobileMenuOpen}
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-prisma-border bg-prisma-black"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="py-3 px-2 text-zinc-400 hover:text-white hover:bg-prisma-border/50 rounded transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({
  downloadLoading,
  onDownloadClick,
}: {
  downloadLoading: boolean;
  onDownloadClick: () => void;
}) => (
  <section className="relative pt-40 pb-24 px-4 sm:px-6 dot-grid-20 min-h-[80vh] flex flex-col items-center justify-center border-b border-prisma-border">
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-prisma-border/50 text-prisma-emerald text-xs font-bold mb-8 border border-prisma-border">
          <Code className="w-3 h-3" />
          ОТКРЫТЫЙ ИСХОДНЫЙ КОД · БЕСПЛАТНО НАВСЕГДА
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.95] text-white">
          Ваше творческое пространство — <br />
          в новом формате.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Prisma объединяет удобство PureRef с гибкостью Miro. Профессиональный инструмент для
          художников: локальный, быстрый и полностью бесплатный.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={DOWNLOAD_URL}
            download
            className="btn-primary flex items-center gap-3 justify-center min-w-[260px]"
            onClick={onDownloadClick}
          >
            <Monitor className="w-5 h-5 shrink-0" />
            {downloadLoading ? DOWNLOAD_LOADING_LABEL : DOWNLOAD_LABEL}
          </a>
          <a href="#open-source" className="btn-secondary flex items-center gap-2">
            <Heart className="w-5 h-5 text-prisma-orange shrink-0" />
            Поддержать проект
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const HotkeySection = () => (
  <section id="ux" className="py-20 sm:py-32 px-4 sm:px-6 bg-prisma-black border-b border-prisma-border">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <h2 className="text-sm font-bold text-prisma-orange tracking-[0.2em] uppercase mb-6">
          Управление горячими клавишами
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
          Скорость работы. <br />
          <span className="text-zinc-500">G, R, S — как в Blender.</span>
        </h3>
        <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
          Prisma заточена под мышечную память. Управляйте холстом стандартными горячими клавишами
          без поиска по меню.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { key: 'G', action: 'Перемещение', desc: 'Двигать элементы' },
            { key: 'R', action: 'Вращение', desc: 'Поворот вида' },
            { key: 'S', action: 'Масштабирование', desc: 'Размер объектов' },
          ].map((item, i) => (
            <div key={i} className="pro-card p-6 text-center hover:border-prisma-orange/50">
              <div className="w-12 h-12 mx-auto rounded bg-prisma-border flex items-center justify-center font-mono font-bold text-2xl text-prisma-orange mb-4">
                {item.key}
              </div>
              <h4 className="font-bold text-white mb-1">{item.action}</h4>
              <p className="text-zinc-500 text-xs uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative pro-card p-2 overflow-hidden aspect-video dot-grid-20 flex items-center justify-center min-h-[240px]">
        <div className="absolute inset-0 bg-gradient-to-br from-prisma-emerald/5 to-prisma-orange/5 pointer-events-none" />
        <motion.div
          animate={{ rotate: [0, 5, -5, 0], x: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full max-w-[320px] aspect-[3/2] pro-card p-1 shadow-2xl relative z-10"
        >
          <img
            src="assets/images/prism_screenshot.png"
            alt="Скриншот интерфейса Prisma с референсами"
            className="w-full h-full object-cover rounded"
            width={600}
            height={400}
            loading="lazy"
          />
          <div className="absolute -top-2 -right-2 bg-prisma-emerald text-prisma-black text-[10px] font-bold px-1.5 py-0.5 rounded">
            ВЫБРАНО
          </div>
        </motion.div>
        <div className="absolute bottom-4 right-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          Аппаратное ускорение холста
        </div>
      </div>
    </div>
  </section>
);

const TechPower = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-prisma-emerald" />,
      title: 'Локальность и конфиденциальность',
      description:
        'Electron и React 18. Данные хранятся на вашем компьютере в открытом формате .prsm. Без телеметрии и отслеживания.',
    },
    {
      icon: <PenTool className="w-6 h-6 text-prisma-orange" />,
      title: 'Профессиональный движок рисования',
      description:
        'Чувствительность к нажиму и сглаживание. Рисуйте, делайте заметки и правки прямо на референсах.',
    },
    {
      icon: <Box className="w-6 h-6 text-prisma-emerald" />,
      title: 'Продвинутая компоновка',
      description:
        'Иерархия родитель–потомок и выравнивание. Управляйте тысячами элементов с точностью.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-prisma-orange" />,
      title: 'GPU-ускорение',
      description:
        'Рендеринг с использованием видеокарты. Плавные 60 fps даже при больших текстурах до 8K.',
    },
  ];

  return (
    <section id="tech" className="py-20 sm:py-32 px-4 sm:px-6 border-b border-prisma-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-sm font-bold text-prisma-emerald tracking-[0.2em] uppercase mb-4">
            Технологии
          </h2>
          <h3 className="text-4xl font-bold text-white">Для профессионалов.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <div key={i} className="pro-card p-6 sm:p-8 hover:bg-prisma-border/20">
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OpenSourceHeart = () => (
  <section id="open-source" className="py-20 sm:py-32 px-4 sm:px-6 bg-prisma-dark border-b border-prisma-border">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 text-prisma-orange font-bold text-xs tracking-widest uppercase mb-6">
        <Users className="w-4 h-4" />
        Сообщество
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
        Сделано сообществом <br />
        <span className="text-prisma-emerald">для сообщества.</span>
      </h2>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
        Prisma — проект на энтузиазме. Мы считаем, что профессиональные инструменты должны быть
        доступны всем. Без подписок и «Pro»-уровней: только качественное ПО. Поддержите разработку
        кодом или донатом.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center gap-2"
        >
          <Github className="w-5 h-5" />
          Исходный код на GitHub
        </a>
        <a href="#open-source" className="btn-primary flex items-center gap-2">
          <Coffee className="w-5 h-5" />
          Поддержать разработку
        </a>
      </div>
    </div>
  </section>
);

const Roadmap = () => {
  const items = [
    { title: 'Обрезка изображений', status: 'V1.1', icon: <Crop className="w-4 h-4" /> },
    { title: 'Линии связей', status: 'V1.1', icon: <Link2 className="w-4 h-4" /> },
    { title: 'Панель слоёв', status: 'V1.1', icon: <Layers2 className="w-4 h-4" /> },
    { title: 'Виртуализация холста', status: 'V1.1', icon: <Maximize2 className="w-4 h-4" /> },
  ];

  return (
    <section id="roadmap" className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase mb-4">
            Дорожная карта
          </h2>
          <h3 className="text-3xl font-bold text-white">Планы на V1.1</h3>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="pro-card p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:border-prisma-emerald/30"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded bg-prisma-border text-prisma-emerald shrink-0">
                  {item.icon}
                </div>
                <span className="font-bold text-white">{item.title}</span>
              </div>
              <span className="text-xs font-mono text-zinc-600 font-bold sm:self-center">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 sm:py-20 px-4 sm:px-6 border-t border-prisma-border bg-prisma-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-prisma-emerald rounded flex items-center justify-center">
          <Layers className="text-prisma-black w-4 h-4" />
        </div>
        <span className="font-bold text-lg tracking-tight text-white">Prisma</span>
      </div>

      <div className="text-zinc-600 text-xs font-mono uppercase tracking-widest text-center md:text-left">
        Сделано с душой · Открытый исходный код · 2026
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors"
          aria-label="Twitter / X"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const { loading: downloadLoading, handleClick: onDownloadClick } = useDownloadLoading();

  return (
    <div className="min-h-screen">
      <Navbar downloadLoading={downloadLoading} onDownloadClick={onDownloadClick} />
      <Hero downloadLoading={downloadLoading} onDownloadClick={onDownloadClick} />
      <HotkeySection />
      <TechPower />
      <OpenSourceHeart />
      <Roadmap />

      <section className="py-20 sm:py-32 px-4 sm:px-6 text-center border-t border-prisma-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
            Готовы творить?
          </h2>
          <p className="text-zinc-500 text-lg mb-12">
            Скачайте стабильную сборку Prisma и начните организовывать творческий процесс уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={DOWNLOAD_URL}
              download
              className="btn-primary px-8 sm:px-12 py-4 text-lg inline-flex items-center justify-center"
              onClick={onDownloadClick}
            >
              {downloadLoading ? DOWNLOAD_LOADING_LABEL : DOWNLOAD_LABEL}
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-600 font-mono">
            ВЕРСИЯ 1.0.4 · СТАБИЛЬНАЯ · 42 МБ
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
