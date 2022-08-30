//搜索输入框相关设置
import React, { useState, useEffect } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as searchAction from "../../redux/actions/search";
import { useParams } from "react-router-dom";
const SearchInput = (props) => {
  const [keywords, setKeywords] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const reduxKeywords = useSelector((state) => state.search);
  const keyuphandle = (e) => {
    if (keywords.length > 0) {
      if (e.keyCode === 13) {
        props.history.push("/search/" + keywords); //路由传参
        dispatch(searchAction.updateSearch(keywords));
      }
    }
  };
  //回传
  useEffect(() => {
    if (params.keywords) {
      dispatch(searchAction.updateSearch(params.keywords));
    } else {
      dispatch(searchAction.updateSearch(""));
    }
    setKeywords(reduxKeywords.search);
  }, [reduxKeywords.search, params.keywords]);

  const changeHandle = (e) => {
    setKeywords(e.target.value);
  };
  return (
    //input是受控组件所以用e.target.value 用useState
    //非受控组件用useref
    <input
      className="search-input"
      type="text"
      onKeyUp={keyuphandle}
      value={keywords} //路由传参
      onChange={changeHandle}
    />
  );
};

export default withRouter(SearchInput);
