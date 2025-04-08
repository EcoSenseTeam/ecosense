import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WasteQuiz from "./components/WasteQuiz";
import CarbonCalculator from "./components/CarbonCalculator";
import InfoPage from "./components/InfoPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <Navbar />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<WasteQuiz />} />
            <Route path="/calculator" element={<CarbonCalculator />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>🌱</span>
        <h1 style={styles.logoText}>EcoSense</h1>
      </div>
      <div style={styles.navLinks}>
        {["Home", "Waste Sorting Quiz", "Carbon Calculator", "Info Page"].map((item, index) => {
          const paths = ["/", "/quiz", "/calculator", "/info"];
          return (
            <Link
              key={index}
              to={paths[index]}
              style={hovered === index ? { ...styles.navLink, ...styles.navLinkHover } : styles.navLink}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const Home = () => {
  const [factIndex, setFactIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  const ecoFacts = [
    "Recycling one aluminum can saves enough energy to run a TV for three hours.",
    "Around 91% of plastic is not recycled and ends up in landfills or the ocean.",
    "A typical passenger vehicle emits about 4.6 metric tons of CO₂ per year.",
    "The average American generates about 4.9 pounds of waste per day.",
    "It takes 500-1,000 years for plastic to degrade in a landfill."
  ];

  const featureCards = [
    {
      title: "Waste Sorting Quiz",
      description: "Test your knowledge on proper waste disposal.",
      icon: "♻️",
      color: "#4CAF50",
      path: "/quiz"
    },
    {
      title: "Carbon Calculator",
      description: "Find out your carbon footprint and discover ways to reduce it.",
      icon: "🌡️",
      color: "#F9A826",
      path: "/calculator"
    },
    {
      title: "Eco Resources",
      description: "Explore helpful resources and tips for sustainable living.",
      icon: "📚",
      color: "#64B5F6",
      path: "/info"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex(prev => (prev + 1) % ecoFacts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.homeContent}>
      <div style={styles.heroSection}>
        <div style={styles.heroTextContent}>
          <h2 style={styles.heroTitle}>Welcome to <span style={styles.highlight}>EcoSense</span> 🌍</h2>
          <p style={styles.heroSubtitle}>Your guide to sustainable living</p>
          <p style={styles.heroDescription}>
            Explore our interactive tools to learn about environmental impact, 
            waste management, and eco-friendly practices.
          </p>
          <div style={styles.factBox}>
            <div style={styles.factHeader}>
              <span style={styles.factIcon}>💡</span>
              <h3 style={styles.factTitle}>Did You Know?</h3>
            </div>
            <p style={styles.factText}>{ecoFacts[factIndex]}</p>
          </div>
        </div>
      </div>

      <h2 style={styles.sectionTitle}>Our Features</h2>
      
      <div style={styles.cardsContainer}>
        {featureCards.map((card, index) => (
          <Link 
            to={card.path} 
            key={index} 
            style={styles.cardLink}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div style={{
              ...styles.card,
              transform: activeCard === index ? 'translateY(-10px)' : 'translateY(0)',
              boxShadow: activeCard === index 
                ? '0 12px 20px rgba(0, 0, 0, 0.15)' 
                : '0 6px 12px rgba(0, 0, 0, 0.1)',
            }}>
              <div style={{...styles.cardIcon, backgroundColor: card.color}}>
                <span style={styles.iconText}>{card.icon}</span>
              </div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDescription}>{card.description}</p>
              <div style={{...styles.cardButton, backgroundColor: card.color}}>
                Explore
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={styles.missionSection}>
        <h2 style={styles.missionTitle}>Our Mission</h2>
        <p style={styles.missionText}>
          We believe that small actions lead to big changes. EcoSense provides accessible 
          tools and information to help everyone understand their environmental impact and 
          make informed choices for a sustainable future.
        </p>
        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>91%</span>
            <p style={styles.statText}>of plastic isn't recycled</p>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>70%</span>
            <p style={styles.statText}>of waste can be recycled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    minHeight: "100vh",
    display: "flex", 
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
  },
  navbar: {
    backgroundColor: "#4CAF50",
    padding: "15px 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    borderRadius: "15px",
    boxSizing: "border-box",
    width: "100%", 
    maxWidth: "1200px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoIcon: {
    fontSize: "28px",
    marginRight: "10px",
  },
  logoText: {
    margin: 0,
    fontSize: "28px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    padding: "10px 15px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  },
  navLinkHover: {
    backgroundColor: "#367B39",
    transform: "scale(1.05)",
  },
  content: {
    padding: "20px",
    boxSizing: "border-box",
    flex: 1,
  },
  homeContent: {
    marginTop: "20px",
  },
  heroSection: {
    backgroundColor: "#e8f5e9",
    borderRadius: "15px",
    padding: "40px",
    marginBottom: "40px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    textAlign: "left",
  },
  heroTextContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "2.8em",
    marginBottom: "15px",
    color: "#333",
  },
  highlight: {
    color: "#4CAF50",
  },
  heroSubtitle: {
    fontSize: "1.5em",
    color: "#555",
    marginBottom: "20px",
    fontWeight: "300",
  },
  heroDescription: {
    fontSize: "1.1em",
    lineHeight: "1.6",
    color: "#666",
    marginBottom: "30px",
  },
  factBox: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
    marginTop: "20px",
    borderLeft: "4px solid #4CAF50",
  },
  factHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  factIcon: {
    fontSize: "24px",
    marginRight: "10px",
  },
  factTitle: {
    fontSize: "1.2em",
    margin: 0,
    color: "#2e7d32",
  },
  factText: {
    fontSize: "1.1em",
    color: "#333",
    margin: 0,
    minHeight: "50px",
    transition: "opacity 0.5s",
  },
  sectionTitle: {
    fontSize: "2.2em",
    textAlign: "center",
    marginBottom: "30px",
    color: "#2e7d32",
    position: "relative",
    paddingBottom: "15px",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    marginBottom: "50px",
  },
  cardLink: {
    textDecoration: "none",
    flex: "1",
    minWidth: "280px",
    maxWidth: "350px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.3s ease",
    height: "100%",
  },
  cardIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
  },
  iconText: {
    fontSize: "24px",
  },
  cardTitle: {
    fontSize: "1.5em",
    color: "#333",
    marginBottom: "15px",
  },
  cardDescription: {
    fontSize: "1.1em",
    color: "#666",
    marginBottom: "20px",
    textAlign: "center",
  },
  cardButton: {
    padding: "8px 20px",
    borderRadius: "20px",
    color: "white",
    fontWeight: "bold",
    marginTop: "auto",
  },
  missionSection: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "40px",
    marginBottom: "40px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  },
  missionTitle: {
    fontSize: "2em",
    color: "#2e7d32",
    marginBottom: "20px",
  },
  missionText: {
    fontSize: "1.1em",
    lineHeight: "1.6",
    color: "#555",
    maxWidth: "800px",
    margin: "0 auto 30px",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "30px",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "180px",
  },
  statNumber: {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: "10px",
  },
  statText: {
    fontSize: "1.1em",
    color: "#555",
    margin: 0,
  },
};

export default App;