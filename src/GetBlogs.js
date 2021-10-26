import React from 'react';
import axios from "axios";
import renderHTML from 'react-render-html';

class GetBlogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogList: {},
        };
    }

    async componentDidMount() {
        await axios.get(`/api/blog/${this.props.match.params.slug}/`)
        .then((result) => {
            const blogList = result.data;
            this.setState({ blogList });
            console.log(blogList);
        });
    };

    renderBlog = () => {
        const blog = this.state.blogList;
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-7">
                    <h1 className="display-1 my-4">{blog.title}</h1>
                    {/* <p>{renderHTML(blog.content)}</p> */}
                    <p className="text-muted">{blog.author}</p>
                    <p className="text-muted">{blog.date}</p>
                    <hr />
                </div>
            </div>
        );
    };
    render() {
        return (
            <main className="container px-4 px-lg-5">
                { this.renderBlog() }
            </main>
        )
    };
}

export default GetBlogs;
