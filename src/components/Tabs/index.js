import React from "react";
import "./style.less"
//tabs视图结构
const Tabs = (props) => {
    return (
        <div>
            <ul className="Tab_title_wrap">
                {
                    React.Children.map(props.children, (element, index) => {
                        return <li className="Tab_title" key={index}>{element.props.label}</li>
                    })
                }

            </ul>
            <div>
                {
                    React.Children.map(props.children, (element, index) => {
                        return (
                            <div>
                                {
                                    element.props.children
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
