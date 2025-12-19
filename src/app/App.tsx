export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <span className="mb-6 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
          Курс английского языка
        </span>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight">
          Английский для путешествий
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска
          утраченного чемодана? Этот курс научит реальному разговорному английскому
          для поездок и путешествий.
        </p>

        <button className="mt-10 rounded-xl bg-emerald-500 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-emerald-400 transition">
          Записаться на курс
        </button>
      </section>

      {/* AUDIENCE */}
      <section className="px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-emerald-400">
          Для кого курс
        </h2>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-800/60 p-6 border border-slate-700">
            <h3 className="text-xl font-semibold">Первая группа</h3>
            <p className="mt-2 text-slate-300">4–5 класс</p>
          </div>

          <div className="rounded-2xl bg-slate-800/60 p-6 border border-emerald-500/40">
            <h3 className="text-xl font-semibold text-emerald-400">
              Вторая группа
            </h3>
            <p className="mt-2 text-slate-300">6–8 класс</p>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="px-6 pb-32">
        <h2 className="mb-12 text-center text-3xl font-bold text-emerald-400">
          Программа курса
        </h2>

        <div className="mx-auto max-w-3xl space-y-6">
          {[
            ["✈️ Аэропорт без стресса", "Регистрация, паспортный контроль, вопросы на таможне — всё на английском."],
            ["🏨 В отеле", "Заселение, помощь, Wi-Fi, смена номера."],
            ["💬 Живая речь", "Вежливые фразы, повседневная лексика, уверенность."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-slate-800/60 p-6 border border-slate-700">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
