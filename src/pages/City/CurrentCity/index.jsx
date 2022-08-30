import React from "react";
import "./style.less";
const CurrentCity = (porps) => {
  return (
    <div className="current-city">
      <h2>当前城市：{porps.city}</h2>
      {/* 父组件City通过useSelector钩子勾过来的redux数据state.cityName传递给本组件 通过props接受 */}
    </div>
  );
};

export default CurrentCity;
