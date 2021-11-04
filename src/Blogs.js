import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import marked from 'marked';
import DOMPurify from 'dompurify';

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
            this.setState({ blogList: result.data });
        })
        .catch(error => {
            console.log(error)
        })
    };

    renderBlogs = () => {
        const newBlogs = this.state.blogList;
        return newBlogs.map((item) => (
            <div key={item.slug} className="col-7">
                <Link className="link-dark text-decoration-none" aria-current="page" to={`/blog/${item.slug}`}><h1 className="display-1 my-4">{item.title}</h1></Link>
                <p className="text-truncate" dangerouslySetInnerHTML={{__html: marked(DOMPurify.sanitize(item.markdown))}}></p>
                <p className="text-muted">{item.author}</p>
                <p className="text-muted">{item.date} {item.time}</p>
                <hr />
            </div>
        ));
    };

    render() {
        return (
            <main className="container px-4 px-lg-5">
                <div className="row justify-content-center align-items-center">
                    { this.renderBlogs() }
                </div>
            </main>
        )
    };
}

export default Blogs;
