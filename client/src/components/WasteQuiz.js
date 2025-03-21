import React, { useState } from "react";

const questions = [
  {
    id: 1,
    text: "Is it a battery, light bulb, or electronic item?",
    options: ["Yes", "No"],
    next: {Yes: "specialCase", No: 2},
  },
  {
    id: 2,
    text: "Is it food waste or made from plants (paper, wood, etc)?",
    options: ["Yes", "No"],
    next: { Yes: 3, No: 4},
  },
  {
    id: 3,
    text: "Is it free of plastic or grease?",
    options: ["Yes", "No"],
    next: { Yes: "compost", No: "trash"},
  },
  {
    id: 4,
    text: "Is it plastic, glass, or paper?",
    options: ["Yes", "No"],
    next: { Yes: 5, No: "trash" },
  },
  {
    id: 5,
    text: "Is it clean of food scraps, grease, or non-water beverages?",
    options: ["Yes", "No"],
    next: { Yes: "recycle", No: "trash"},
  },
];

const results = {
  recycle: "It belongs in the Recycle bin! ♻️",
  compost: "It belongs in the Compost bin! 🌱",
  trash: "It belongs in the Trash bin! 🗑️",
  specialCase: "Take it to a disposal facility near you! ⚠️"
};

const WasteQuiz = () => {
  const [step, setStep] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const currentQuestion = questions.find((q) => q.id === step);

  const handleAnswer = (answer) => {
    const newAnswers = { ...selectedAnswers, [step]: answer };
    setSelectedAnswers(newAnswers);

    const nextStep = currentQuestion.next[answer];

    if (typeof nextStep === "string") {
      setStep(nextStep); // End of quiz, show result
    } else {
      setStep(nextStep); // Move to next question
    }
  };

  const restartQuiz = () => {
    setStep(1);
    setSelectedAnswers({});
  };

  return (
    <div style={styles.content}>
      <h2>Waste Sorting Quiz</h2>
      {results[step] ? (
        <>
          <h3>{results[step]}</h3>
          <button onClick={restartQuiz}>Try Another Item</button>
        </>
      ) : (
        <>
          <p>{currentQuestion.text}</p>
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              style={styles.button}
            >
              {option}
            </button>
          ))}
        </>
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
  button: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "80%",
  },
};

export default WasteQuiz;
