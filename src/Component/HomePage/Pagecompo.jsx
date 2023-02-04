/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Spin, Table } from "antd";
import { GET } from "../Service/Method";

export const PageComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "Movie Title",
      dataIndex: "title",
      render: (_, record, id) => {
        return <Link to={`/movie-details/${id + 1}`}>{record.title}</Link>;
      },
    },
    {
      title: "Release Date",
      dataIndex: "release_date",
      sorter: (a, b) => {
        if (a.release_date < b.release_date) {
          return -1;
        }
        if (a.release_date > b.release_date) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "Movie Director",
      dataIndex: "director",
    },
  ];

  const apiFetch = async () => {
    setLoading(true);
    const response = await GET(`https://swapi.dev/api/films/`);
    setData(response?.results);
    setLoading(false);
    return response?.results;
  };

  useEffect(() => {
    apiFetch();
  }, []);
  return (
    <Spin tip="processing" spinning={loading}>
      <div className="flex font-[700] px-2 py-2 my-3 bg-[#f8f9fa] justify-between shadow-md">
        <h1>A list of Star War movies displaying in order as filtered</h1>
      </div>
      <Table pagination={false} columns={columns} dataSource={data} />
    </Spin>
  );
};
