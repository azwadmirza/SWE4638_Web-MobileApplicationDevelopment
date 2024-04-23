"use client";
import { useEffect, useState } from "react";
import { getQuizById, postResults } from "../../../lib/requests";
import { useRouter } from "next/navigation";

export const useQuestion = (id) => {
    const email=localStorage.getItem('email');
    const [questions, setQuestions] = useState([]);
    const [initialTime, setInitialTime] = useState(null);
    const [progress, setProgress] = useState(0);

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    const [timeTaken, setTimeTaken] = useState(null);
    const router=useRouter();

    useEffect(() => {
        getQuizById(id).then((data) => {
            data.json().then((data) => {
                setQuestions(data.quiz.questions);
                setInitialTime(data.quiz.time);
                const newSelectedOptions = [];
                data.quiz.questions.forEach((question, index) => {
                    newSelectedOptions[index] = null;
                });
                setSelectedOptions(newSelectedOptions);
            })
        })
    }, [])

    const handleSelection = (questionIndex, optionIndex) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(newSelectedOptions);
        console.log(newSelectedOptions)
    }

    const submitQuiz = () => {
        console.log("submitted");
        let score = 0;
        selectedOptions.forEach((option, index) => {
            if (option !== null) {
                if (questions[index].options[option].isCorrect) {
                    score += 1;
                }
            }
        })
        setScore(score / questions.length * 100);
        setShowAnswers(true);
        postResults({
            email:email,
            results:score / questions.length * 100,
            id,
            time:timeTaken
        })

    }

    const handleTimeTaken = (time) => {
        setTimeTaken(time);
        console.log("Time Taken", time);
        const { hours, minutes, seconds } = time;
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        const totalTime = initialTime.hours * 3600 + initialTime.minutes * 60 + initialTime.seconds;
        const newProgress = ((totalTime - totalSeconds) / totalTime) * 100;
        console.log(newProgress);
        setProgress(newProgress);
    }



    const options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return { questions, initialTime, progress, selectedOptions, handleSelection, submitQuiz, setTimeTaken:handleTimeTaken, options, showAnswers, score }
}