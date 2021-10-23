import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-2 m-2">
        <div className="container-fluid">
            <Link to="">
                <img className="navbar-brand" src="/static/brand-logo.svg" alt="brand-logo" />
            </Link>
            <div className="d-flex">
                <form className="me-auto px-4">
                    <input className="form-control me-2 border-0" type="search" placeholder="Search..." aria-label="Search" style={{border: 0}} />
                </form>
                <button className="navbar-toggler px-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll px-4">{/* style={{marginRight: spacing + 'em'}}*/}
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/create-blog">Create Blog</Link>
                        </li> */}
                    </ul>
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll px-4">
                        <li className="nav-item m-auto px-3">
                            <a className="text-dark" href="https://www.instagram.com/_adarsh_mamgain_/"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li className="nav-item m-auto px-3">
                            <a className="text-dark" href="https://www.linkedin.com/in/adarsh-mamgain/"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li className="nav-item m-auto px-3">
                            <a className="text-dark" href="https://twitter.com/Adarsh_Mamgain"><i className="fab fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default withRouter(Navigation);