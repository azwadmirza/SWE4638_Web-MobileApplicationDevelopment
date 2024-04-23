"use client";

import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Pagination from "../../components/pagination";
import usePagination from "../../hooks/usePagination";
import { getQuiz, getResults } from "../../lib/requests";
import Link from "next/link";

const Quiz = () => {
    const [quizes, setQuizes] = useState([]);
    const [results, setResults] = useState(new Map());
    const { currentPage, totalPages, getCurrentItems, handlePageChange } = usePagination(8, quizes);
    useEffect(() => {
        getQuiz((currentPage+1)*8).then((data) => {
            data.json().then((data) => setQuizes(data.quiz));
        });
        getResults(localStorage.getItem('email'),(currentPage+1)*8).then((data) => {
            data.json().then((data) => {
                const resultsMap = new Map();
                data.results.forEach((result) => {
                    resultsMap.set(result.quizId, result);
                    setResults(resultsMap);
                })
            });
        });
    }, [currentPage])
    
    
    const quize = getCurrentItems();

    const timeTaken=(initialTime,takenTime)=>{
        const initialTimeInSeconds=initialTime.hours*60*60+initialTime.minutes*60+initialTime.seconds;
        const takenTimeInSeconds=takenTime.hours*60*60+takenTime.minutes*60+takenTime.seconds;
        const timeTaken=initialTimeInSeconds-takenTimeInSeconds;
        const hours=Math.floor(timeTaken/3600);
        const minutes=Math.floor((timeTaken%3600)/60);
        const seconds=timeTaken%60;
        const timeString=`${hours>9?hours:'0'+hours}:${minutes>9?minutes:'0'+minutes}:${seconds>9?seconds:'0'+seconds}`;
        return timeString;
    }

    return (
        <div className="w-full">
            <ul className="w-full">
                {quize && quize.map((quiz, index) => (
                    
                        <Card key={index} className="w-11/12 bg-white text-black  mx-auto mt-4 mb-6 border rounded-lg">
                            
                            <Card.Header className="w-full rounded-lg px-2 py-4 text-xl bg-indigo-900 text-white"><span className="border-2 border-white rounded-full px-4 py-2">{index + 1}</span> {quiz.title}</Card.Header>
                            <Card.Body>
                                {results.get(quiz._id)  && localStorage.getItem('username')!==quiz.author &&  (<Card.Text className="w-full rounded-lg bg-green-600 flex text-white justify-between">
                                    <div className="float-left ms-4">
                                        Result: {results.get(quiz._id).results}%
                                    </div>
                                    <div className="float-right me-4">
                                        Time Taken: {timeTaken(quiz.time,results.get(quiz._id).time)}
                                    </div>
                                </Card.Text>)}
                                {!results.get(quiz._id) && localStorage.getItem('username')!==quiz.author && (<Card.Text className="w-full rounded-lg bg-red-600 text-white text-center">
                                    Not Attempted
                                </Card.Text>)}
                            </Card.Body>
                            <Card.Footer className="w-full rounded-lg bg-white text-black flex justify-between">
                                <div className="float-left px-4 py-2 mt-2">
                                Author: <span className="font-bold">{quiz.author}</span>
                                </div>
                                <div className="float-right me-4 mt-2 mb-2">
                                 {quiz.author===localStorage.getItem('username') && (<Link href={`/auth/edit/${quiz._id}`} className="bg-blue-800 px-4 py-2 rounded-lg text-white hover:bg-blue-400 me-4" >Edit</Link>)}
                                 { (<Link href={`/auth/${quiz._id}`} className="bg-green-800 px-4 py-2 rounded-lg text-white hover:bg-green-400" >Give Quiz</Link>)}
                                </div>
                            </Card.Footer>
                        </Card>
                ))}
            </ul>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}></Pagination>
        </div>
    );
}

export default Quiz;