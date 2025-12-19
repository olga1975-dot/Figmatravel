export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      
      {/* HERO */}
      <section className="flex items-center justify-center py-32">
        <div className="max-w-3xl text-center px-6">
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

          <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition">
            ✈️ Записаться на курс
          </button>
        </div>
      </section>

      {/* ДЛЯ КОГО КУРС */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Для кого этот курс
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="rounded-3xl bg-slate-50 p-8 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">
                👶 Первая группа
              </h3>
              <p className="text-slate-500 mb-4">
                4–5 класс
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Базовые слова и фразы</li>
                <li>Игровой формат</li>
                <li>Разговор без страха</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-indigo-50 p-8 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">
                🧑 Вторая группа
              </h3>
              <p className="text-slate-500 mb-4">
                6–8 класс
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Живые диалоги</li>
                <li>Ситуации из путешествий</li>
                <li>Уверенная речь</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
