import React, { useEffect, useState, useRef } from "react"; //滚动条
import "./style.less";
const LoadMore = (props) => {
  const more = useRef();
  const [loadTop, setLoadTop] = useState(10000);
  //浅比较
  useEffect(() => {
    //getBoundingClientRect
    // console.log(more.current);
    //视口高度
    //防抖 节流
    let timer = null;
    let winHeight = document.documentElement.clientHeight;
    window.addEventListener("scroll", scrollHandle);
    function scrollHandle() {
      if (more.current) {
        setLoadTop(more.current.getBoundingClientRect().top);
        if (timer) {
          clearTimeout(timer);
        } else {
          timer = setTimeout(() => {
            if (winHeight > loadTop) {
              // console.log("加载更多数据");
              props.onLoadMore();
            }
          }, 300);
        }
      }
    }
    return () => {
      // window.removeEventListener("scroll", scrollHandle); //解决内存泄漏问题
      // clearTimeout(timer); //卸载阶段 优化
    };
  }, [loadTop]);
  return (
    <div className="load" ref={more}>
      加载更多
    </div>
  );
};

export default LoadMore;
