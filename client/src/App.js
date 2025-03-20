import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WasteQuiz from "./components/WasteQuiz";
import CarbonCalculator from "./components/CarbonCalculator";
import InfoPage from "./components/InfoPage";

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.navbar}>
          <h1>EcoSense 🌱</h1>
          <div style={styles.navLinks}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/quiz" style={styles.navLink}>Waste Sorting Quiz</Link>
            <Link to="/calculator" style={styles.navLink}>Carbon Calculator</Link>
            <Link to="/info" style={styles.navLink}>Info Page</Link>
          </div>
        </nav>

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

const Home = () => (
  <div style={styles.homeContent}>
    <h2>Welcome to EcoSense 🌍</h2>
    <p>Explore our tools to learn about sustainability and eco-friendly living!</p>
    <p>Use the navigation bar to start.</p>
  </div>
);

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  navbar: {
    backgroundColor: "#4CAF50",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  },
  content: {
    padding: "20px",
  },
  homeContent: {
    marginTop: "40px",
  },
};

export default App;
