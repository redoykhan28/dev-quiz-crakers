import React from 'react';

const Option = ({ option, btnHandler, questionQuiz }) => {
    // console.log(option)
    const { correctAnswer } = questionQuiz;
    return (
        <div>
            <div onClick={(e) => btnHandler(e.target.innerText)} className={`form-check w-50 mx-auto box text-start text-md-center fw-bold`}>

                {option}

            </div>


        </div>
    );
};

export default Option;