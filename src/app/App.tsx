export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">

      {/* HERO */}
      <section className="pt-16 pb-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="uppercase tracking-widest text-sm text-slate-500 mb-2">
            Курс английского языка
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Английский для путешествий
          </h1>

          <p className="text-base text-slate-600 mb-5">
            От заказа кофе до поиска чемодана — уверенный разговорный английский
            для реальных поездок.
          </p>

          <button className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition">
            ✈️ Записаться на курс
          </button>
        </div>
      </section>

      {/* ДЛЯ КОГО */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Для кого этот курс
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Карточка 1 */}
            <div
              className="
                bg-gradient-to-br from-orange-50 to-orange-100
                rounded-3xl p-6
                shadow-md
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                🧒 Первая группа
              </h3>
              <p className="text-sm text-slate-600 mb-3">4–5 класс</p>
              <ul className="space-y-1 text-slate-800 text-sm">
                <li>• Базовые слова и фразы</li>
                <li>• Игровой формат</li>
                <li>• Разговор без страха</li>
              </ul>
            </div>

            {/* Карточка 2 */}
            <div
              className="
                bg-gradient-to-br from-blue-50 to-indigo-100
                rounded-3xl p-6
                shadow-md
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                🧑 Вторая группа
              </h3>
              <p className="text-sm text-slate-600 mb-3">6–8 класс</p>
              <ul className="space-y-1 text-slate-800 text-sm">
                <li>• Живые диалоги</li>
                <li>• Ситуации из путешествий</li>
                <li>• Уверенная речь</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

