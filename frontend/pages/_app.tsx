import { ToDoContextProvider } from "@/contexts/ToDoContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ToDoContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ToDoContextProvider>
  );
}

export default MyApp;
