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
  { name: "How to Recycle Correctly", link: "https://www.epa.gov/recycle" },
  { name: "Sustainable Living Tips", link: "https://www.greenpeace.org/usa/sustainable-living/" },
  { name: "Eco-Friendly Product Directory", link: "https://www.ecowatch.com/eco-friendly-products" },
  { name: "Guide to Composting at Home", link: "https://www.nrdc.org/stories/composting-way-easy" },
  { name: "Sustainable Fashion Brands", link: "https://goodonyou.eco/" }
];

const InfoPage = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  return (
    <div style={styles.content}>
      <h2 style={styles.title}>EcoSense Informational Page</h2>

      <div style={styles.card}>
        <h3 style={styles.cardTitle}>🌍 Tip of the Day</h3>
        <p style={styles.tip}>{tip}</p>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle}>📚 Useful Resources</h3>
        <ul style={styles.resourceList}>
          {resources.map((res, index) => (
            <li key={index} style={styles.resourceItem}>
              <a href={res.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                {res.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  content: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
  },
  title: {
    fontSize: "2em",
    marginBottom: "20px",
    color: "#2e7d32",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "1.5em",
    marginBottom: "15px",
    color: "#2e7d32",
  },
  tip: {
    fontStyle: "italic",
    fontSize: "18px",
    color: "#555",
    marginBottom: "15px",
  },
  resourceList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  resourceItem: {
    marginBottom: "10px",
  },
  link: {
    color: "#2e7d32",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  },
  linkHover: {
    color: "#388e3c",
  },
};

export default InfoPage;
