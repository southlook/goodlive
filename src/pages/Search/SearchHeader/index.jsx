import React from "react";
import "./style.less";
import SearchInput from "../../../components/SearchInput";
const SearchHeader = () => {
  const backHandle = () => {
    window.history.back(); //返回
  };
  return (
    <div id="search-header" className="clear-fix">
      <span className="back-icon float-left" onClick={backHandle}>
        <i className="icon-chevron-left"></i>
      </span>
      <div className="input-container">
        <i className="icon-search"></i>
        <SearchInput />
      </div>
    </div>
  );
};

export default SearchHeader;
