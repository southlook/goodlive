import React from "react";
import "./style.less";
//视图组件(木偶组件)
const HomeHotView = (props) => {
  //   console.log(props.data);
  return (
    <div className="hotproduct">
      <h3>{props.title}</h3>
      <div className="hot-container">
        <ul className="clear-fix">
          {props.data.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>
                  <img src={item.img} alt="" />
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomeHotView;
