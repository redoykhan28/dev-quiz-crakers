import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const exmInfo = useLoaderData().data
    const details = useLoaderData().data.questions


    const { name, total } = exmInfo

    //for correct value count
    const [correct, setCorrect] = useState(0)

    const CorrectCount = () => {

        setCorrect(correct + 1)
    }

    //for incorrect value count

    const [incorrect, setIncorrect] = useState(0)

    const incorrectCount = () => {

        setIncorrect(incorrect + 1)
    }


    return (
        <div className='container text-center my-5'>
            <h3>Exam Name: {name}</h3>
            <h5>Total Question: {total}</h5>
            <div className='d-flex justify-content-around'>
                <h6>Total Correct: <span className='text-success fw-bold'>{correct}</span></h6>
                <h6>Total Incorrect: <span className='text-danger fw-bold'>{incorrect}</span></h6>

            </div>
            <div>
                <ol>
                    {
                        details.map(question => <Question key={details.id} questionQuiz={question} correct={CorrectCount} incorrect={incorrectCount}></Question>)
                    }
                </ol>
            </div>
        </div>
    );
};

export default QuizDetails;