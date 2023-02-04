/* eslint-disable react-hooks/exhaustive-deps */
import { Spin } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Layout2 } from "../Layout/index";
import { GET } from "../Service/Method";
import { Characters } from "./characters";

export const MovieDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState({
    name: "",
    comment: "",
  });
  const [commentData, setCommentData] = useState(localStorage.getItem('comment'));

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

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (comment) {
      localStorage.setItem("comment", JSON.stringify(comment));
      setComment({ name: "", comment: "" });
    }
  };

  const onChangeHandler = (value, key) => {
    setComment({ ...comment, [key]: value });
  };
  useLayoutEffect(() => {
    setCommentData(JSON.parse(localStorage.getItem("comment")));
  }, [comment]);

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
        <div className="my-2 text-justify leading-loose">
          {data.opening_crawl}
        </div>
        <div>
          <Characters character={data} />
        </div>
        <div>
          <h1 className="text-left font-medium my-3">Comment Section</h1>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <fieldset className="flex  rounded flex-col w-1/2">
              <input
                value={comment.name}
                onChange={(e) => onChangeHandler(e.target.value, "name")}
                className="border bg-[#ffffff]"
                type="text"
                placeholder="Enter name here..."
              />
              <textarea
                value={comment.comment}
                maxLength="500"
                onChange={(e) => onChangeHandler(e.target.value, "comment")}
                className="border bg-[#ffffff] my-2"
                placeholder="Enter comment not more than 500 words here..."
              ></textarea>
              <button type="submit" className="bg-blue-700 text-white">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div className="my-2 text-left">
          {(
            <>
              <h1>Name: {commentData.name}</h1>
              <p>{commentData.comment}</p>
            </>
          )}
        </div>
      </Spin>
    </Layout2>
  );
};
