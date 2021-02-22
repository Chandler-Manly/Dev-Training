// Source: https://github.com/chrisblakely01/quiz-app/blob/master/final/src/App.js
import React, { useState } from "react";
import "./Quiz.css";

function Quiz() {
  const questions = [
    {
      questionText:
        "Name one difference between client-side and server-side JS?",
      answerOptions: [
        {
          answerText:
            "client-side JS cannot use the filesystem, while server-side can",
          isCorrect: true,
        },
        {
          answerText:
            "server-side cannot use the filesystem, while client-side can",
          isCorrect: false,
        },
        {
          answerText: "trick question - they are synonymous",
          isCorrect: false,
        },
        { answerText: "I am Ron Burgundy?", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the relationship between client and server called?",
      answerOptions: [
        { answerText: "the request-response paradigm", isCorrect: true },
        {
          answerText: "the michael jordan-scottie pippen connection",
          isCorrect: false,
        },
        { answerText: "cheeseburger in paradise", isCorrect: false },
        { answerText: "brunch and bubbles", isCorrect: false },
      ],
    },
    {
      questionText:
        "In what file can we find all necessary dependencies for a project?",
      answerOptions: [
        { answerText: "package.json", isCorrect: true },
        { answerText: "index.html", isCorrect: false },
        { answerText: "style.css", isCorrect: false },
        { answerText: "app.js", isCorrect: false },
      ],
    },
    {
      questionText:
        "what command lets devs install new dpeendencies to a project",
      answerOptions: [
        { answerText: "npm install -dependency", isCorrect: true },
        { answerText: "npm run start", isCorrect: false },
        { answerText: "git commit -m", isCorrect: false },
        { answerText: "git push", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the special syntax that allows us to write HTML in JavaScript",
      answerOptions: [
        { answerText: "JSX", isCorrect: true },
        { answerText: "JS", isCorrect: false },
        { answerText: "Python", isCorrect: false },
        { answerText: "CSS", isCorrect: false },
      ],
    },
    {
      questionText:
        "What are the keywords to import and export files in Node.js",
      answerOptions: [
        {
          answerText:
            "require /module.exports (commonJS) && import/export (modules)",
          isCorrect: true,
        },
        { answerText: "Burgers and hotdogs", isCorrect: false },
        { answerText: "fries or potato wedges", isCorrect: false },
        { answerText: "soda or pop", isCorrect: false },
      ],
    },
    {
      questionText: "What allows us to pass properties to components",
      answerOptions: [
        { answerText: "props", isCorrect: true },
        { answerText: "daps", isCorrect: false },
        { answerText: "fist-bumps", isCorrect: false },
        { answerText: "peace sign", isCorrect: false },
      ],
    },
    {
      questionText: "Test Question?",
      answerOptions: [
        { answerText: "A", isCorrect: true },
        { answerText: "B", isCorrect: false },
        { answerText: "C", isCorrect: false },
        { answerText: "D", isCorrect: false },
      ],
    },
    {
      questionText: "Test Question?",
      answerOptions: [
        { answerText: "A", isCorrect: true },
        { answerText: "B", isCorrect: false },
        { answerText: "C", isCorrect: false },
        { answerText: "D", isCorrect: false },
      ],
    },
    {
      questionText: "Test Question?",
      answerOptions: [
        { answerText: "A", isCorrect: true },
        { answerText: "B", isCorrect: false },
        { answerText: "C", isCorrect: false },
        { answerText: "D", isCorrect: false },
      ],
    },
  ];

  // State Variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // increment score +1
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-app">
      <div>
        {/* ternary here */}
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}! "Keep training! The
            force is strong with you."
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
