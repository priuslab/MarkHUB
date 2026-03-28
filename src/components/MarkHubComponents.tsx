import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Target, 
  Briefcase, 
  Search, 
  X, 
  CheckCircle2, 
  Gavel, 
  Tv, 
  Handshake, 
  Folder, 
  PlayCircle, 
  Mic, 
  BarChart3, 
  FileText, 
  Calendar, 
  Play,
  Building2,
  MessageCircle,
  Send,
  Award,
  Globe,
  Users,
  Clock,
  MessageSquare,
  Book
} from "lucide-react";

export const Navbar = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <BookOpen className="text-primary-container w-8 h-8" />
          <span className="text-2xl font-black text-primary-container font-headline tracking-tight">MarkHUB</span>
        </div>
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <a 
            className="text-secondary font-semibold border-b-2 border-secondary transition-opacity duration-300 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Главная
          </a>
          <a 
            className="text-on-surface-variant hover:text-primary-container transition-opacity duration-300 cursor-pointer" 
            onClick={() => scrollTo("knowledge-base")}
          >
            База знаний
          </a>
          <a 
            className="text-on-surface-variant hover:text-primary-container transition-opacity duration-300 cursor-pointer" 
            onClick={() => scrollTo("schedule")}
          >
            Расписание
          </a>
          <a 
            className="text-on-surface-variant hover:text-primary-container transition-opacity duration-300 cursor-pointer" 
            onClick={() => scrollTo("residents")}
          >
            Отзывы
          </a>
        </nav>
        <button 
          onClick={() => scrollTo("pricing")}
          className="bg-primary-container text-white px-6 py-2 rounded-full font-semibold hover:opacity-80 transition-all active:scale-95"
        >
          Вступить
        </button>
      </div>
    </header>
  );
};

