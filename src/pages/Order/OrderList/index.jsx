import React, { useState, useEffect } from "react";
import api from "../../../api";
import OrderlistView from "../OrderListView";
const OrderList = (props) => {
  const [orderListData, setOrderListData] = useState([]);
  useEffect(() => {
    api
      .commentOrder({
        username: props.user.nick,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.status === 200) {
          setOrderListData(res.data.result);
        }
      });
  }, []);
  return (
    <div>
      {orderListData.length > 0 ? <OrderlistView /> : <div>等待数据加载</div>}
    </div>
  );
};

export default OrderList;
