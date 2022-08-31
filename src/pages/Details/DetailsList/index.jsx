import React, { useState, useEffect } from "react";
import DetailsView from "../DetailsView";
import api from "../../../api";
const DetailsList = (props) => {
  const [detailsData, setDetailsData] = useState({});
  useEffect(() => {
    api
      .details({
        id: props.id,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(detailsData);
          setDetailsData(res.data);
        }
      });
  }, []);
  return (
    <div>
      {detailsData.imgs ? (
        //判断detailsData.img有无数据
        <DetailsView detailsData={detailsData} />
      ) : (
        <div>等待数据加载</div>
      )}
    </div>
  );
};

export default DetailsList;
