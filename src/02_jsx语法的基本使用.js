// 1、导入React
import React from 'react';
import ReactDOM from 'react-dom';

// 2、创建虚拟DOM 元素
// 回顾：用 js 对象的形式，来表示 DOM 和 DOM 之间的嵌套关系
// const mydiv = React.createElement('div', { id: 'aaa', title: 'fdsfsd'}, '这是一个div元素');

// 注意：在js 文件中，默认不能写 这种类似于 HTML 的标记，否则打包会失效；
//   可以使用 babel 来转换这些 js 中的标签
//   这种在 js 中，混合写入类似于 HTML 的语法，叫 JSX 语法，符合 XML 规范的 JS
// JSX 语法的本质，还是在运行的时候，被转换成了 React.createElement() 形式来执行
const mydiv = <div id='mydiv' title='div title'>
    这是一个div元素2 
    <h1>dddd</h1>
</div>;

// 3、使用 ReactDOM 把虚拟DOM 渲染到页面上
ReactDOM.render(mydiv, document.getElementById('app'));


