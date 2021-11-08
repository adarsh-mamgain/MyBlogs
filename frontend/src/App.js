import React from "react";
import Home from "./Home";
import Blogs from "./Blogs"
import GetBlogs from "./GetBlogs";
import Navigation from "./Navigation";
import CreateBlog from "./CreateBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
        <div>
            <Router>

                <Navigation />
                <Switch>
                    <Route path="/blog/:slug" exact component={ GetBlogs } />
                    <Route path="/blog" exact component={ Blogs }  />
                    <Route path="/create-blog" exact component={ CreateBlog } />
                    <Route path="" exact component={ Home } />
                </Switch>
            </Router>
        </div>
        );
    }
}
