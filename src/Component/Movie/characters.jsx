/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const Characters = ({ character }) => {
  const [data, setData] = useState([]);

  const fetchCharacter = () => {
    character?.characters?.map(async (characterAPI) => {
      const response = await axios.get(characterAPI.toString());
      setData(response?.data?.name);
      return response?.data?.name
    });
  };
  
  useEffect(() => {
    fetchCharacter();
  }, [character]);

  return (
    <div className="text-left">
      <h1 className="font-bold">Character List</h1>
      {data}
    </div>
  );
};
