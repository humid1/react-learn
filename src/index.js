// 1、导入React
import React from 'react';
import ReactDOM from 'react-dom';

let a = 10;
let b = 'str字符串';
let boo = true;
let title = '6666';
const h1 = <h1>标题1</h1>;
const arr = [
    <h2>标题2</h2>,
    <h3>标题3</h3>
]
const arrStr = ['小米','大米','红米','黑米'];

// 方案1：定义一个空数组，用来存放 名称，标签
const nameArr = [];
arrStr.forEach( item => {
    const temp = <h5>{item}</h5>;
    nameArr.push(temp);
})

// 数组 map 方法,必须写 return 方法
const res = arrStr.map( (item) => {
    return <h5>{item}</h5>;
})

// 3.调用 render 函数
// 当需要在 jsx 控制的区域内，写 js 表达式，则需要把 js 代码写到 {} 中
ReactDOM.render(<div>
    { a + 11 }
    <hr/>
    { b } , { 'smdx' }
    <hr/>
    { boo ? '对的' : '错的' }
    <p title={title}>这是文本 p 标签</p>
    <hr/>
    { h1 }
    <hr/>
    { arr }
    <hr/>
    { nameArr }
    <hr/>
    { arrStr.map(item => <h3>{item}</h3> ) }
    </div>, document.getElementById("app"));