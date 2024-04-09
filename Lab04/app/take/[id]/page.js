import QuestionAnswer from "@/app/components/question-answer";

const QuizPage = ({ params }) => {
    const { id } = params;
    return (
        <div>
            <QuestionAnswer id={id}/>
        </div>
    );
}

export default QuizPage;