import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const exmInfo = useLoaderData().data
    const details = useLoaderData().data.questions
    console.log(details)

    const { name, total } = exmInfo

    return (
        <div className='container text-center my-5'>
            <h3>Exam Name: {name}</h3>
            <h5>Total Question:{total}</h5>
            <div className='question'>
                <ol>
                    {
                        details.map(question => <Question key={details.id} questionQuiz={question}></Question>)
                    }
                </ol>
            </div>
        </div>
    );
};

export default QuizDetails;