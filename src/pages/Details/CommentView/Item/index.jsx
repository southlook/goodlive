import React from "react";
import "./style.less";
import Star from "../../../../components/Star";
const Item = (props) => {
  const data = props.data;
  return (
    <div className="comment-item">
      <h3>
        <i className="icon-user"></i>
        {data.username}
      </h3>
      <div>
        <Star num={data.star} />
      </div>
      <p>{data.comment}</p>
    </div>
  );
};

export default Item;
