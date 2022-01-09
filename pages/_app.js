// import { SessionProvider } from "next-auth/react";
import { Provider as AuthProvider } from 'next-auth/client';
import 'tailwindcss/tailwind.css';
import TaskProvider from "../context/TaskProvider";
import initializedFirebaseApp from '../firebase';
import '../styles/index.css';


//initialize firebase
initializedFirebaseApp();

function MyApp({
  Component,
  pageProps
  // pageProps: { session, ...pageProps },
}) {
  return (
    <AuthProvider session={pageProps.session}>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </AuthProvider>
  )
}

export default MyApp
