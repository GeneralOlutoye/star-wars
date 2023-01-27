/* eslint-disable react-hooks/exhaustive-deps */
import { Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GET } from "../Service/Method";

export const PageComponent = ({ movieId }) => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const apiFetch = async () => {
        setLoading(true);
        const response = await GET(`https://swapi.dev/api/films/${movieId}`);
        setData(response);
        setLoading(false);
        return response;
    };

    useEffect(() => {
        apiFetch();
    }, [movieId]);

    const [comment, setComment] = useState("");

    return (
        <Spin tip="processing" spinning={loading}>
            <div className="leading-loose text-lg text-justify">{data?.opening_crawl}</div>
            {!loading && (
                <TextArea
                    className="w-[30rem] mx-auto relative bottom-0"
                    placeholder="Add a comment not more than 500 characters here..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            )}
        </Spin>
    );
};