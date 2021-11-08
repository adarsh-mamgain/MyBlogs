import { createTheme } from "@mui/material";

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
            contrastText: "#000000 "
        },
        secondary: {
            main: "#919191",
            contrastText: "#000000 "
        }
    }
});

export default customTheme;