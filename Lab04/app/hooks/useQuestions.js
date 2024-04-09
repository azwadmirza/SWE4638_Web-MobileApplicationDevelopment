"use client";

import { useState } from "react";

export const useQuestions = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [options, setOptions] = useState([]);
    const [option, setOption] = useState("");
    const [error, setError] = useState("");
    const [questions, setQuestions] = useState([]);

    const addQuestion = () => {
        setError("");
        if (question === "" || options.length === 0 || answer === "") {
            setError("Must Give Question, Answer and Options");
            return;
        }
        setQuestions([...questions, { question, options, answer }]);
        setQuestion("");
        setOptions([]);
        setAnswer("");
    }

    return { error,question, setQuestion, answer, setAnswer, options, setOptions, questions, addQuestion,option, setOption };
}