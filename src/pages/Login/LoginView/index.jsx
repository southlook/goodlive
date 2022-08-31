import React, { useState } from "react";
import "./style.less";
import api from "../../../api";
const LoginView = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(username, password);
    // 进行验证
    api
      .login({
        username,
        password,
      })
      .then((res) => {
        if (res.data.status === 200) {
          //登录成功
          props.onLoginEvent(res.data); //将数据回传回去
        } else {
          console.log("登录失败");
        }
      });
  };
  const changeHandle = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  return (
    <div>
      <div id="login-container">
        <form onSubmit={onSubmitHandle}>
          <div className="input-container phone-container">
            <i className="icon-tablet"></i>
            <input
              type="text"
              name="username"
              placeholder="用户名/手机号"
              value={username}
              onChange={changeHandle}
            />
          </div>
          <div className="input-container password-container">
            <i className="icon-key"></i>
            <button>发送验证码</button>
            <input
              type="password"
              name="password"
              placeholder="输入验证码"
              value={password}
              onChange={changeHandle}
            />
          </div>
          <button className="btn-login">登录</button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
