import store from "../redux/store"
import * as loginActions from "../redux/actions/login"
//初始化登录信息
if (localStorage.getItem("goodlive")) {
    store.dispatch(loginActions.setLogin(JSON.parse(localStorage.getItem("goodlive"))))
}