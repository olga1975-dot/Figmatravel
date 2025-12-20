<div className="bg-red-500 text-white p-10 text-3xl">
  TAILWIND WORKS
</div>
export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 text-slate-900">

      {/* HERO */}
      <section className="pt-16 pb-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="uppercase tracking-widest text-sm text-indigo-500 mb-3">
            Курс английского языка
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Английский для путешествий
          </h1>

          <p className="text-lg text-slate-600 mb-6">
            От заказа кофе до поиска чемодана — уверенный разговорный английский
            для реальных поездок.
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
            bg-gradient-to-r from-indigo-600 to-sky-500
            text-white text-lg font-semibold
            shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition">
            ✈️ Записаться на курс
          </button>
        </div>
      </section>

      {/* ДЛЯ КОГО */}
      <section className="pb-14">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            Для кого этот курс
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Карточка 1 */}
            <div className="rounded-2xl p-6
              bg-gradient-to-br from-indigo-500 to-indigo-700
              text-white shadow-xl
              hover:-translate-y-1 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                🧒 Первая группа
              </h3>
              <p className="text-indigo-100 mb-3">4–5 класс</p>
              <ul className="space-y-2">
                <li>• Базовые слова и фразы</li>
                <li>• Игровой формат</li>
                <li>• Разговор без страха</li>
              </ul>
            </div>

            {/* Карточка 2 */}
            <div className="rounded-2xl p-6
              bg-gradient-to-br from-emerald-500 to-teal-600
              text-white shadow-xl
              hover:-translate-y-1 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                🧑 Вторая группа
              </h3>
              <p className="text-emerald-100 mb-3">6–8 класс</p>
              <ul className="space-y-2">
                <li>• Живые диалоги</li>
                <li>• Ситуации из путешествий</li>
                <li>• Уверенная речь</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
