import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../pages/Main/Layout";
import Home from "../pages/Main/Home";
import User from "../pages/Main/User";
import Shop from "../pages/Main/Shop";
import LifeService from "../pages/Main/LifeService";
import BottomNav from "../components/BottomNav";
import City from "../pages/City";
import Search from "../pages/Search";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/city" component={City}></Route>
        <Route path="/search/:keywords" component={Search}></Route>
        {/* 路由传参 */}
        <Layout path="/">
          {/* layout为二级路由 */}
          <BottomNav />
          {/* 底部导航栏 */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/life" component={LifeService}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/user" component={User}></Route>
          </Switch>
        </Layout>
      </Switch>
    </Router>
  );
};

export default AppRouter;
