import React from "react";
import LoginView from "./LoginView";
import { useDispatch } from "react-redux";
import * as loginActions from "../../redux/actions/login";
const Login = () => {
  const dispatch = useDispatch();
  const loginHandle = (user) => {
    dispatch(loginActions.setLogin(user)); //将数据写入redux中
    //再写入到本地
    localStorage.setItem("goodlive", JSON.stringify(user));
    window.history.back(); //返回
  };
  return (
    <div>
      <LoginView onLoginEvent={loginHandle} />
    </div>
  );
};

export default Login;
