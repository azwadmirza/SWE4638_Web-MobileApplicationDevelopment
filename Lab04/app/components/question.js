"use client";

import { useState } from "react";
import { useQuestions } from "../hooks/useQuestions";
import { useTime } from "../hooks/useTime";

const Question = () => {
    const [title, setTitle] = useState("");
    const [success,setSuccess]=useState("");
    const { error,question, setQuestion, answer, setAnswer, options, setOptions, questions, addQuestion,option, setOption } = useQuestions();
    const {hours,setHours,minutes,setMinutes,seconds,setSeconds}=useTime();

    const addQuiz = (e) => {
        e.preventDefault();
        let quizes = JSON.parse(localStorage.getItem("quiz"));
        if (!quizes) {
            quizes = [];
        }
        quizes.push({ title, questions,time:{
            hours,
            minutes,
            seconds
        } });
        localStorage.setItem("quiz", JSON.stringify(quizes));
        setSuccess("Quiz Added Successfully");
    }

    return (
            <div className="flex w-full mb-20 ms-6">
                <div className="block w-1/2">
                        <h1 className="mt-6 text-4xl font-bold">Create Quiz</h1>
                        <label className="block mt-4 text-lg font-bold">Quiz Title</label>
                        <input className="w-full p-2 border border-gray-300 rounded text-black font-bold" type="text" placeholder="Enter Quiz Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    {error !== "" && (<div className="bg-red-200 border-red-900 text-white font-bold p-2 rounded mt-2 mb-2">{error}</div>)}
                        <div className="block mt-4 text-lg font-bold">Time For Quiz</div>
                        <div className="flex gap-2">
                        <label className="block mt-4 text-lg font-bold mb-2">HH</label>
                        <input className="w-1/4 p-2 border border-gray-300 rounded text-black font-bold" type="number" placeholder="HH" value={hours} onChange={(e)=>setHours(e.target.value>=0?Number(e.target.value):0)}/>
                        <label className="block mt-4 text-lg font-bold">MM</label>
                        <input className="w-1/4 p-2 border border-gray-300 rounded text-black font-bold" type="number" placeholder="MM"  value={minutes} onChange={(e)=>setMinutes(e.target.value>=0?Number(e.target.value):0)}/>
                        <label className="block mt-4 text-lg font-bold">SS</label>
                        <input className="w-1/4 p-2 border border-gray-300 rounded text-black font-bold" type="number" placeholder="SS"  value={seconds} onChange={(e)=>setSeconds(e.target.value>=0?Number(e.target.value):0)}/>
                        </div>
                        <label className="block mt-4 text-lg font-bold">Question</label>
                        <input className="w-full p-2 border border-gray-300 rounded text-black font-bold" type="text" placeholder="Enter Question" value={question} onChange={(e) => setQuestion(e.target.value)} />

                        <div className="mt-6 ms-6">
                            <label>Option: </label>
                            <input className="w-full block mt-4 text-lg font-bold text-black" value={option} onChange={(e) => setOption(e.target.value)} />
                            <button className="mt-6 bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" onClick={() => {
                                setOptions([...options, option]);
                                setOption("");
                            }}>+ Add Option</button>
                        </div>
                        <div>
                            <p className="block mt-4 text-lg font-bold">Answer</p>
                            {options.map((option, index) => (
                                <div key={index}>
                                    <input type="radio" id={index} name="answer" value={option} onChange={(e) => setAnswer(e.target.value)} />
                                    <label htmlFor={index}>{option}</label>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addQuestion}>Add Question</button>
                        </div>
                </div>
                <div className="ms-6 block w-1/2">

                    <div>
                        <h1 className="mt-6 text-4xl font-bold">Questions</h1>
                        {success!=="" && (<div className="bg-green-500 border-green-900 text-white font-bold p-2 rounded mt-2 mb-2">{success}</div>)}
                        {title!=="" && (<h1 className="text-2xl font-bold underline">{title}</h1>)}
                        <h1 className="text-xl font-bold mb-2">Time: {hours>9?hours:`${0}${hours}`}:{minutes>9?minutes:`${0}${minutes}`}:{seconds>9?seconds:`${0}${seconds}`}</h1>
                        {questions.length > 0 && (
                            <div className="mt-2 mb-2">
                                {questions.map((question, index) => (
                                    <div key={index}>
                                        <h1 className="text-xl font-bold mb-2">{index+1}. {question.question}</h1>
                                        <ol>
                                            {question.options.map((option, index) => (
                                                <li key={index} className="ms-2">{String.fromCharCode(65+index)}{")"} {option}</li>
                                            ))}
                                        </ol>
                                        <h2 className="text-lg font-bold bg-green-500 border-green-900 w-100 rounded px-4 text-white">Answer: {question.answer}</h2>
                                    </div>
                                ))}

                            </div>)}
                        {questions.length > 0 && (<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addQuiz}>Add Quiz</button>)}
                    </div>
                </div>
            </div>
    );
}

export default Question;