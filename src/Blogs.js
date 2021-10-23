import React from 'react';

function Blogs(props) {
  return (
    <main className="container px-4 px-lg-5">
        <div className="row justify-content-center align-items-center">
            <div className="col">
                <h1 className="display-1 my-4">My Blogs</h1>
                <p >Blogs is still being developed<i className="mx-2 fas fa-tools"></i><i className="mx-2 fas fa-code"></i></p>
                <p className="bold">Thanks for visiting my webite :)</p>
            </div>
        </div>
        { props.value }
    </main>
  )
}

export default Blogs;