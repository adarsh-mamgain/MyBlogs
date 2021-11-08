import React from 'react';
import axios from "axios";
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Grid, Typography, Box } from '@mui/material'

export default class GetBlogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog_json: [],
        };
    }

    componentDidMount() {
        axios.get(`/api/blog/${this.props.match.params.slug}/?format=json`)
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
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} lg={6}>
                    <Box>
                        <Typography variant="h1" component="div" gutterBottom>{ blog.title }</Typography>
                        <Typography dangerouslySetInnerHTML={{__html: marked(DOMPurify.sanitize(blog.markdown))}}></Typography>
                        <Typography>{ blog.author }</Typography>
                        <Typography>{ blog.date } { blog.time }</Typography>
                    </Box>
                </Grid>
            </Grid>
        )
    };
}
