// Source: https://github.com/chrisblakely01/quiz-app/blob/master/final/src/App.js
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function App() {
	const questions = [
		{
			questionText: 'Name one difference between client-side and server-side JS?',
			answerOptions: [
				{ answerText: 'client-side JS cannot use the filesystem, while server-side can', isCorrect: true },
				{ answerText: 'server-side cannot use the filesystem, while client-side can', isCorrect: false },
				{ answerText: 'trick question - they are synonymous', isCorrect: false },
				{ answerText: 'I do not know', isCorrect: false },
			],
    },
    {
			questionText: 'Update question here',
			answerOptions: [
				{ answerText: 'A', isCorrect: true },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'D', isCorrect: false },
			],
    },
    {
			questionText: 'Update question here',
			answerOptions: [
				{ answerText: 'A', isCorrect: true },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'D', isCorrect: false },
			],
    },
    {
			questionText: 'Update question here',
			answerOptions: [
				{ answerText: 'A', isCorrect: true },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'D', isCorrect: false },
			],
    },
    {
			questionText: 'Update question here',
			answerOptions: [
				{ answerText: 'A', isCorrect: true },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'D', isCorrect: false },
			],
    },
    {
			questionText: 'Update question here',
			answerOptions: [
				{ answerText: 'A', isCorrect: true },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'D', isCorrect: false },
			],
    },
    {
			questionText: 'Update question here',
			answerOptions: [
				{ answerText: 'A', isCorrect: true },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'D', isCorrect: false },
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
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default App 