export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 text-center">
      
      <span className="text-sm tracking-widest uppercase text-slate-500 mb-4">
        Курс английского языка
      </span>

      <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
        Английский для путешествий
      </h1>

      <p className="max-w-2xl text-lg text-slate-600 mb-8">
        Мечтаете свободно общаться за границей — от заказа кофе до поиска
        утраченного чемодана? Этот курс научит реальному разговорному
        английскому для поездок и путешествий.
      </p>

      <button className="px-6 py-3 rounded-md border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition">
        Записаться на курс
      </button>

    </main>
  );
}
