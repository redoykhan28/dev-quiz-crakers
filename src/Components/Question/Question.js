import React from 'react';
import './Question.css'

const Question = ({ questionQuiz }) => {
    const { id, question, options, correctAnswer } = questionQuiz;
    return (

        <div className='question my-5'>
            <h4 className='mb-4'>{question}</h4>

            <div className="form-check w-50 mx-auto box text-center fw-bold" >
                {options[0]}
            </div>
            <div className="form-check w-50 mx-auto box text-center fw-bold" >
                {options[1]}
            </div>
            <div className="form-check w-50 mx-auto box text-center fw-bold" >
                {options[2]}
            </div>
            <div className="form-check w-50 mx-auto box text-center fw-bold" >
                {options[3]}
            </div>

        </div>
    );
};

export default Question;