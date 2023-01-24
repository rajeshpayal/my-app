import React from "react";
const GetData = (props) => {
  return <>{window.localStorage.getItem("data")}</>;
};

export default GetData;
