import React, { useState, useEffect } from "react";
// 引入 CitySelect 组件
import CitySelect from "react-city-select";
import cityData from "../../../data/city";
import "./style.less";
import api from "../../../api";
const CityLists = (props) => {
  const [citysData, setCitysData] = useState(cityData);
  const handleSelectCity = (cityData) => {
    // console.log(cityData);
    props.onEvent(cityData.name); //点击哪个城市哪个城市的数据回传回去
  };
  useEffect(() => {
    api.getCityLists().then((res) => {
      //请求城市信息
      if (res.status === 200) {
        setCitysData(res.data.result.citylist);
      }
    });
  }, []);
  return (
    <div className="citylists">
      <h3>城市列表</h3>
      <CitySelect
        // 传入数据
        data={citysData}
        // 传入回调
        onSelectItem={handleSelectCity}
      ></CitySelect>
    </div>
  );
};

export default CityLists;
