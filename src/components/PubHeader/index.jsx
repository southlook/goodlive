import React from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
const PubHeader = (props) => {
  const backHandle = () => {
    //反回上一页 有2种方案
    //第一种  props.history.go(-1);
    window.history.back();
  };
  return (
    <div id="common-header">
      <span className="back-icon" onClick={backHandle}>
        <i className="icon-chevron-left"></i>
      </span>
      <h1>{props.title}</h1>
    </div>
  );
};

export default withRouter(PubHeader);
