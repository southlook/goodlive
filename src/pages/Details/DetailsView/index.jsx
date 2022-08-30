import React, { useState, useEffect } from "react";
import api from "../../../api";
import DetailsHeader from "../../../components/PubHeader"; //头部组件复用
import Swiper from "../../../components/Swiper"; //焦点轮播图组件复用
import "./style.less";
const DetailsViews = (props) => {
  const [detailsData, setDetailsData] = useState({});
  useEffect(() => {
    api
      .details({
        id: props.id,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(detailsData);
          setDetailsData(res.data);
        }
      });
  }, []);
  return (
    <div>
      <DetailsHeader title={"详情页"} />
      {detailsData.imgs ? (
        //判断detailsData.img有无数据
        <div>
          <Swiper banners={detailsData.imgs} />
          <div className="detail-info">
            <h3>{detailsData.title}</h3>
            <div className="box">
              <ul>
                <li>
                  <span>{detailsData.price} /月</span>
                  <p>租金</p>
                </li>
                <li>
                  <span>{detailsData.info.type}</span>
                  <p>房屋类型</p>
                </li>
                <li>
                  <span>{detailsData.houseType}</span>
                  <p>面积</p>
                </li>
              </ul>
            </div>
            <div className="info">
              <div className="info-list">
                <p>类型：{detailsData.info.type}</p>
                <p>朝向：{detailsData.info.orientation}</p>
              </div>
              <div className="info-list">
                <p>楼层：{detailsData.info.level}</p>
                <p>装修：{detailsData.info.style}</p>
              </div>
              <div className="info-list">
                <p>年代：{detailsData.info.years}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>等待数据加载</div>
      )}
    </div>
  );
};

export default DetailsViews;
