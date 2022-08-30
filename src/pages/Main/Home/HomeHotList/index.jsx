import React, { useState, useEffect } from "react";
import api from "../../../../api";
import HomeHotView from "../HomeHotView";
//智能组件(获取数据组件)
const HomeHotList = (props) => {
  const [hot1List, setHot1List] = useState([]);
  const [hot2List, setHot2List] = useState([]);
  //获取hot1
  useEffect(() => {
    api
      .getHomeHot1({
        cityName: props.cityName, //父组件home传递过来的数据
      })
      .then((res) => {
        if (res.data.status === 200) {
          // console.log(res.data.result);
          setHot1List(res.data.result);
        }
      });
  }, [props.cityName]);
  //获取hot2
  useEffect(() => {
    api
      .getHomeHot2({
        cityName: props.cityName, //父组件home传递过来的数据
      })
      .then((res) => {
        if (res.data.status === 200) {
          // console.log(res.data.result);
          setHot2List(res.data.result);
        }
      });
  }, [props.cityName]);
  return (
    <div>
      {hot1List.length > 0 ? (
        <HomeHotView data={hot1List} title={"热门商品"} />
      ) : (
        <div>等待数据加载</div>
      )}
      {hot2List.length > 0 ? (
        <HomeHotView data={hot2List} title={"新品推荐"} />
      ) : (
        <div>等待数据加载</div>
      )}
    </div>
  );
};

export default HomeHotList;
