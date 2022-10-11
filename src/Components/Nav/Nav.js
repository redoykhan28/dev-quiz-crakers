import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo1.png'
import './Nav.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-color p-2">
            <div className="container d-flex  justify-content-between align-items-center">
                <div className='title'>
                    <h3>Quizi</h3>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-lg-4">
                                <NavLink className={({ isActive }) => isActive ? 'bold text-light' : undefined} to={'/home'}>Home</NavLink>
                            </li>
                            <li className="nav-item me-lg-4">
                                <NavLink className={({ isActive }) => isActive ? 'bold text-light' : undefined} to={'/topics'}>Topics</NavLink>
                            </li>
                            <li className="nav-item me-lg-4">
                                <NavLink className={({ isActive }) => isActive ? 'bold text-light' : undefined} to={'/statistics'}>Statistics</NavLink>
                            </li>
                            <li className="nav-item me-lg-4">
                                <NavLink className={({ isActive }) => isActive ? 'bold text-light' : undefined} to={'/blog'}>Blogs</NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;