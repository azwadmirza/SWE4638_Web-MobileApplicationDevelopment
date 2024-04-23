import { useRouter } from 'next/navigation'
import { postQuiz } from "../../../lib/requests";
import { useState } from 'react';

export const useCreateQuestion=()=>{
    const router=useRouter();
    const [show, setShow] = useState(false);
    const [showOption, setShowOption] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState('');
    const [option, setOption] = useState('');
    const [title, setTitle] = useState('');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [error, setError] = useState('');

    const addQuestion = (question) => {
        const newQuestions = [...questions];
        newQuestions.push({
            question: question,
            options: []
        });
        setQuestions(newQuestions);
        setShow(false);
        setQuestion('');
    }

    const removeQuestion = (index) => {
        const newQuestions = [...questions];
        const updatedQuestions=newQuestions.filter((question, questionIndex) => questionIndex !== index);
        setQuestions(updatedQuestions);
    }

    const addOption = (index, option) => {
        const newQuestions = [...questions];
        newQuestions[index].options.push({
            option: option,
            isCorrect: false
        });
        setQuestions(newQuestions);
        setShowOption(false);
        setOption('');
    }

    const removeOption = (questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        const options=newQuestions[questionIndex].options.filter((option, index) => index !== optionIndex);
        newQuestions[questionIndex].options=options;
        setQuestions(newQuestions);
    }

    const handleQuestionChange = (index, question) => {
        const newQuestions = [...questions];
        newQuestions[index].question = question;
        setQuestions(newQuestions);
    }

    const handleOptionChange = (questionIndex, optionIndex, option) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[optionIndex].option = option;
        setQuestions(newQuestions);
    }

    const addCorrectOption = (questionIndex, optionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options.forEach((option, optionIndex) => {
            option.isCorrect = false;
        });
        if(newQuestions[questionIndex].options[optionIndex]){
            newQuestions[questionIndex].options[optionIndex].isCorrect = true;
        }
        setQuestions(newQuestions);
    }


    const options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const saveQuiz = async() => {
        console.log({
            title,
            hours,
            minutes,
            seconds,
            questions
        });
        setError('');
        if(questions.length===0){
            setError('Please add atleast one question');
            return;
        }
        questions.forEach((question, index) => {
            if(question.options.length===0){
                setError(`Please add atleast one option for question ${index+1}`);
                return true;
            }
            question.options.forEach((option, optionIndex) => {
                if(option.option===''){
                    setError(`Please add option for question ${index+1} option ${options[optionIndex]}`);
                    return true;
                }
            })
            
        });
        if(error!==''){
            return;
        }
        
        if(title===''){
            setError('Please add title for the quiz');
            return;
        }
        if(hours===null || hours===undefined){
            setHours(0);
        }
        if(minutes===null || minutes===undefined){
            setMinutes(0);
        }
        if(seconds===null || seconds===undefined){
            setSeconds(0);
        }
        if(hours<0 || minutes<0 || seconds<0){
            setError('Please add valid time');
            return;
        }
        if(hours==0 && minutes==0 && seconds==0){
            setError('Please add valid time');
            return;
        }
        
        await postQuiz({title,author:localStorage.getItem("username"),time:{hours,minutes,seconds},questions})
        router.push('/auth');
    }

    const discardQuiz=()=>{
        setTitle('');
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setQuestions([]);
        router.push('/auth');

    }

    return {
        show,
        setShow,
        showOption,
        setShowOption,
        questions,
        setQuestions,
        question,
        setQuestion,
        option,
        setOption,
        title,
        setTitle,
        hours,
        setHours,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        error,
        setError,
        addQuestion,
        removeQuestion,
        addOption,
        removeOption,
        handleQuestionChange,
        handleOptionChange,
        addCorrectOption,
        options,
        saveQuiz,
        discardQuiz
    }
}