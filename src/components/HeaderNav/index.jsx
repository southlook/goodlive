import React from "react";
import "./style.less";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput"; //组件复用
const HeaderNav = (props) => {
  //顶部导航 直接渲染在Home组件  有移动端错位问题在public/index文件夹中解决
  return (
    <div id="home-header" className="clear-fix">
      <div className="home-header-left float-left">
        <Link to="/city">
          {/* 点击北京跳转到city界面 */}
          <span>{props.cityName}</span>
          {/* 从home组件传递过来 */}
          <i className="icon-angle-down"></i>
        </Link>
      </div>
      <div className="home-header-right float-right">
        <Link to="/order">
          <i className="iconfont icon-car"></i>
        </Link>
      </div>
      <div className="home-header-middle">
        <div className="search-container">
          <i className="icon-search"></i>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
