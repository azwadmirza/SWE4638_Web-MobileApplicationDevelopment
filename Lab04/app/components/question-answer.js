"use client";


import { useEffect, useState } from "react";
import Timer from "./timer";

const QuestionAnswer = ({ id }) => {
    const quiz = JSON.parse(localStorage.getItem("quiz"))[id];
    const [selectedAnswers, setSelectedAnswers] = useState(Array(quiz.questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [time,setTime]=useState({hours:0,minutes:0,seconds:0});
    const [timeTaken, setTimeTaken] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        const selected = selectedAnswers.filter(answer => answer === null);
        setProgress((quiz.questions.length-selected.length) / quiz.questions.length * 100);
    },[selectedAnswers,quiz])

    const handleAnswerChange = (index, value) => {
        let newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[index] = value;
        setSelectedAnswers(newSelectedAnswers);
    };

    const submitQuiz = () => {
        setSubmitted(true);
        setTimeTaken(time);
        const correctAnswers = quiz.questions.map(question => question.answer);
        let score = 0;
        for (let i = 0; i < correctAnswers.length; i++) {
            if (selectedAnswers[i] === correctAnswers[i]) {
                score++;
            }
        }
        setScore(score);
        let results = JSON.parse(localStorage.getItem("results"));
        if (!results) {
            results = Array(quiz.questions.length).fill(null);
        }
        results[id] = { score, timeTaken, selectedAnswers };
        localStorage.setItem("results", JSON.stringify(results));
    };

    return (
        <div className="mt-6 mb-6">
            <Timer setTimeTaken={setTimeTaken} initialTime={quiz.time} submitted={submitted} submitQuiz={submitQuiz}/>

            <div className="w-full bg-white rounded-full h-3 dark:bg-gray-700">
                <div className="bg-blue-600 h-3 rounded-full" style={{width:`${progress}%`}}></div>
            </div>

            {submitted && (<div className="mt-2 mb-2 px-4 py-2 rounded font-bold text-white bg-green-500 border-green-900">Score: {score}/{quiz.questions.length} Time Taken: {`${timeTaken.hours}:${timeTaken.minutes}:${timeTaken.seconds}`}</div>)}
            <ul>
                {quiz.questions.map((question, index) => (
                    <div key={index} className="mt-2 mb-2">
                        <h2 className="text-xl font-bold mb-2">
                            {index + 1}{") "}{question.question}
                        </h2>
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <input
                                    type="radio"
                                    id={`${index}-${optionIndex}`}
                                    name={`answer-${index}`}
                                    value={option}
                                    checked={selectedAnswers[index] === option}
                                    onChange={() => handleAnswerChange(index, option)}
                                    disabled={submitted}
                                    className="mt-1 ms-2 mb-2"
                                />
                                <label htmlFor={`${index}-${optionIndex}`} className="ms-2">{option}</label>
                            </div>
                        ))}
                        {submitted && (
                            <div key={index} className="mt-6 mb-6">
                                {selectedAnswers[index] === question.answer
                                    ? (<span className="bg-green-500 border-green-900 text-white rounded py-2 px-4">Correct !</span>)
                                    : (<span className="bg-red-500 border-red-900 text-white rounded py-2 px-4">Wrong! Answer is {question.answer}</span>)}
                            </div>
                        )}
                    </div>
                ))}
            </ul>
            <button
                onClick={submitQuiz}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit Quiz
            </button>
        </div>
    );
};

export default QuestionAnswer;
