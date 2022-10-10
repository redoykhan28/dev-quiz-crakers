import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizDetails.css'

const QuizDetails = () => {
    const exmInfo = useLoaderData().data
    const details = useLoaderData().data.questions[0]

    const { name, total } = exmInfo

    return (
        <div className='container text-center my-5'>
            <h3>Exam Name: {name}</h3>
            <h5>Total Question:{total}</h5>
            <div className='question my-5'>

            </div>
        </div>
    );
};

export default QuizDetails;