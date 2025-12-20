import React from 'react';
import './index.css';

function App() {
  const handleSignUp = () => {
    alert('Thank you for your interest!');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <span style={styles.logoIcon}>🌍</span>
            <h1 style={styles.logoText}>TravelEnglish</h1>
          </div>
          <div style={styles.tagline}>Course for kids 4-8 grade</div>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.hero}>
          <div style={styles.badge}>Enrollment Open!</div>
          <h1 style={styles.title}>English for Travel</h1>
          <p style={styles.subtitle}>
            Dream of your child speaking freely abroad? This course teaches real conversational English for travel.
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>For Whom</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span>Group 1:</span>
                <span style={styles.highlight}>4-5 grade</span>
              </li>
              <li style={styles.listItem}>
                <span>Group 2:</span>
                <span style={styles.highlight}>6-8 grade</span>
              </li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Program</h2>
            <ul style={styles.list}>
              <li style={styles.simpleItem}>✓ Airport without stress</li>
              <li style={styles.simpleItem}>✓ Hotel check-in</li>
              <li style={styles.simpleItem}>✓ Cafes & restaurants</li>
              <li style={styles.simpleItem}>✓ Navigation</li>
            </ul>
          </div>
        </div>

        <div style={styles.cta}>
          <h2 style={styles.ctaTitle}>Ready for travel without language barriers?</h2>
          <button onClick={handleSignUp} style={styles.button}>
            Sign Up for Course
          </button>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© 2024 TravelEnglish. Course for kids 4-8 grade</p>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginBottom: '64px',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid #334155',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#fbbf24',
  },
  list: {
    listStyle: 'none',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #334155',
  },
  simpleItem: {
    padding: '8px 0',
    color: '#cbd5e1',
  },
  highlight: {
    color: '#06b6d4',
    fontWeight: '500',
  },
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
