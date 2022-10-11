import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const quizes = useLoaderData().data;

    return (
        <div className='container'>
            <section className='my-5 '>
                <h3 className='text-center'>Give a Test</h3>
                <h6 className='text-center'>Total Test: {quizes.length}</h6>
                <div className='card-container'>
                    {
                        quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Topics;