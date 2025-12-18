export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b132b] via-[#0f1c3f] to-[#020617] text-slate-100">
      
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <span className="mb-4 rounded-full bg-emerald-400/15 px-4 py-1 text-sm text-emerald-300">
          Курс английского языка
        </span>

        <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl text-white">
          Английский для путешествий
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска
          утраченного чемодана? Этот курс научит реальному разговорному
          английскому для поездок и путешествий.
        </p>

        <button className="mt-10 rounded-xl bg-emerald-400 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-emerald-300 transition">
          Записаться на курс
        </button>
      </section>

      {/* AUDIENCE */}
      <section className="px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-emerald-300">
          Для кого курс
        </h2>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white">Первая группа</h3>
            <p className="mt-2 text-slate-300">4–5 класс</p>
          </div>

          <div className="rounded-2xl bg-emerald-400/10 border border-emerald-400/30 p-6">
            <h3 className="text-xl font-semibold text-emerald-300">
              Вторая группа
            </h3>
            <p className="mt-2 text-slate-300">6–8 класс</p>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="px-6 pb-32">
        <h2 className="mb-12 text-center text-3xl font-bold text-emerald-300">
          Программа курса
        </h2>

        <div className="mx-auto max-w-3xl space-y-6">
          {[
            {
              title: "✈️ Аэропорт без стресса",
              text: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
            },
            {
              title: "🏨 В отеле: заселение и помощь",
              text: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
            },
            {
              title: "💬 Практика живой речи",
              text: "Вежливые фразы, повседневная лексика и уверенность в общении.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

