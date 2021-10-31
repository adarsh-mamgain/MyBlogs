import React from 'react';
import axios from "axios";
import marked from 'marked';
import DOMPurify from 'dompurify';

class GetBlogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog_json: [],
        };
    }

    async componentDidMount() {
        await axios.get(`/api/blog/${this.props.match.params.slug}/?format=json`)
        .then((result) => {
            this.setState({ blog_json: result.data })
        })
        .catch(error => {
            console.log(error)
        })
    };

    render() {
        const blog = this.state.blog_json;
        return (
            <main className="container px-4 px-lg-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-7">
                        <h1 className="display-1 my-4">{blog.title}</h1>
                        <p dangerouslySetInnerHTML={{__html: marked(DOMPurify.sanitize(blog.content))}}></p>
                        <p className="text-muted">{blog.author}</p>
                        <p className="text-muted">{blog.date} {blog.time}</p>
                        <hr />
                    </div>
                </div>
            </main>
        )
    };
}

export default GetBlogs;
