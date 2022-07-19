import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import Head from "next/head";

export default function Layout({children, title = 'JAAJSKATEBOARD',}) {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.ico"/>
            <title>{`${title} - JAAJSKATEBOARD`}</title>
        </Head>
        <Navbar/>
            <main>{children}</main>
        <Footer/>
        </>
    )
}