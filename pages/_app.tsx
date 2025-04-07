import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {Layout} from '../components/layout/layout';
import {useRouter} from 'next/router';

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({Component, pageProps}: AppProps) {
   const router = useRouter();
   const isLoginPage = router.pathname === '/';

   return (

      <NextThemesProvider
               defaultTheme="light"
               attribute="class"
               value={{
                  light: lightTheme.className,
                  dark: darkTheme.className,
               }}
            >

         <NextUIProvider>
            {isLoginPage ? (
               <Component {...pageProps} />
            ) : (
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            )}
         </NextUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;