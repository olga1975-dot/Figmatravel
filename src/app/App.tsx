import React from 'react';

function App() {
  const handleSignUp = () => {
    alert('Спасибо за интерес к курсу! Форма записи откроется здесь.');
  };

  const programItems = [
    {
      title: "Аэропорт без стресса",
      description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      benefit: "Уверенность уже в первые часы за границей."
    },
    {
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      benefit: "Развитие гастрономического словаря и уверенности в общении."
    },
    {
      title: "Экстренные случаи",
      description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      benefit: "Важные фразы, которые могут спасти отпуск."
    },
    {
      title: "В отеле: заселение и помощь",
      description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      benefit: "Практика вежливых фраз и повседневной лексики."
    },
    {
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      benefit: "Понимание устной речи и произношения в реальных ситуациях."
    },
    {
      title: "Туризм и развлечения",
      description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      benefit: "Погружение в культурный контекст через язык."
    }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>🌍</span>
            <h1 style={styles.logoText}>TravelEnglish</h1>
          </div>
          <div style={styles.tagline}>Курс для детей 4-8 классов</div>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.hero}>
          <div style={styles.badge}>Набор открыт!</div>
          <h1 style={styles.title}>Английский для путешествий</h1>
          <p style={styles.subtitle}>
            Мечтаете, чтобы ваш ребёнок свободно общался за границей? 
            Этот курс научит реальному разговорному английскому для путешествий.
          </p>
        </div>

        {/* Новая секция: Программа курса */}
        <section style={styles.programSection}>
          <h2 style={styles.sectionTitle}>Программа курса</h2>
          <div style={styles.programGrid}>
            {programItems.map((item, index) => (
              <div key={index} style={styles.programCard}>
                <h3 style={styles.programTitle}>{item.title}</h3>
                <p style={styles.programDescription}>{item.description}</p>
                <div style={styles.benefitBox}>
                  <span style={styles.benefitText}>{item.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Существующая CTA секция */}
        <div style={styles.cta}>
          <h2 style={styles.ctaTitle}>Готовы к путешествиям без языковых барьеров?</h2>
          <button onClick={handleSignUp} style={styles.button}>
            Записаться на курс
          </button>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© 2024 TravelEnglish. Курс для детей 4-8 классов</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#1e293b',
    padding: '24px 0',
    borderBottom: '1px solid #334155',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoIcon: {
    fontSize: '32px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  tagline: {
    color: '#06b6d4',
    fontWeight: '500',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '48px 24px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    color: '#06b6d4',
    padding: '8px 20px',
    borderRadius: '20px',
    marginBottom: '24px',
    border: '1px solid rgba(6, 182, 212, 0.3)',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '24px',
    background: 'linear-gradient(135deg, #f59e0b, #06b6d4, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '20px',
    color: '#cbd5e1',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  
  /* Новые стили для программы курса */
  programSection: {
    marginBottom: '80px',
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '48px',
    color: '#fbbf24',
  },
  programGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px',
  },
  programCard: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #334155',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  programTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#06b6d4',
  },
  programDescription: {
    fontSize: '16px',
    color: '#cbd5e1',
    marginBottom: '16px',
    lineHeight: '1.5',
  },
  benefitBox: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderLeft: '4px solid #f59e0b',
    padding: '12px',
    borderRadius: '4px',
  },
  benefitText: {
    fontSize: '14px',
    color: '#fbbf24',
    fontStyle: 'italic',
  },
  
  /* Существующие CTA стили */
  cta: {
    textAlign: 'center',
    padding: '64px 0',
  },
  ctaTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '32px',
  },
  button: {
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    color: 'white',
    border: 'none',
    padding: '20px 48px',
    fontSize: '20px',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
  footer: {
    backgroundColor: '#1e293b',
    padding: '32px',
    textAlign: 'center',
    color: '#94a3b8',
    borderTop: '1px solid #334155',
  },
};

export default App;
