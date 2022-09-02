import React, { useState } from "react";
import "./style.less"
//tabs视图结构
const Tabs = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const tabClickHandle = (index) => {
        setCurrentIndex(index)
    }
    const titleClass = (index) => {
        return index === currentIndex ? 'Tab_title active' : 'Tab_title'
    }
    return (
        <div>
            {/* 详情 */}
            <ul className="Tab_title_wrap">
                {
                    React.Children.map(props.children, (element, index) => {
                        return <li onClick={() => tabClickHandle(index)} className={titleClass(index)} key={index}>{element.props.label}</li>
                    })
                }
                {/* React.Children.map(children, function[(thisArg)])方法 
                在children 里的每个直接子节点上调用一个函数，并将 this 设置为 thisArg。
                如果 children 是一个数组，它将被遍历并为数组中的每个子节点调用该函数。
                如果子节点为 null 或是 undefined，则此方法将返回 null 或是 undefined，而不会返回数组。 */}
            </ul>
            <div>
                {/* 评价 */}
                {
                    React.Children.map(props.children, (element, index) => {
                        return (
                            <div>
                                {
                                    currentIndex === index ? element.props.children : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Tabs;
