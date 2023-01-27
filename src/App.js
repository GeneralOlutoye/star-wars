import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PageDatas } from "./View/pageData";
import { PageView } from "./View/view";

export const App = () => {
  useLayoutEffect(() => {
    const url = window.location.href;
    const paths = url.split("/");
    const path = paths[3];
    if (path === "") {
      window.location.href = "/a-new-hope";
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {PageDatas.map((x) => (
          <Route
            key={x.pageKey}
            path={x.pageUrl}
            element={<PageView pageData={x} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
