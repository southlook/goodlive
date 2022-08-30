import React from "react";
import { useParams } from "react-router-dom"; //读路由传值过来的数据
import SearchList from "./SearchList";
import SearchHeader from "./SearchHeader";
const Search = () => {
  const params = useParams();
  return (
    <div>
      <SearchHeader />
      <SearchList search={params.keywords} />
      {/* //搜索列表 */}
    </div>
  );
};

export default Search;
