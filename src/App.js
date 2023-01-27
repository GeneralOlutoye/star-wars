import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PageDatas } from "./View/pageData";
import { PageView } from "./View/view";

export const App = () => {
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
