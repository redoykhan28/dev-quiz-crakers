import React from 'react';
import image from '../../images/head.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 headTitle">
                    <h1>PRACTICE MORE AND</h1>
                    <h1>BECOME <span style={{ color: '#465DFF' }}>PRO...</span></h1>
                    <p className='text-muted my-3'>Quizi is an online based quiz website where you can give an exam on your favourite subject. it will provide you multiple choice question according to your favourite subjects..</p>
                    <a href='#test' className='btn btHead'>Let's Start</a>
                </div>

                <div className="col-lg-6">
                    <img className='img-fluid imgHead' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;