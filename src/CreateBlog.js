import React from "react";
import axios from "axios";
import marked from 'marked';
import DOMPurify from 'dompurify';
import { Grid, Typography } from "@mui/material";
// import CSRFToken from "./csrftoken";

class CreateBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "A",
            markdown: "B",
            date: "C",
            time: "D",
            slug: "E",
            author: "F"
        }
    }

    updateTitle(title) {
        this.setState({ title })
    }
    updateMarkdown(markdown) {
        this.setState({ markdown });
    }
    updateDateAndTime() {
        let newDate = new Date()
        let updateDate = newDate.getUTCFullYear() + "-" + newDate.getUTCMonth() + "-" + newDate.getUTCDate();
        let updateTime = newDate.getUTCHours() + ":" + newDate.getUTCMinutes() + ":" + newDate.getUTCSeconds();
        this.setState({ date: updateDate });
        this.setState({ time: updateTime })
    }
    print() {
        console.log(this.state);
    }
    handleSubmit(event) {
    //     if (item.slug) {
    //         axios.put(`http://localhost:8000/api/blog/${item.slug}/`, item)
    //         return;  
    //     }
        this.updateDateAndTime();
        // console.log(this.state);
        console.log(this.state);
        alert(this.state);
        // await axios.post("http://localhost:8000/api/blog/", event);
        event.preventDefault();
    };
    render() {
        var inputTitle = {
            height: "10vh",
            padding: "10px",
            margin: "10px",
        };
        var outputTitle = {
            height: "10vh",
            padding: "10px",
            margin: "10px",
            backgroundColor: "#DCDCDC",
        };
        var inputStyle = {
            height: "10vh",
            padding: "10px",
            margin: "10px",
        };
        var outputStyle = {
            height: "10vh",
            backgroundColor: "#DCDCDC",
            padding: "10px",
            margin: "10px",
        };
        return (
            <Grid container justifyContent="center" alignItems="center">
                <Typography variant="h1">Still developing 🛠</Typography>
                {/* <div className="row justify-content-center align-items-center">
                    <form className="col-5" onSubmit={this.handleSubmit}>
                        <div className="edit">
                            <input className="form-control" style={inputTitle} value={this.state.title} onChange={(e) => {this.updateTitle(e.target.value); }} />
                            <textarea className="form-control" style={inputStyle} value={this.state.markdown} onChange={(e) => {this.updateMarkdown(e.target.value); }}></textarea>
                        </div>
                        <button className="btn btn-primary" onFocus={this.print}></button>
                        <input type="submit" className="btn btn-dark"/>
                    </form>
                    <div className="col-7">
                        <div className="preview">
                            <div className="form-control" style={outputTitle} dangerouslySetInnerHTML={{ __html: marked(DOMPurify.sanitize(this.state.title)) }}></div>
                            <div className="form-control" style={outputStyle} dangerouslySetInnerHTML={{ __html: marked(DOMPurify.sanitize(this.state.markdown)) }}></div>
                        </div>
                    </div>
                </div> */}
            </Grid>
        );
    };
}

export default CreateBlog;