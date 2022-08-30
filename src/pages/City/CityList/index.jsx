import React from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
const CityList = (porps) => {
  const clickCityHandle = (city) => {
    porps.onEvent(city); //点击click事件将城市信息回传给city
  };
  return (
    <div className="city-list-container">
      <h3>热门城市</h3>
      <ul className="clear-fix">
        <li>
          <span onClick={() => clickCityHandle("北京")}>北京</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("上海")}>上海</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("深圳")}>深圳</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("广州")}>广州</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("杭州")}>杭州</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("西安")}>西安</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("南京")}>南京</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("青岛")}>青岛</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("成都")}>成都</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("天津")}>天津</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("沈阳")}>沈阳</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("广州")}>广州</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("苏州")}>苏州</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("长沙")}>长沙</span>
        </li>
        <li>
          <span onClick={() => clickCityHandle("宁波")}>宁波</span>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(CityList);
