import { ToDoContextProvider } from '@/contexts/ToDoContext';

function MyApp({ Component, pageProps }) {
  return <ToDoContextProvider><Component {...pageProps} /></ToDoContextProvider>
}

export default MyApp;
