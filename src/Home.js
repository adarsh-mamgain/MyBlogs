import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
    return(
        <main className="container px-4 px-lg-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-5">
                    <h1 className="display-1 my-4">A painting of my life.</h1>
                    <Link to="/blog" type="button" className="btn btn-lg btn-outline-dark my-4 py-3 rounded-pill"><span className="display-5 p-4">Peek My Diary</span></Link>
                </div>
                <div className="col-6">
                    <img src="/static/IMG_3717.jpg" alt="adarsh mamgain" height="700px" />
                </div>
            </div>
        </main>
    );
}

export default Home;