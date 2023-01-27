import React from "react";
import { Layout } from "../Layout/Layout";
import { PageComponent } from "./index";


export const PageView = ({ pageData }) => {
  return (
        <Layout
          pageKey={pageData.pageKey}
          tabName={pageData.pageTitle}
          pageTitle={pageData.pageTitle}
          pageUrl={pageData.pageUrl}
        >
          <PageComponent movieId={pageData.movieId} />
        </Layout>
  );
};
