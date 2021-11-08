import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Grid, Typography, Box, Divider } from '@mui/material'

export default class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogList: [],
        };
    }

    componentDidMount() {
        axios.get(`/api/blog/?format=json`)
        .then((result) => {
            this.setState({ blogList: result.data });
        })
        .catch(error => {
            console.log(error)
        })
    };

    renderBlogs = () => {
        const newBlogs = this.state.blogList;
        return newBlogs.map((blog) => (
            <Box key={blog.slug}>
                <Link underline="none" to={`/blog/${blog.slug}`}><Typography variant="h1" component="div" gutterBottom>{ blog.title }</Typography></Link>
                <Typography dangerouslySetInnerHTML={{__html: marked(DOMPurify.sanitize(blog.markdown))}}></Typography>
                <Typography>{ blog.author }</Typography>
                <Typography>{ blog.date } { blog.time }</Typography>
                <Divider />
            </Box>
        ));
    };

    render() {
        return (
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} lg={6}>
                    { this.renderBlogs() }
                </Grid>
            </Grid>
        )
    };
}
