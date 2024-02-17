import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../documents/resume.pdf';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1><Link to="/">Maxwell Hildebrand</Link></h1>
            <div className="Links">
                <Link to="https://github.com/hildebrm" target="_blank" rel="noopener noreferrer">Github</Link>
                <Link to="https://www.linkedin.com/in/maxwell-hildebrand-b9276328b/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                <a href={resume}>Resume</a>
            </div>
        </nav>
    );
};

export default Navbar;
