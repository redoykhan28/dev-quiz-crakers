import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    // console.log(quiz)
    const { id, logo, name, total } = quiz

    const navigate = useNavigate();

    const btnHandler = () => {

        navigate(`/quiz/${id}`)
    }

    return (

        <div className="card  my-5 bg-dark p-3" style={{ width: '19rem' }}>
            <img src={logo} className="img-fluid mx-auto" alt="img" />
            <div className="card-body">
                <h5 className="card-title text-white my-2">{name}</h5>
                <h6 className='mb-4 text-white'>Total questions: {total}</h6>
                <button onClick={btnHandler} className="btn btHead">Start Exam</button>
            </div>
        </div>

    );
};

export default Quiz;