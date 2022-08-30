import React from "react";
import CityHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import { useSelector, useDispatch } from "react-redux";
//useSelector可以读取数据，useDispatch可以获取dispatch对象 老的方法是用connect()()链接
import { changeCity } from "../../redux/actions/city";
import CityLists from "./CityLists";
const City = (porps) => {
  // const [city, setCity] = useState("北京");
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city); //useSelector 可以直接读取state状态值给city
  const onCityEvent = (city) => {
    dispatch(changeCity(city)); //redux数据流
    porps.history.push("/"); //选择完城市以后自动跳转回首页
  };
  return (
    <div>
      <CityHeader title={"城市选择"} />
      <CurrentCity city={city.cityName} />
      <CityList onEvent={onCityEvent} />
      {/* CityList组件点击click事件将城市信息回传给父组件 */}
      <CityLists onEvent={onCityEvent} />
      {/* 导入的第三方城市列表包 */}
    </div>
  );
};

export default City;
