import React from "react";
import axios from "axios";
import "./index.css"
import Home from "./Home";
import Blogs from "./Blogs"
import GetBlogs from "./GetBlogs";
import Navigation from "./Navigation";
// import CreateBlog from "./CreateBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class App extends React.Component {
    render() {
        return (
        <div>
            <Router>
            <Navigation />
            <Switch>
                <Route path="/blog/:slug" exact component={ GetBlogs } />
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
