"use client";
import { Card } from "react-bootstrap";
import Timer from "./timer";
import { useQuestion } from "../hooks/useQuestion";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../../../loading";

const Questions = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const router=useRouter();
    const { questions, initialTime, progress, selectedOptions, handleSelection, submitQuiz, setTimeTaken, options, showAnswers, score } = useQuestion(id);
    useEffect(() => {
        if (initialTime !== null) {
            setLoading(false);
        }
    }, [initialTime])
    if (loading) {
        return Loading();
    }
    return (
        <>
            <div className="w-full flex justify-center mt-24">
                <Timer initialTime={initialTime} submitQuiz={submitQuiz} setTimeTaken={setTimeTaken} submitted={showAnswers} />
            </div>
            <div className="w-full flex justify-center mt-6">
                <div className="w-3/4 bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div className="bg-blue-600 h-3 rounded-full" style={
                        {
                            width: `${progress}%`
                        }
                    }></div>
                </div>
            </div>
            {showAnswers && (<div className="mt-12 px-4 py-2 w-full flex justify-center bg-green-400 border-2 border-green-800 text-green-800">
                Result: {score}%
            </div>)}

            <div className="w-full flex justify-center">
                {questions.map((question, index) => (
                    <Card key={index} className="mx-4 my-4 w-4/5">
                        <Card.Header className="bg-white text-black px-2 py-4 rounded-lg mb-2">{index + 1}. {question.question}</Card.Header>
                        <Card.Body>
                            <ol type="A">
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex} onClick={() => handleSelection(index, optionIndex)} className={`${selectedOptions[index] === optionIndex && !showAnswers ? "bg-yellow-800" : ""} ${showAnswers && option.isCorrect ? selectedOptions[index] === optionIndex ? "bg-green-800" : "bg-red-600" : ""} mt-4 mb-4 border border-white hover:border-black rounded-lg px-4 py-2 w-full hover:bg-white hover:text-black`}><span className="border-2 rounded-full px-1 py-1 text-sm ms-2 me-2">{options[optionIndex]}</span>{option.option}</li>
                                ))}
                            </ol>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center w-full">
                <button onClick={submitQuiz} className="w-1/5 bg-green-800 text-white py-2 rounded-lg mt-4 me-4 hover:bg-green-600">Submit</button>
                <button onClick={()=>router.push('/auth')}  className="w-1/5 bg-red-400 border border-red-900 text-white py-2 rounded-lg mt-4 hover:bg-red-600">Give Up</button>
                {showAnswers && (<button onClick={()=>router.push('/auth')}  className="w-1/5 bg-blue-400 border border-blue-900 text-white py-2 rounded-lg mt-4 hover:bg-blue-600">Browse Questions</button>)}
            </div>
        </>
    );
}

export default Questions;