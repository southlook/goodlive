import React from "react";
import HeaderNav from "../../../components/HeaderNav";
import Swiper from "../../../components/Swiper";
import Banner1 from "../../../assets/images/banner1.png";
import Banner2 from "../../../assets/images/banner2.png";
import Banner3 from "../../../assets/images/banner3.png";
import HomeHotList from "./HomeHotList";
import { useSelector } from "react-redux";
const Home = () => {
  const city = useSelector((state) => state.city); //通过useSelector钩子获得数据
  return (
    <div>
      <HeaderNav cityName={city.cityName} />
      {/* 将city数据全局store中拉出来 在home组件传递给子组件headerNav */}
      <Swiper banners={[Banner1, Banner2, Banner3]} />
      <HomeHotList cityName={city.cityName} />
      {/* 将city数据全局store中拉出来 在home组件传递给子组件HomeHotList */}
    </div>
  );
};

export default Home;
