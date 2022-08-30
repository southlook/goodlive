//焦点轮播图上的白点(指示器)
import React from "react";
import classnames from "classnames"; //一个简单的 JavaScript 实用程序，用于有条件地将类名连接在一起。
import "./style.less";
const Pagination = (props) => {
  //   console.log(props.len);
  let arr = new Array(props.len).fill(1); //fill是es6数组填充的方法 数组将变成[1,1,1]
  //   console.log(arr);
  let currentIndex = props.currentIndex;
  return (
    <div className="swiper-pagination">
      <ul>
        {arr.map((item, index) => {
          return (
            <li
              className={classnames({ selected: currentIndex === index })}
              //这里可以根据各属性动态添加，如果属性值为true则为其添加该类名，如果值为false，则不添加。这样达到了动态添加class的目的
              //在react开发中，我们有的时候需要使用js来动态判断是否为组件添加class（类名），这里我们使用到了classnames
              //当react原生动态添加多个className时就会报错，这时我们就可以利用classnames库添加多个className
              key={index}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
