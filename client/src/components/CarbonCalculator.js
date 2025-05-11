import React, { useState } from "react";

const emissionFactors = {
  electricity: 0.92,
  car: 0.404,
  flight: 90,
  water: 0.18,
};

const globalAverage = 4000;

const CarbonCalculator = () => {
  const [inputs, setInputs] = useState({
    electricity: "",
    car: "",
    flight: "",
    water: "",
  });

  const [footprint, setFootprint] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const calculateFootprint = () => {
    const total =
      (inputs.electricity * emissionFactors.electricity || 0) +
      (inputs.car * emissionFactors.car || 0) +
      (inputs.flight * emissionFactors.flight || 0) +
      (inputs.water * emissionFactors.water || 0);

    setFootprint(total.toFixed(2));
  };

  const resetCalculator = () => {
    setInputs({ electricity: "", car: "", flight: "", water: "" });
    setFootprint(null);
  };

  return (
    <div style={styles.content}>
      <h2>Carbon Footprint Calculator</h2>
      <div style={styles.form}>
        <label htmlFor="electricity">Electricity Usage (kWh/month):</label>
        <input
          id="electricity"
          type="number"
          name="electricity"
          value={inputs.electricity}
          onChange={handleChange}
          style={styles.input}
        />

        <label htmlFor="car" >Car Travel (miles/month):</label>
        <input
          id="car"
          type="number"
          name="car"
          value={inputs.car}
          onChange={handleChange}
          style={styles.input}
        />

        <label htmlFor="flight">Flight Travel (hours/year):</label>
        <input
          id="flight"
          type="number"
          name="flight"
          value={inputs.flight}
          onChange={handleChange}
          style={styles.input}
        />

        <label htmlFor="water">Water Usage (gallons/day):</label>
        <input
          id="water"
          type="number"
          name="water"
          value={inputs.water}
          onChange={handleChange}
          style={styles.input}
        />

        <div style={styles.buttons}>
          <button onClick={calculateFootprint} style={styles.button}>
            Calculate
          </button>
          <button onClick={resetCalculator} style={styles.resetButton}>
            Reset
          </button>
        </div>
      </div>

      {footprint !== null && (
        <div style={styles.result}>
          <h3>Your Monthly Carbon Footprint: {footprint} kg CO2</h3>
          <p>Yearly Estimate: {(footprint * 12).toFixed(2)} kg CO2</p>
          <p>Global Average: {globalAverage} kg CO2/year</p>
          <p>
            {footprint * 12 > globalAverage
              ? "Your footprint is above average. Consider reducing energy use!"
              : "Your footprint is below average. Great job!"}
          </p>
        </div>
      )}
    </div>
  );
};

const styles = {
  content: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "auto",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "8px",
    width: "80%",
  },
  buttons: {
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    margin: "5px",
  },
  resetButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginLeft: "10px",
  },
  result: {
    marginTop: "20px",
  },
};

export default CarbonCalculator;
