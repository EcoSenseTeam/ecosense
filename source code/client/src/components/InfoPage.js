import React, { useState, useEffect } from "react";

const tips = [
  "Use a reusable water bottle instead of plastic ones.",
  "Unplug electronics when not in use to save energy.",
  "Opt for public transport or carpooling to reduce emissions.",
  "Reduce food waste by planning meals in advance.",
  "Switch to LED bulbs to lower energy consumption.",
  "Buy second-hand clothing instead of fast fashion.",
  "Use compostable or reusable shopping bags.",
  "Support local farmers' markets for fresh, low-carbon produce.",
  "Reduce meat consumption to lower your carbon footprint.",
  "Recycle old electronics instead of throwing them away."
];

const resources = [
  { name: "How to Recycle Correctly", link: "https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables" },
  { name: "Sustainable Living Tips", link: "https://www.goodgoodgood.co/articles/green-living-websites" },
  { name: "Eco-Friendly Product Directory", link: "https://spot.ul.com/" },
  { name: "Guide to Composting at Home", link: "https://www.epa.gov/recycle/composting-home" },
  { name: "Sustainable Fashion Brands", link: "https://goodonyou.eco/" }
];

const InfoPage = () => {
  const [tip, setTip] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredResource, setHoveredResource] = useState(null);

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h2 style={styles.mainTitle}>EcoSense Knowledge Hub</h2>
        <p style={styles.subtitle}>Explore resources to help you live more sustainably</p>
      </div>

      <div style={styles.tipSection}>
        <div style={styles.tipContainer}>
          <div style={styles.tipHeader}>
            <span style={styles.tipIcon}>💡</span>
            <h3 style={styles.tipTitle}>Eco Tip of the Day</h3>
          </div>
          <p style={styles.tipText}>{tip}</p>
          <button 
            style={styles.newTipButton}
            onClick={() => setTip(tips[Math.floor(Math.random() * tips.length)])}
          >
            New Tip
          </button>
        </div>
      </div>

      <h3 style={styles.sectionTitle}>Helpful Resources</h3>
      <div style={styles.resourcesContainer}>
        {resources.map((resource, index) => (
          <a 
            key={index} 
            href={resource.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              ...styles.resourceCard,
              transform: hoveredResource === index ? 'translateY(-5px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHoveredResource(index)}
            onMouseLeave={() => setHoveredResource(null)}
          >
            <span style={styles.resourceIcon}>{resource.icon}</span>
            <p style={styles.resourceName}>{resource.name}</p>
            <div style={styles.arrowIcon}>↗️</div>
          </a>
        ))}
      </div>

      <div style={styles.footerSection}>
        <p style={styles.footerText}>
          Together, we can make everyday choices that help our planet thrive.
        </p>
        <div style={styles.footerIcons}>
          🌎 🌱 ♻️ 💧 🌿
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.05)",
    borderRadius: "15px",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "30px",
    padding: "20px 0",
    borderBottom: "2px solid #e0e0e0",
  },
  mainTitle: {
    fontSize: "2.5em",
    color: "#2e7d32",
    margin: "0 0 10px 0",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2em",
    color: "#555",
    margin: 0,
    fontWeight: "normal",
  },
  tipSection: {
    marginBottom: "40px",
  },
  tipContainer: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e0e0e0",
    position: "relative",
  },
  tipHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  tipIcon: {
    fontSize: "24px",
    marginRight: "10px",
  },
  tipTitle: {
    fontSize: "1.5em",
    margin: 0,
    color: "#2e7d32",
    fontWeight: "bold",
  },
  tipText: {
    fontSize: "1.1em",
    lineHeight: "1.6",
    color: "#333",
    padding: "10px 0",
    fontStyle: "italic",
    borderLeft: "3px solid #4CAF50",
    paddingLeft: "15px",
    margin: "10px 0",
  },
  newTipButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    marginTop: "10px",
  },
  sectionTitle: {
    fontSize: "1.8em",
    color: "#2e7d32",
    marginTop: "30px",
    marginBottom: "20px",
    textAlign: "center",
    position: "relative",
    paddingBottom: "10px",
  },
  categoryContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "40px",
  },
  categoryCard: {
    padding: "20px",
    borderRadius: "12px",
    width: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  categoryIcon: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  categoryName: {
    fontSize: "1em",
    fontWeight: "bold",
    margin: 0,
    color: "white",
    textAlign: "center",
  },
  resourcesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  resourceCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.3s ease",
    position: "relative",
    border: "1px solid #e0e0e0",
  },
  resourceIcon: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  resourceName: {
    fontSize: "1.1em",
    fontWeight: "bold",
    color: "#2e7d32",
    margin: 0,
    textAlign: "center",
  },
  arrowIcon: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "14px",
  },
  footerSection: {
    textAlign: "center",
    marginTop: "20px",
    padding: "20px 0",
    borderTop: "2px solid #e0e0e0",
  },
  footerText: {
    fontSize: "1.1em",
    color: "#555",
    margin: "0 0 10px 0",
  },
  footerIcons: {
    fontSize: "24px",
    letterSpacing: "8px",
  },
};

export default InfoPage;
