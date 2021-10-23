import React, { Component } from "react";
import axios from "axios";
import "./index.css"
import renderHTML from 'react-render-html';
import Home from "./Home";
import Blogs from "./Blogs"
import Navigation from "./Navigation";
// import CreateBlog from "./CreateBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogList: [],
        };
    }
  
    async componentDidMount() {
        await axios.get(`/api/blog/?format=json`)
        .then((result) => {
            const blogList = result.data;
            this.setState({ blogList });
        });
    };

    renderBlogs = () => {
        const newBlogs = this.state.blogList;
        return newBlogs.map((item) => (
            <div>
                <Blogs title={item.title} content={renderHTML(item.content)} author={item.author} date={item.date} />
            </div>
        ));
    };
    render() {
        return (
        <div>
            <Router>
            <Navigation />
            <Switch>
            <Route path="/blog" exact component={ Blogs }  />
            {/* <Route path="/create-blog" exact component={ CreateBlog } /> */}
            <Route path="" exact component={ Home } />
            </Switch>
            </Router>
        </div>
        );
    }
}

export default App;
