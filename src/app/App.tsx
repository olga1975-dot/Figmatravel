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

  const specialFeatures = [
    "Акцент на практическую, живую речь, а не на грамматику ради грамматики.",
    "Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.",
    "Все ситуации — из реальной жизни путешественника.",
    "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс."
  ];

  const requirements = [
    "Стационарный компьютер или ноутбук с наушниками и микрофоном",
    "Стабильный интернет и Zoom"
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

        {/* Секция: Программа курса */}
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

        {/* Секция: Почему этот курс особенный? */}
        <section style={styles.specialSection}>
          <h2 style={styles.specialTitle}>Почему этот курс особенный?</h2>
          <div style={styles.featuresGrid}>
            {specialFeatures.map((feature, index) => (
              <div key={index} style={styles.featureItem}>
                <div style={styles.featureIcon}>✨</div>
                <p style={styles.featureText}>{feature}</p>
              </div>
            ))}
          </div>
          
          <div style={styles.requirementsBox}>
            <h3 style={styles.requirementsTitle}>Что потребуется</h3>
            <ul style={styles.requirementsList}>
              {requirements.map((req, index) => (
                <li key={index} style={styles.requirementItem}>
                  <span style={styles.checkIcon}>✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Секция: Расписание и Стоимость */}
        <section style={styles.scheduleSection}>
          <div style={styles.scheduleGrid}>
            <div style={styles.scheduleCard}>
              <h2 style={styles.scheduleTitle}>Расписание</h2>
              <div style={styles.scheduleItem}>
                <div style={styles.day}>Четверг, 15:00 (МСК)</div>
                <div style={styles.group}>группа 4-5 класс</div>
              </div>
              <div style={styles.scheduleItem}>
                <div style={styles.day}>Пятница, 15:30 (МСК)</div>
                <div style={styles.group}>группа 6-8 класс</div>
              </div>
            </div>
            
            <div style={styles.priceCard}>
              <h2 style={styles.priceTitle}>Стоимость</h2>
              <div style={styles.priceTable}>
                <div style={styles.priceRow}>
                  <div style={styles.priceType}>Полный курс</div>
                  <div style={styles.priceValue}>12 000 руб</div>
                  <div style={styles.priceDetail}>10 уроков</div>
                </div>
                <div style={styles.divider} />
                <div style={styles.priceRow}>
                  <div style={styles.priceType}>Абонемент</div>
                  <div style={styles.priceValue}>1 300 руб</div>
                  <div style={styles.priceDetail}>за урок</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Новая Финальная CTA секция */}
        <section style={styles.finalCta}>
          <div style={styles.finalCtaContent}>
            <div style={styles.finalBadge}>
              <span style={styles.finalBadgeIcon}>🎯</span>
              <span style={styles.finalBadgeText}>Набор открыт!</span>
            </div>
            
            <h2 style={styles.finalTitle}>Места ограничены!</h2>
            
            <div style={styles.featureHighlight}>
              <div style={styles.featureIconSmall}>👥</div>
              <div>
                <h3 style={styles.featureHighlightTitle}>Группы маленькие</h3>
                <p style={styles.featureHighlightText}>— максимум 6 детей, чтобы каждый получил внимание.</p>
              </div>
            </div>
            
            <p style={styles.finalMessage}>
              Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>
            
            <button onClick={handleSignUp} style={styles.finalButton}>
              Записаться на курс
              <span style={styles.buttonArrow}> →</span>
            </button>
          </div>
        </section>
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
  
  /* Стили для программы курса */
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
  
  /* Стили: Почему особенный? */
  specialSection: {
    backgroundColor: '#1e293b',
    borderRadius: '16px',
    padding: '40px',
    marginBottom: '60px',
    border: '1px solid #334155',
  },
  specialTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '32px',
    color: '#06b6d4',
    textAlign: 'center',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '40px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  featureIcon: {
    fontSize: '24px',
    color: '#fbbf24',
    flexShrink: 0,
  },
  featureText: {
    fontSize: '16px',
    color: '#cbd5e1',
    lineHeight: '1.6',
  },
  requirementsBox: {
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    borderLeft: '4px solid #06b6d4',
    padding: '24px',
    borderRadius: '8px',
    marginTop: '32px',
  },
  requirementsTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#f8fafc',
  },
  requirementsList: {
    listStyle: 'none',
    padding: 0,
  },
  requirementItem: {
    fontSize: '16px',
    color: '#cbd5e1',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  checkIcon: {
    color: '#06b6d4',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  
  /* Стили: Расписание и Стоимость */
  scheduleSection: {
    marginBottom: '80px',
  },
  scheduleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  },
  scheduleCard: {
    backgroundColor: '#1e293b',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid #334155',
  },
  scheduleTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#fbbf24',
  },
  scheduleItem: {
    marginBottom: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid #334155',
  },
  day: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: '8px',
  },
  group: {
    fontSize: '16px',
    color: '#06b6d4',
  },
  priceCard: {
    backgroundColor: '#1e293b',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid #334155',
  },
  priceTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#fbbf24',
  },
  priceTable: {
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    borderRadius: '12px',
    padding: '24px',
  },
  priceRow: {
    display: 'grid',
    gridTemplateColumns: '1fr auto auto',
    alignItems: 'center',
    gap: '20px',
    padding: '16px 0',
  },
  priceType: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#f8fafc',
  },
  priceValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fbbf24',
  },
  priceDetail: {
    fontSize: '14px',
    color: '#94a3b8',
    textAlign: 'right',
  },
  divider: {
    height: '1px',
    backgroundColor: '#334155',
    margin: '16px 0',
  },
  
  /* НОВЫЕ стили: Финальная CTA */
  finalCta: {
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    borderRadius: '20px',
    padding: '60px 40px',
    marginBottom: '60px',
    border: '2px solid rgba(6, 182, 212, 0.2)',
    textAlign: 'center',
  },
  finalCtaContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  finalBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    color: '#fbbf24',
    padding: '12px 24px',
    borderRadius: '30px',
    marginBottom: '30px',
    border: '1px solid rgba(245, 158, 11, 0.3)',
  },
  finalBadgeIcon: {
    fontSize: '20px',
  },
  finalBadgeText: {
    fontSize: '18px',
    fontWeight: '600',
  },
  finalTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#f8fafc',
  },
  featureHighlight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    backgroundColor: 'rgba(30, 41, 59, 0.5)',
    padding: '25px',
    borderRadius: '15px',
    marginBottom: '30px',
    maxWidth: '500px',
    margin: '0 auto 30px',
  },
  featureIconSmall: {
    fontSize: '32px',
    color: '#06b6d4',
  },
  featureHighlightTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: '5px',
    textAlign: 'left',
  },
  featureHighlightText: {
    fontSize: '16px',
    color: '#cbd5e1',
    textAlign: 'left',
  },
  finalMessage: {
    fontSize: '20px',
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px',
  },
  finalButton: {
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    color: 'white',
    border: 'none',
    padding: '22px 50px',
    fontSize: '22px',
    fontWeight: 'bold',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '300px',
  },
  buttonArrow: {
    fontSize: '24px',
    marginLeft: '10px',
    transition: 'transform 0.3s',
  },
  
  /* Footer */
  footer: {
    backgroundColor: '#1e293b',
    padding: '32px',
    textAlign: 'center',
    color: '#94a3b8',
    borderTop: '1px solid #334155',
  },
};

export default App;
