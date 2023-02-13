import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex h-full w-full flex-col align-center bg-[#fff]">
      <h2 className="font-bold text-red-600">Sorry!</h2>
      <p>The page can not be found</p>
      <Link className="text-green-600" to="/">
        Back to HomePage ⏪
      </Link>
    </div>
  );
};