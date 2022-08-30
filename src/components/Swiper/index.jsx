import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views"; //焦点轮播图的包 需要npm下载模块
import { autoPlay } from "react-swipeable-views-utils";
// import Banner1 from "../../assets/images/banner1.png";
// import Banner2 from "../../assets/images/banner2.png";
// import Banner3 from "../../assets/images/banner3.png";
import Pagination from "./Pagination"; //指示器
import "./style.less";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews); //轮播图自动播放
const Swiper = (props) => {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = (index) => {
    // console.log(index);
    setIndex(index);
  };
  return (
    // 焦点轮播图部分
    <div className="swiper">
      <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {props.banners.map((item, index) => {
          //通过父子组件传值方式将图片传过来，然后map遍历
          return (
            <div key={index} className="swiper-view">
              <img src={item} alt="" />
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
      <Pagination currentIndex={index} len={props.banners.length} />
      {/* 将当前焦点轮播图下标的索引值、长度传回给Pagination组件 */}
    </div>
  );
};

export default Swiper;
