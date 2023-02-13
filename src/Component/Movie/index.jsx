/* eslint-disable react-hooks/exhaustive-deps */
import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Comment } from "../comment";
import { Layout2 } from "../Layout/index";
import { GET } from "../Service/Method";
import { Characters } from "./characters";

export const MovieDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = window.location.href;
  const urlId = url.split("/");
  let path = "";
  if (urlId.length > 4) {
    path = urlId[4];
  }

  const apiFetch = async () => {
    setLoading(true);
    const response = await GET(`https://swapi.dev/api/films/${path}`);
    setData(response);
    setLoading(false);
    return response;
  };

  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <Layout2>
      <Spin tip="processing" spinning={loading}>
        <div className="flex px-2 py-2 my-3 font-bold bg-[#f8f9fa] justify-between shadow-md">
          <h1>Movie Title: {data.title}</h1>
          <h4>Released: {data.release_date}</h4>
        </div>
        {!loading && (
          <div className="justify-between flex font-[500]">
            <h1>Produced by: {data.producer}</h1>
            <h3 className="my-2">Directed by: {data.director}</h3>
          </div>
        )}
        <div className="my-2 mx-2 text-justify leading-loose">
          {data.opening_crawl}
        </div>
        <Characters character={data} />
        <Comment />
      </Spin>
    </Layout2>
  );
};