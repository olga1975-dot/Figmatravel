<h1 className="text-6xl text-red-500 font-bold">
  Tailwind ЖИВОЙ
</h1>
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <main className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Английский для путешествий
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска
          утраченного чемодана? Этот курс научит реальному разговорному
          английскому для поездок и путешествий.
        </p>

        <button className="rounded-xl bg-emerald-400 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-emerald-300 transition">
          Записаться на курс
        </button>
      </main>
    </div>
  );
}
