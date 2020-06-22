import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">MOVIE INFO</a>
                </div>                
                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li id="image-imdb" className="nav-item d-inline-block mr-4">
                        <i className="fab fa-imdb fa-4x"/>
                    </li>
                    <li id="image-react" className="nav-item d-inline-block mr-4">
                        <i className="fab fa-react fa-4x" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;