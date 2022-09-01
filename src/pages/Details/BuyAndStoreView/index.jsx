import React, { useState, useEffect } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as collectActions from "../../../redux/actions/collect";
const BuyAndStoreView = (props) => {
  const dispatch = useDispatch();
  const [isCollect, setIsCollect] = useState(true);
  //初始化数据操作 再次进如页面时能够直接根据保存的数据判断是已收藏还是未收藏
  useEffect(() => {
    setIsCollect(isStore());
  }, []);
  const storeHandle = () => {
    if (props.user.token) {
      //判断用户是否收藏
      //1.收藏则取消收藏
      //2.未收藏则收藏
      if (isStore()) {
        //已收藏
        setIsCollect(true);
        dispatch(collectActions.removeCollect(props.id));
      } else {
        //未收藏
        setIsCollect(false);
        dispatch(collectActions.setCollect(props.id));
      }
    } else {
      //请登录
      props.history.push("/login");
    }
  };
  //用户收藏判定
  //return boolean true:收藏 false:未收藏
  const isStore = () => {
    let collects = props.collects;
    let id = props.id;
    //some只要有一个成员返回值是true  那么所有返回值就为true
    return collects.some((item) => {
      return item === id;
    });
  };
  return (
    <div className="buy-store-container clear-fix">
      <div className="item-container float-left">
        {isCollect ? (
          <button className="selected" onClick={storeHandle}>
            收藏
          </button>
        ) : (
          <button className="selected o" onClick={storeHandle}>
            已收藏
          </button>
        )}
      </div>
      <div className="item-container float-left">
        <button className="selected">购买</button>
      </div>
    </div>
  );
};

export default withRouter(BuyAndStoreView);
