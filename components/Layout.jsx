import React from "react";
import Head from "next/head";

//Import components
import { Footer } from "./index";
import { Navbar } from "./index";

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Head>
          <title className="head-title">MTNlabs - NFT DROP</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <main className="layout-main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
