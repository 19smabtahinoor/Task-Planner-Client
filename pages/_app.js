import { SessionProvider } from "next-auth/react";
import 'tailwindcss/tailwind.css';
import initializedFirebaseApp from '../firebase';
import '../styles/index.css';


//initialize firebase
initializedFirebaseApp();

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
