//详情页做路由跳转
import React from "react";
import { useParams } from "react-router-dom"; //用useParams读取路由 组件和item组件传过来的id和点击页面传过来的值
import DetailsView from "./DetailsView";
const Details = () => {
  const params = useParams();
  return (
    <div>
      <DetailsView id={params.id} />
      {/* 传参 */}
    </div>
  );
};

export default Details;
