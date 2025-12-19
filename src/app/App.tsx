export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      {/* HERO */}
      <section className="flex items-center justify-center min-h-screen">
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
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Для кого этот курс
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* CARD 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🧒</div>
              <h3 className="text-2xl font-semibold mb-2">
                Первая группа
              </h3>
              <p className="text-slate-500 mb-4">
                4–5 класс
              </p>
              <ul className="space-y-3 text-slate-700">
                <li>✔ Базовые слова и фразы</li>
                <li>✔ Игровой формат</li>
                <li>✔ Разговор без страха</li>
              </ul>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🧑‍🎓</div>
              <h3 className="text-2xl font-semibold mb-2">
                Вторая группа
              </h3>
              <p className="text-slate-500 mb-4">
                6–8 класс
              </p>
              <ul className="space-y-3 text-slate-700">
                <li>✔ Живые диалоги</li>
                <li>✔ Ситуации из путешествий</li>
                <li>✔ Уверенная речь</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
