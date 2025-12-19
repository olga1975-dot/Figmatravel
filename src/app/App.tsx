export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
      <section className="max-w-3xl text-center px-6">
        <p className="uppercase tracking-widest text-sm text-slate-500 mb-4">
          Курс английского языка
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
          Английский для путешествий
        </h1>

        <p className="text-lg text-slate-600 mb-10">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска
          утраченного чемодана? Этот курс научит реальному разговорному
          английскому для поездок и путешествий.
        </p>

        <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-4 text-xl font-bold text-white shadow-lg transition hover:scale-105">
          Записаться на курс
        </button>
      </section>
    </main>
  );
}
