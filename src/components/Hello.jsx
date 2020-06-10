import React from 'react';
// 创建组件
export default function Hello(props) {
    // 如果在一个组件中 return null ，表示此组件是空的，什么都不会渲染
    // return null;
    // 在组件中，必须返回一个合法的 jsx 虚拟 DOM 元素
    console.log(props);
    // 不管是 Vue 还是 React， 组件中的 props 永远是只读，不能被重新赋值
    return <div>{props.name} ====== {props.gender} ======= {props.age}</div>;
}

// export default Hello