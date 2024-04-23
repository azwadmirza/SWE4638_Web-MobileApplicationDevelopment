"use client";
import { Card } from "react-bootstrap";
import AddQuestion from './addQuestion';
import AddOption from './addOption';
import { useEditQuestion } from "../hooks/useEditQuestion";
import Loading from "../../../../loading";
import { useParams } from "next/navigation";

const Question = () => {
    const {id}=useParams();
    const {loading,show, setShow, showOption, setShowOption, questions, setQuestions, question, setQuestion, option, setOption, title, setTitle, hours, setHours, minutes, setMinutes, seconds, setSeconds, error, setError, addQuestion, removeQuestion, addOption, removeOption, handleQuestionChange, handleOptionChange, addCorrectOption, options, saveQuiz, discardQuiz}=useEditQuestion(id);
    if(loading){
        return Loading();
    }
    return (
        <div className="w-full mt-24">
            {error!=='' && <div className="w-full text-white bg-red-800 text-center py-2">{error}</div>}
            <AddQuestion show={show} setShow={setShow} question={question} setQuestion={setQuestion} addQuestion={addQuestion} />
            <div className="w-full text-black flex justify-center mb-4">
                <button onClick={() => saveQuiz()} className="bg-green-800 text-white py-2 px-4 rounded-lg mt-4 me-4 hover:bg-green-600">Update Quiz</button>
                <button onClick={() => discardQuiz()} className="bg-red-800 text-white py-2 px-4 rounded-lg mt-4 me-4 hover:bg-red-600">Discard Changes</button>
            </div>
            <div className="w-full text-black flex justify-center">
                <label className="me-32 text-white">Title</label>
                <input className="w-3/5" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="w-full text-black flex justify-center mt-4">
                <label className="me-24 text-white">Time Taken</label>
                <input type="number" className="w-1/5 me-2" value={hours} onChange={(e) => setHours(e.target.value)} />
                <input type="number" className="w-1/5 me-2" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
                <input type="number" className="w-1/5 me-2" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
            </div>
            <div className="w-full text-black flex justify-center mt-4">
                <button onClick={() => setShow(true)} className="bg-green-800 text-white py-2 px-4 rounded-lg mt-4 me-4 hover:bg-green-600">Add Question</button>
            </div>
            <div className="w-11/12 mx-4">
                {questions.map((question, index) => (
                    <Card key={index} className="mx-4 my-4 w-full">
                        <Card.Header className="bg-indigo-800 text-white px-2 py-4 rounded-lg mb-2">
                            <div className="flex justify-between w-full">
                                <div className="float-left py-6">
                                    <span className="px-4 py-2 rounded-full border border-white me-4">{index + 1}</span> <input className="text-white bg-indigo-800" type="text" value={question.question} onChange={(e) => handleQuestionChange(index, e.target.value)} />
                                </div>
                                <div className="float-right">
                                    <button onClick={() => removeQuestion(index)} className="bg-red-800 text-white py-2 px-4 rounded-lg mt-4 me-4 hover:bg-red-600">Remove</button>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                                {question.options && question.options.map((option, optionIndex) => (
                                    <div key={optionIndex}  onClick={(e) => addCorrectOption(index, optionIndex)} className={` ${option.isCorrect ? "bg-green-800" : "bg-transparent"} mt-4 mb-4 border border-white hover:border-black rounded-lg px-4 py-2 w-full hover:bg-white hover:text-black flex justify-between w-full`}>
                                        <div className="float-left py-4">
                                            <span className="border-2 rounded-full px-1 py-1 text-sm ms-2 me-2">{options[optionIndex]}</span><input className="text-white bg-transparent hover:text-black" type="text" value={option.option} onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)} />
                                        </div>
                                        <div className="float-right">
                                            <button onClick={() => removeOption(index,optionIndex)} className="bg-red-800 text-white py-1 px-4 rounded-lg mt-4 me-4 hover:bg-red-600 z-50">Remove</button>
                                        </div>
                                    </div>
                                ))}

                            <div className="flex w-full justify-center">
                                <AddOption show={showOption} setShow={setShowOption} option={option} setOption={setOption} addOption={addOption} questionIndex={index} />
                                <button onClick={() => setShowOption(true)} className="bg-green-800 text-white py-2 px-4 rounded-lg mt-4 me-4 hover:bg-green-600">Add Option</button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Question;