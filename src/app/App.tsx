export default function App() {
  return (
    <main className="min-h-screen bg-[#F7F8FC] text-[#1C1C1C]">
      
      {/* HERO */}
      <section className="max-w-[960px] mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
          Курс английского языка
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Английский для путешествий
        </h1>

        <p className="text-lg text-gray-600 max-w-[720px] mx-auto mb-10">
          Мечтаете свободно общаться за границей — от заказа кофе
          до поиска утраченного чемодана? Этот курс научит реальному
          разговорному английскому для поездок и путешествий.
        </p>

        <button className="px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition">
          Записаться на курс
        </button>
      </section>

    </main>
  );
}
