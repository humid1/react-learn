// console.log("ok");

// 1、导入React，这两个导入的时候，接收的成员名称，必须要和以下一致
import React from 'react'; // 创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'; // 把创建好的组件 和 虚拟DOM 放到页面上展示的

// 2、创建虚拟DOM 元素
//   参数1：创建元素的类型、字符串、表示元素的名称
//   参数2：是一个对象或 null，表示 当前这个 DOM 元素的属性
//   参数3：子节点（包括 其他 虚拟DOM，获取文本子节点）
//   参数n：其他子节点
// <h1 id="myh1" title="this is title">这是一个大标题</h1>
const myh1 = React.createElement('h1', { id: 'myh1',title: 'this is title' }, '这是一个大标题');

// <div>这是div元素<h1 id="myh1" title="this is title">这是一个大标题</h1></div>
const mydiv = React.createElement('div', null, '这是div元素', myh1);

// 渲染页面上的 DOM 结构，最好的方式就是写 HTML 代码

// 3、使用 ReactDOM 把虚拟DOM 渲染到页面上
//    参数1：要渲染的那个虚拟DOM元素
//    参数2：指定页面上DOM元素，当做容器
ReactDOM.render(mydiv, document.getElementById("app"));


