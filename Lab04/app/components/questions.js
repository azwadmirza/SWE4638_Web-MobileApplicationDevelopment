"use client";

import Link from "next/link";

const QuizQuestions = () => {
    const quizes=JSON.parse(localStorage.getItem("quiz"));
    const results=JSON.parse(localStorage.getItem("results"));
    return ( 
        <div>
            {quizes.length>0 && quizes.map((quiz,index)=>(
                <div key={index} className="mt-2 mb-2 border rounded py-2 px-2 flex">
                    <Link href={`/take/${index}`}><h1 className="text-xl font-bold">{quiz.title} 
                    <div className="ms-20 float-right flex">Results: 
                    {results && results[index]?(
                    <div className="gap-6 flex">
                    <div className="text-white border-green-900 bg-green-500 px-2 rounded">{results[index].score}/{quiz.questions.length}</div>
                    Time Taken: <div className="text-white border-green-900 bg-green-500 px-2 rounded">{results[index].timeTaken.hours}:{results[index].timeTaken.minutes}:{results[index].timeTaken.seconds}</div>
                    </div>
                    ):(
                    <div className="text-white border-red-900 bg-red-500 rounded px-2">Not Given</div>)}</div>
                    </h1>
                    </Link>
                </div>
                ))}

        </div>
     );
}
 
export default QuizQuestions;