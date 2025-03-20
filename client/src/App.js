import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WasteQuiz from "./components/WasteQuiz";
import CarbonCalculator from "./components/CarbonCalculator";
import InfoPage from "./components/InfoPage";

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
      <h1>EcoSense 🌱</h1>
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
    borderRadius: "20px",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    padding: "10px 15px",
    borderRadius: "10px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  navLinkHover: {
    backgroundColor: "#367B39",
    transform: "scale(1.1)",
  },
  content: {
    padding: "20px",
  },
  homeContent: {
    marginTop: "40px",
  },
};

export default App;
