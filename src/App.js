import { Fragment, useMemo } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createMuiTheme } from "./theme";

function App() {
  const theme = useMemo(() => {
    return createMuiTheme("light");
  }, []);
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
      <ToastContainer position="top-right" autoClose={3000} closeOnClick />
    </Fragment>
  );
}

export default App;
