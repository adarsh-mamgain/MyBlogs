import React, { Component } from "react";
import axios from "axios";

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
        <p>{item.content}</p>
        <p>{item.author}</p>
        <small>{item.date}</small>
      </div>
    ));
  };

  render() {
    return (
      <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderBlogs()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
