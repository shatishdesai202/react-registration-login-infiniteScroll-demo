import React from "react";
import { useLocation } from "react-router-dom";

const ComicPage = () => {
  const data = useLocation();

  console.log({ data });
  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default ComicPage;
