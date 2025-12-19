export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="max-w-3xl text-center px-6">
        <p className="uppercase tracking-widest text-sm text-slate-500 mb-4">
          Курс английского языка
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Английский для путешествий
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска
          утраченного чемодана? Этот курс научит реальному разговорному
          английскому для поездок и путешествий.
        </p>

        <button className="px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition">
          Записаться на курс
        </button>
      </div>
    </div>
  );
}
