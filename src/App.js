import React, { Component } from "react";
import axios from "axios";
import "./index.css"
import renderHTML from 'react-render-html';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogList: [],
    };
  }

  async componentDidMount() {
    await axios
      .get(`/api/blog/?format=json`)
      .then((result) => {
        const blogList = result.data;
        this.setState({ blogList });
      });
  }
  renderBlogs = () => {
    const newBlogs = this.state.blogList;
    return newBlogs.map((item) => (
      <div>
        <h1>{item.title}</h1>
        <p className="text-truncate">{renderHTML(item.content)}</p>
        <p className="text-muted">{item.author}</p>
        <small className="text-muted">{item.date}</small>
        <hr />
      </div>
    ));
  };

  render() {
    return (
      <main className="container px-4 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7 mx-3">
          <h1 className="display-1">My Blogs</h1>
            <br /><br />
            <div className="blogpost">
              {this.renderBlogs()}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
