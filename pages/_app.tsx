import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <CssBaseline />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