export const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative px-8 py-20 lg:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-primary-container">
            Маркетинг на европейском рынке
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl">
            MarkHUB - закрытая платформа для маркетологов и предпринимателей, которые хотят работать с европейскими клиентами, понимать особенности рынка, развиваться в сильной профессиональной среде.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => scrollTo("pricing")}
              className="hero-gradient text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            >
              Вступить в MarkHUB <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollTo("schedule")}
              className="border-2 border-secondary text-primary-container px-8 py-4 rounded-full text-lg font-semibold hover:bg-surface-container-low transition-all"
            >
              Расписание апреля
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary-container">13 €</span>
              <span className="text-sm text-on-surface-variant font-medium">в месяц</span>
            </div>
            <div className="h-12 w-px bg-outline-variant/30"></div>
            <div className="flex items-center gap-2 text-secondary font-semibold">
              <ShieldCheck className="w-6 h-6" />
              <span>30 дней гарантии</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <img 
              alt="Professional collaboration" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/d/1i5GPbTR-H4rMvMMpSW49nhAA-KPX5n2c"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl hidden md:block w-[90%]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-mark-orange-pale flex items-center justify-center flex-shrink-0">
                <Award className="text-mark-orange w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-primary-container">Организатор: официальный аккредитованный Институт маркетинга в Праге</p>
                <p className="text-sm text-on-surface-variant">Спикеры - топовые маркетологи Европы</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Segmentation = () => (
  <section className="bg-surface-container-low py-24 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-headline text-4xl font-bold text-primary-container mb-4">Для кого создан MarkHUB?</h2>
        <p className="text-on-surface-variant max-w-2xl">
          Мы объединяем маркетологов и предпринимателей, которые хотят быть востребованны на европейском рынке (продавать свои услуги или свой продукт)
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Target className="w-8 h-8 text-secondary" />,
            title: "Маркетологам",
            desc: "SMM, таргетологи, контент-маркетологи, стратеги, кто хочет находить заказчиков из Европы и понимать, как здесь работает рынок.",
            bad: "Мало клиентов",
            good: "Вакансии и уверенность"
          },
          {
            icon: <Briefcase className="w-8 h-8 text-secondary" />,
            title: "Предпринимателям",
            desc: "Понимание того, как контролировать подрядчиков и не платить за \"воздух\".",
            bad: "Плохие результаты",
            good: "Продажи и хорошие конверсии"
          },
          {
            icon: <Search className="w-8 h-8 text-secondary" />,
            title: "Фрилансерам",
            desc: "Выход на чеки европейского рынка, поиск заказчиков, расширение компетенций, получение опыта.",
            bad: "Низкий доход, тревожность",
            good: "Клиенты из ЕС, спокойствие"
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -8 }}
            className="bg-white p-8 lg:p-10 rounded-xl space-y-6 shadow-sm"
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-primary-container">{item.title}</h3>
            <p className="text-on-surface-variant">{item.desc}</p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <X className="text-error w-4 h-4 mt-0.5" />
                <span>{item.bad}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-on-surface-variant">
                <CheckCircle2 className="text-secondary w-4 h-4 mt-0.5 fill-secondary/20" />
                <span>{item.good}</span>
              </li>
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const WhatYouGet = () => (
  <section className="bg-[#f5f5f5] py-24 px-8 relative overflow-hidden">
    {/* Watermark M */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 text-[600px] font-black text-black/[0.03] select-none pointer-events-none">
      M
    </div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <h2 className="font-headline text-4xl font-black text-primary-container text-center mb-20">
        Что ты получаешь в MarkHUB
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-mark-orange-pale flex items-center justify-center mb-6">
              <Globe className="text-mark-orange w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary-container mb-4 leading-tight">Понимание европейского рынка</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Разбор менталитета, юридических тонкостей и рекламных площадок.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-mark-orange-pale flex items-center justify-center mb-6">
              <MessageSquare className="text-mark-orange w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary-container mb-4 leading-tight">Обратная связь по твоим задачам</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Разбор твоих кейсов и задач экспертами клуба в прямом эфире.</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-mark-orange-pale flex items-center justify-center mb-6">
              <Users className="text-mark-orange w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary-container mb-4 leading-tight">Своя среда и нетворкинг</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Нетворкинг с теми, кто уже успешно работает в Европе.</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-mark-orange-pale flex items-center justify-center mb-6">
              <Book className="text-mark-orange w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary-container mb-4 leading-tight">База знаний с первого дня</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Доступ ко всем записям прошлых встреч и материалам сразу.</p>
          </div>
        </div>
        
        {/* Right Side Text */}
        <div className="lg:col-span-5 space-y-12">
          <h3 className="text-4xl md:text-5xl font-black text-primary-container leading-[1.1]">
            MarkHUB — это место, где маркетинг рассматривается как реальный инструмент роста.
          </h3>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-mark-orange flex items-center justify-center flex-shrink-0 mt-1">
              <Clock className="text-mark-orange w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary-container mb-2">Регулярный ритм и живые форматы</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Еженедельные активности, которые держат в тонусе и помогают внедрять знания.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ArchiveSection = () => (
  <section id="knowledge-base" className="py-24 px-8 bg-surface">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-headline text-4xl md:text-5xl font-black text-primary-container mb-16">Доступно сразу после вступления</h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        <div className="lg:col-span-5 bg-white p-8 lg:p-12 rounded-3xl shadow-sm flex flex-col h-full border border-surface-container">
          <div className="flex items-center gap-3 mb-10">
            <Folder className="text-secondary w-6 h-6 fill-secondary" />
            <h3 className="text-2xl font-bold text-primary-container">Архив Мастермайндов</h3>
          </div>
          <div className="space-y-6 flex-grow">
            {[
              { name: "Косметология (Чехия - Германия)", tag: "VIDEO" },
              { name: "Медицинское оборудование", tag: "CASE STUDY" },
              { name: "AI & Telegram Bots", tag: "RECORDING" },
              { name: "EdTech для детей", tag: "VIDEO" },
              { name: "Агентство недвижимости", tag: "VIDEO" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-surface-container">
                <span className="font-medium text-on-surface">{item.name}</span>
                <span className="text-[10px] font-bold tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">{item.tag}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-on-surface-variant italic text-sm">+ Еще 45 разборов в различных нишах</p>
        </div>
        <div className="lg:col-span-7 bg-primary-container rounded-3xl p-4 md:p-12 lg:p-16 text-white relative overflow-hidden archive-pattern flex flex-col justify-center min-h-[500px]">
          <div className="relative z-10">
            <span className="bg-mark-orange text-white text-[10px] font-black px-3 py-1 rounded mb-6 inline-block uppercase tracking-widest">HOT CONTENT</span>
            <h3 className="text-2xl md:text-5xl font-black mb-6 leading-tight max-w-lg">Универсальные воронки через таргетированную рекламу</h3>
            <p className="text-sm md:text-xl mb-10 max-w-md text-on-primary-container">
              3 часа живого разбора: воронки продаж, продуктовая матрица, реальные кейсы по нишам. Спикер: основатель агентства с рекламными бюджетами более 2 млн $ в год.
            </p>
            <a 
              href="https://edu.irkm.cz/markhub"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-container px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-surface-container transition-colors w-fit"
            >
              Вступить и сразу смотреть <PlayCircle className="w-6 h-6 fill-primary-container text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-8 rounded-3xl border border-surface-container">
          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-6 shadow-sm">
            <Mic className="text-secondary w-5 h-5" />
          </div>
          <h4 className="font-bold text-xl text-primary-container mb-3">Продажи через контент — Степан Лаппо</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">Как выстраивать доверие в Instagram и LinkedIn без прямых продаж.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-surface-container">
          <div className="w-10 h-10 rounded-lg bg-secondary/5 flex items-center justify-center mb-6">
            <BarChart3 className="text-secondary w-5 h-5" />
          </div>
          <h4 className="font-bold text-xl text-primary-container mb-3">Тренды маркетинга 2026 — Анна Кононова</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">Куда идет рынок и какие инструменты станут обязательными.</p>
        </div>
        <div className="bg-secondary text-white p-8 rounded-3xl shadow-lg">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-6">
            <FileText className="text-white w-5 h-5" />
          </div>
          <h4 className="font-bold text-xl mb-3">Гайд: Работа с клиентом</h4>
          <p className="text-blue-100 text-sm leading-relaxed">От первой диагностики до закрытия сделки на высокий чек.</p>
        </div>
      </div>
    </div>
  </section>
);

export const Schedule = () => (
  <section id="schedule" className="bg-white py-24 px-8 border-y border-surface-container">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="font-headline text-4xl font-bold text-primary-container mb-4">Расписание апреля 2026</h2>
          <p className="text-on-surface-variant">Живые встречи, воркшопы и приглашенные спикеры.</p>
        </div>
        <a 
          href="https://t.me/markhubcz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary font-bold flex items-center gap-2 hover:underline"
        >
          Смотреть весь календарь <Calendar className="w-5 h-5" />
        </a>
      </div>
      <div className="space-y-4">
        {[
          { day: "02", month: "апрель", type: "Консультация", title: "Консультация, которая закрывается в продажу своих услуг маркетолога. Работа с возражениями клиентов", time: "11:00 - 13:00", active: true },
          { day: "09", month: "апрель", type: "Разбор", title: "Разбор ваших кейсов, ответы на вопросы от маркетолога с опытом в 30+ нишах и основателя ИРКМ (Институт реквалификаионных курсов маркетинга в Праге)", time: "17:00 - 19:00" },
          { day: "18", month: "апрель", type: "Воркшоп", title: "Рекомендации по мобильной съемке (фишки, примеры, инструменты)", time: "11:00 - 13:00" },
          { day: "23", month: "апрель", type: "Стратегия", title: "Разбор работающих маркетинговых стратегий для малого, среднего и крупного бизнеса в Европе", time: "17:00 - 19:00" },
          { day: "29", month: "апрель", type: "Практикум", title: "Настройка рекламного кабинета и запуск таргета на FB своими руками без найма таргетолога", time: "17:00 - 19:00" }
        ].map((event, i) => (
          <div key={i} className="group flex flex-col lg:flex-row items-center gap-8 p-6 rounded-xl hover:bg-surface-container-low transition-colors">
            <div className={`w-24 h-24 flex-shrink-0 rounded-xl flex flex-col items-center justify-center ${event.active ? 'bg-mark-orange-pale text-mark-orange' : 'bg-surface-container-high text-primary-container'}`}>
              <span className="text-xs uppercase tracking-widest font-bold">{event.month}</span>
              <span className="text-4xl font-black">{event.day}</span>
            </div>
            <div className="flex-grow">
              <span className={`px-3 py-1 text-xs font-bold rounded-full mb-2 inline-block ${event.active ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'}`}>
                {event.type}
              </span>
              <h3 className="text-xl font-bold text-primary-container">{event.title}</h3>
            </div>
            <div className="text-on-surface-variant font-medium whitespace-nowrap flex-shrink-0">{event.time}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SocialProof = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const reviews = [
    { 
      name: "Юрий", 
      role: "Предприниматель", 
      img: "https://youtubetotranscript.top/wp-content/uploads/2026/03/Review_by_Yuriy-Entrepreneur.jpg", 
      video: "EOaqotE5JZ0" 
    },
    { 
      name: "Ольга", 
      role: "Маркетолог", 
      img: "https://youtubetotranscript.top/wp-content/uploads/2026/03/Review_Olga_marketing.jpg", 
      video: "QiHD9qss_vo" 
    },
    { 
      name: "Анастасия", 
      role: "Фрилансер", 
      img: "https://youtubetotranscript.top/wp-content/uploads/2026/03/Review_Anastasia_freelancer.jpg", 
      video: "tUtPegqVq6o" 
    },
    { 
      name: "Юлия", 
      role: "Маркетолог", 
      img: "https://youtubetotranscript.top/wp-content/uploads/2026/03/Review_Yulia_marketer.jpg", 
      video: "IDhqv9EqhhY" 
    }
  ];

  return (
    <section id="residents" className="bg-surface-container-low py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold text-primary-container mb-4">Что говорят в клубе</h2>
          <p className="text-on-surface-variant">Реальные истории успеха без купюр.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((item, i) => (
            <div key={i} className="relative aspect-[9/16] rounded-xl overflow-hidden group">
              <img className="w-full h-full object-cover" src={item.img} referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {item.video ? (
                  <div 
                    onClick={() => setActiveVideo(item.video)}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-white/30"
                  >
                    <Play className="text-white w-8 h-8 fill-white" />
                  </div>
                ) : (
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white text-xs font-bold">
                    Скоро добавим
                  </div>
                )}
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold">{item.name}</p>
                <p className="text-xs opacity-80">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform p-2"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export const Pricing = () => (
  <section id="pricing" className="py-24 px-2 md:px-8 max-w-7xl mx-auto">
    <div className="bg-primary-container rounded-3xl px-4 py-12 md:p-16 lg:p-20 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="font-headline text-2xl md:text-5xl font-bold mb-8">13 € в месяц · онлайн и офлайн</h2>
          <ul className="space-y-4 mb-12">
            {[
              "Еженедельные вебинары и разборы",
              "Мастермайнды с кейсами участников",
              "Pitch Nights и специальные форматы",
              "Офлайн-встречи и брейнштормы",
              "Доступ к закрытому сообществу",
              "Записи всех встреч и база знаний",
              "Гайды, кейсы и статьи по европейским рынкам"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-2 md:gap-4 text-sm md:text-lg text-on-primary-container">
                <CheckCircle2 className="text-secondary-container w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <div className="bg-white/10 p-4 rounded-xl inline-flex items-center gap-3">
            <ShieldCheck className="text-secondary-container w-6 h-6 fill-secondary-container/20" />
            <span className="font-medium">30 дней гарантии возврата средств</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-end">
          <div className="bg-white text-primary-container p-4 md:p-10 rounded-2xl w-full max-w-sm shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-2 text-center md:text-left">Стандартный план</p>
            <div className="flex items-baseline justify-center md:justify-start gap-2 mb-8">
              <span className="text-4xl md:text-5xl font-black">13 €</span>
              <span className="text-on-surface-variant">/мес</span>
            </div>
            <a 
              href="https://edu.irkm.cz/markhub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full hero-gradient text-white font-bold text-lg hover:opacity-90 transition-all mb-4 inline-block text-center"
            >
              Начать обучение
            </a>
            <p className="text-xs text-on-surface-variant text-center">Никаких скрытых платежей. Отмена в любой момент.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Accreditation = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto text-center">
    <div className="mb-12">
      <Building2 className="text-secondary w-12 h-12 mx-auto mb-6" />
      <h2 className="font-headline text-3xl font-bold text-primary-container mb-4">
        Организатор MarkHUB - Institut Rekvalifikačních Kurzů Marketingu, официальный институт с государственной аккредитацией реквалификационных программ
      </h2>
      <p className="text-on-surface-variant max-w-2xl mx-auto">
        Наши программы аккредитованы Министерством Образования Чехии и соответствуют стандартам Евросоюза.
      </p>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
      <img className="h-12 w-auto object-contain" src="https://irkm.cz/wp-content/uploads/2025/09/2520.jpg" referrerPolicy="no-referrer" />
      <img className="h-12 w-auto object-contain" src="https://irkm.cz/wp-content/uploads/2025/12/mpo.jpg" referrerPolicy="no-referrer" />
      <img className="h-12 w-auto object-contain" src="https://irkm.cz/wp-content/uploads//2025/09/theme-up-logo-text-light.svg" referrerPolicy="no-referrer" />
    </div>
    <div className="mt-20">
      <a 
        href="https://edu.irkm.cz/markhub"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-container text-white px-10 py-5 rounded-full text-xl font-black hover:opacity-90 active:scale-95 transition-all inline-block"
      >
        Присоединиться к MarkHUB сегодня
      </a>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="w-full py-12 mt-16 bg-surface-container-low text-on-surface-variant font-body text-sm leading-relaxed">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 max-w-7xl mx-auto text-left items-start">
      <div>
        <span className="font-headline font-bold text-primary-container text-xl block mb-4">MarkHUB</span>
        <p className="mb-6">Платформа развития профессионалов в сфере маркетинга и бизнеса. IRKM — это знак качества в европейском образовании.</p>
        <p className="text-xs">© 2026 MarkHub by IRKM.</p>
      </div>
      <div className="flex flex-col gap-4 mt-4 md:mt-0">
        <span className="font-bold text-primary-container block text-lg">Связаться с нами</span>
        <div className="flex flex-wrap gap-3">
          <a 
            href="https://wa.me/420775561206" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-secondary text-primary-container px-5 py-2.5 rounded-full hover:bg-surface-container-low transition-all justify-center min-w-[140px]"
          >
            <MessageCircle className="w-5 h-5 text-secondary" />
            <span className="font-bold text-base">WhatsApp</span>
          </a>
          <a 
            href="https://t.me/irkm_cz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-secondary text-primary-container px-5 py-2.5 rounded-full hover:bg-surface-container-low transition-all justify-center min-w-[140px]"
          >
            <Send className="w-5 h-5 text-secondary" />
            <span className="font-bold text-base">Telegram</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);
