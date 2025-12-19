
               
        export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      {/* Hero Section */}
      <section className="pt-16 pb-32">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="uppercase tracking-widest text-sm text-slate-500 mb-4">
            название курса
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Английский для ПУТЕШЕСТВИЙ
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Стартовать до поездки в чемодана – уверенный разговорный английский
            для реальных ситуаций.
          </p>
          <button className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Записаться на курс
          </button>
        </div>
      </section>
    </main>
  );
} 
