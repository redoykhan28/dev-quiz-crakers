import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import './Home.css'


const Home = () => {
    const quizes = useLoaderData().data;
    // console.log(quizes)
    return (
        <div className='container'>
            <section className='my-5'>
                <Header></Header>
            </section>

            <section className='my-5 '>
                <h3 id='test'>Give a Test</h3>
                <h6>Total Test: {quizes.length}</h6>
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

export default Home;