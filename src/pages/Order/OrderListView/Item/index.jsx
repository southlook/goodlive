import { data } from "browserslist";
import React from "react";
import "./style.less";
const Item = (props) => {
  return (
    <div className="order-item-container clear-fix">
      <div className="order-item-img float-left">
        <img src={data.img} alt="" />
      </div>
      <div className="order-item-content">
        <span>商户：{data.title}</span>
        <span>类型：{data.houseType}</span>
        <span>价格：{data.price}</span>
      </div>
    </div>
  );
};

export default Item;
