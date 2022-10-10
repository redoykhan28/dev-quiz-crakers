import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    // console.log(quiz)
    const { id, logo, name, total } = quiz

    const navigate = useNavigate();

    const btnHandler = () => {

        navigate(`/quiz/${id}`)
    }

    return (

        <div className="card my-5" style={{ width: '22rem' }}>
            <img src={logo} className="card-img-top img-fluid" alt="img" />
            <div className="card-body">
                <h5 className="card-title my-2">{name}</h5>
                <h6 className='mb-4'>Total questions: {total}</h6>
                <button onClick={btnHandler} className="btn btHead">Start Exam</button>
            </div>
        </div>

    );
};

export default Quiz;