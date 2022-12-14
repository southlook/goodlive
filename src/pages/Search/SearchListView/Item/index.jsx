//搜索页面图片列表
import React, { useState } from "react";
import "./style.less";
import DefaultImg from "../../../../assets/images/default.png";
import { loadImageAsync } from "../../../../utils/loadImg";
import { Link } from "react-router-dom";
const Item = (props) => {
  const [currentImg, setCurrentImg] = useState(DefaultImg);
  const data = props.data;
  loadImageAsync(data.img)
    .then((res) => {
      setCurrentImg(res);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className="list-item">
      <Link to={`/details/${data.id}`}>
        {/* 点击页面直接路由跳转 路由页面传的:id 这里直接传值 */}
        <img src={currentImg} alt="" />
        <div className="mask">
          <div className="left">
            <p>{data.title}</p>
            <p>{data.houseType}</p>
          </div>
          <div className="right">
            <div className="btn">{data.rentType}</div>
            <p dangerouslySetInnerHTML={{ __html: data.price + "元 / 月" }}></p>
            {/* 渲染HTML结构 */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
