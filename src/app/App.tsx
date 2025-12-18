export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1020] to-[#05070f] text-white font-sans">
      
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <span className="mb-4 rounded-full bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
          Курс английского языка
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Английский для путешествий
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска
          утраченного чемодана? Этот курс научит реальному разговорному
          английскому для поездок и путешествий.
        </p>

        <button className="mt-10 rounded-xl bg-emerald-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-emerald-400">
          Записаться на курс
        </button>
      </section>

      {/* AUDIENCE */}
      <section className="px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-emerald-400">
          Для кого курс
        </h2>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Первая группа</h3>
            <p className="mt-2 text-gray-300">4–5 класс</p>
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6">
            <h3 className="text-xl font-semibold text-emerald-400">
              Вторая группа
            </h3>
            <p className="mt-2 text-gray-300">6–8 класс</p>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="px-6 pb-32">
        <h2 className="mb-12 text-center text-3xl font-bold text-emerald-400">
          Программа курса
        </h2>

        <div className="mx-auto max-w-3xl space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">
              ✈️ Аэропорт без стресса
            </h3>
            <p className="mt-2 text-gray-300">
              Регистрация, паспортный контроль, вопросы на таможне — всё на
              английском.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">
              🏨 В отеле: заселение и помощь
            </h3>
            <p className="mt-2 text-gray-300">
              Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">
              💬 Практика живой речи
            </h3>
            <p className="mt-2 text-gray-300">
              Вежливые фразы, повседневная лексика и уверенность в общении.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
