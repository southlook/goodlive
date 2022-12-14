import React, { useState, useEffect } from "react";
import SearchListView from "../SearchListView";
import api from "../../../api";
import LoadMore from "../../../components/LoadMore";
const SearchList = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    http();
    return () => {
      setSearchData([]); //卸载阶段
      setHasMore(false); //清空a
    };
  }, [props.search]);
  const loadMoreHandle = () => {
    http();
  };
  const http = () => {
    //把网络请求封装
    api
      .search({
        search: props.search,
      })
      .then((res) => {
        if (res.data.status === 200) {
          //合并数据
          setSearchData(searchData.concat(res.data.result.data));
          setHasMore(res.data.result.hasMore);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {searchData.length > 0 ? (
        <SearchListView search={searchData} />
      ) : (
        <div>等待数据加载...</div>
      )}
      {hasMore ? (
        <LoadMore onLoadMore={loadMoreHandle} />
      ) : (
        <div>被你看光了</div>
      )}
    </div>
  );
};

export default SearchList;
