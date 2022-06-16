import useMinHeight from "@/core/hooks/useMinHeight";
import Head from "next/head";
import React from "react";

const MainLayout = ({ children }) => {
  const [minHeight, HeaderRef, FooterRef] = useMinHeight(0);
  return (
    <>
      <Head>
        <title>Nextjs Starter</title>
      </Head>
      <header
        ref={HeaderRef}
        className="w-full bg-white shadow-md left-0 top-0"
      >
        <div className="max-w-5xl mx-auto py-4">
          <ul className="flex items-center space-x-3 justify-end">
            <li>Home</li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </div>
      </header>
      <div style={{ minHeight: `calc(100vh - ${minHeight}px)` }}>
        {children}
      </div>
      <footer ref={FooterRef} className="w-full bg-gray-100">
        <div className="max-w-5xl mx-auto py-4">Footer</div>
      </footer>
    </>
  );
};

export default MainLayout;
