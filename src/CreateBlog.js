import React from "react";

function CreateBlog(props) {
    return (
        <main className="container px-4 px-lg-5">
            <div className="row justify-content-center align-items-center">
            <div className="col-md-10 col-lg-8 col-xl-7 mx-3">
            <h1 className="display-1">Create Blog</h1>
                <br /><br />
                <div className="blogpost">
                    {/* <input type="text"></input> */}
                    <p >CreateBlogs is still being developed<i className="mx-2 fas fa-tools"></i><i className="mx-2 fas fa-code"></i></p>
                    <p className="bold">Thanks for visiting my webite :)</p>
                </div>
            </div>
            </div>
        </main>
    );
}

export default CreateBlog;
