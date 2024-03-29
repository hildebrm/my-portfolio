import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../documents/resume.pdf';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1><Link to="/">Home</Link></h1>
            <div className="Links">
                <Link to="/projects">Projects</Link>
                <Link to="https://app.joinhandshake.com/stu/users/34598327" target="_blank" rel="noopener noreferrer">Handshake</Link>
                <a href={resume}>Resume</a>
            </div>
        </nav>
    );
};

export default Navbar;
