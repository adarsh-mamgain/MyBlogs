import React from "react";
import { Link } from "react-router-dom";
import { Box, Input, useScrollTrigger, Slide, AppBar, Toolbar } from '@mui/material'
import { Button } from "@mui/material";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
  
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const ariaLabel = { 'aria-label': 'description' };

function Navigation(props) {
  return (
    <Box style={{ flexGrow: 1 }}>
        <HideOnScroll>
            <AppBar color={ "primary" }>
                <Toolbar>
                    <Box m={1} p={1}>
                        <Link to=""><img src="/static/images/brand-logo.svg" alt="brand-logo" /></Link>
                    </Box>
                    <Box m={1} p={1}>
                        <Button variant="outlined" color="inherit" style={{ borderRadius: 20 }} href="/">Home</Button>
                        <Button variant="outlined" color="inherit" style={{ borderRadius: 20 }} href="/blog">Blogs</Button>
                        <Button variant="outlined" color="inherit" style={{ borderRadius: 20 }} href="/create-blog">Create</Button>
                    </Box>
                    <Box m={1} p={1}>
                        <Input color={ "secondary" } placeholder="Can't search :)" inputProps={ariaLabel} />
                    </Box>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
        <Toolbar />
    </Box>
  );
}

export default Navigation;
