import "../styles/globals.css";
import '../styles/animations.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(MyApp);
