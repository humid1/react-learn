// 1、导入React
import React from 'react';
import ReactDOM from 'react-dom';

// 创建组件的方式（第一种）
// 默认，如果不做单独配置，不能省略 .jsx 后缀名
// import Hello from './components/Hello'

// @ 符号表示，项目根目录中的 src 这一层目录
import Hello from '@/components/Hello'

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