import "./App.css";

import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routers";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Helmet } from "react-helmet";
import { FunctionProvider } from "./components/GlobalFunctions/FunctionContext";

function App() {
  const [scrollToTop, setScrollToTop] = useState(false);

  //HANDLE DISPLAY BUTTON SCROLL TO TOP
  useEffect(() => {
    const handlerScroll = () => {
      setScrollToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handlerScroll);

    //Clean up function
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  const handlerScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FunctionProvider>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </Helmet>

      <Router>
        <nav>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = DefaultLayout;

                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }

                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
          {scrollToTop && (
            <div className="buttonWrapper">
              <button className="button" onClick={handlerScrollToTop}>
                <svg
                  className="bell"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-15 5 5h-4v5h-2v-5H7l5-5z"></path>
                </svg>
              </button>
            </div>
          )}
        </nav>
      </Router>
    </FunctionProvider>
  );
}

export default App;
