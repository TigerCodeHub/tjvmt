import { FC } from "react";
import { Footer } from "./footer";
import Head from 'next/head';
import Header from "./header";
import Background from "./Background";

export const Layout: FC<any> = ({ dim=false, children }) => {
    return (
        <>
            <Head>
                <title>TJ VMT</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
                <meta name="description" content="Hello, we are the TJHSST Varsity Math Team; one of the most successful math teams in the nation."/>
                <meta name="keywords" content="TJVMT, VMT, Varsity Math Team, Math Team, TJ, TJHSST"/>
                <meta name="robots" content="index, follow"/>
                <meta name="web_author" content="Alvan Caleb Arulandu"/>
                
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#64a2ff"/>
                <meta name="msapplication-TileColor" content="#0a192f"/>
                <meta name="theme-color" content="#64A2FF"/>
                <meta name="background-color" content="#0a192f"/>

                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){ dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                    });`,
                }}
                />
            </Head>
            <Header/>
            <div className='relative w-full m-0 h-screen'>
                <Background className={dim ? "opacity-25" : 'opacity-100'}/>
                <main className='relative w-full min-h-screen bg-transparent'>
                    {children}
                    <Footer/>
                </main>
            </div>
        </>
    );
}