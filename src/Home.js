import React from "react";
import { Grid, Divider, Typography, Button, Link } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home(props) {
    return(
        <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} lg={4}>
                <Typography variant="h1" component="div" gutterBottom>A painting of my life.</Typography>
                <Button size="large" color="inherit" variant="outlined" style={{ borderRadius: 50, fontSize: 40 }} href="/blog">Peek My Diary</Button>
            </Grid>
            <Divider orientation="vertical" flexItem>
                <Link color="inherit" href="https://www.github.com/adarsh-mamgain/"><GitHubIcon fontSize="large" /></Link>
                <Link color="inherit" href="https://www.instagram.com/_adarsh_mamgain_/"><InstagramIcon fontSize="large" /></Link>
                <Link color="inherit" href="https://www.linkedin.com/in/adarsh-mamgain/"><LinkedInIcon fontSize="large" /></Link>
            </Divider>
            <Grid item>
                <img src="/static/images/IMG_3717.jpg" alt="adarsh mamgain" height="650px" />
            </Grid>
        </Grid>
    );
}
