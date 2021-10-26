import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

class Blogs extends React.Component {
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
            <div className="row justify-content-center align-items-center">
                <div className="col-7">
                    <Link className="link-dark" aria-current="page" to={`/blog/${item.slug}`}><h1 className="display-1 my-4">{item.title}</h1></Link>
                    <p className="text-truncate">{renderHTML(item.content)}</p>
                    <p className="text-muted">{item.author}</p>
                    <p className="text-muted">{item.date}</p>
                    <hr />
                </div>
            </div>
        ));
    };
    render() {
        return (
            <main className="container px-4 px-lg-5">
                { this.renderBlogs() }
            </main>
        )
    };
}

export default Blogs;
