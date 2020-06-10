// 1、导入React
import React from 'react';
import ReactDOM from 'react-dom';

// 创建组件的方式（第一种）
// 组件首字母名称必须是大写
function Hello(props) {
    // 如果在一个组件中 return null ，表示此组件是空的，什么都不会渲染
    // return null;
    // 在组件中，必须返回一个合法的 jsx 虚拟 DOM 元素
    console.log(props);
    // 不管是 Vue 还是 React， 组件中的 props 永远是只读，不能被重新赋值
    return <div>{props.name} ====== {props.gender} ======= {props.age}</div>;
}

const obj = {
    name: '姓名',
    age: 11,
    gender: '男'
}
// 3.调用 render 函数渲染
ReactDOM.render(<div>
    {/* 直接把 组件名称，以标签形式渲染到页面 */}
    {/* <Hello age={obj.age} name={obj.name} gender={obj.gender}></Hello> */}
    <Hello {...obj}></Hello>
</div>, document.getElementById("app"));

var obj1 = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc'
}
var obj2 = {
    d: 'ddd',
    ...obj1
}
console.log(obj2);