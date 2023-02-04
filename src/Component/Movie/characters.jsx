/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Characters = ({ character }) => {
  const [data, setData] = useState([]);

  const fetchCharacter = () => {
    character?.characters?.map(async (characterAPI) => {
      const response = await axios.get(characterAPI.toString());
      setData(response?.data);
      return response?.data
    });
  };
  
  useEffect(() => {
    fetchCharacter();
  }, [character]);
  return <div className="text-left">
    <h1 className="font-medium">Characters</h1>
    <h2> <b>Name:</b> {data?.name} <b>Height:</b> {data?.height} <b>Skin color:</b> {data?.skin_color}</h2>
  </div>
};