import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const quizes = useLoaderData().data;

    return (
        <div className='container'>
            <section className='my-5 '>
                <h3 id='test'>Give a Test</h3>
                <h6>Total Test:{quizes.length}</h6>
                <div className='card-container'>
                    {
                        quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Topics;