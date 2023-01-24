import React from "react";
const SetData = (props) => {
  return <>{window.localStorage.setItem("data", JSON.stringify(props.data))}</>;
};

export default SetData;
