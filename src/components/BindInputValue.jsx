//#region

//#endregion

import React from 'react';

export default class BindInputValue extends React.Component {
    constructor() {
        super();
        // 私有数据
        this.state = {
            msg: '消息11111'
        }
    }

    render() {

        return <div>
            BindInputValue 组件
            <hr/>    

            {/* 在 React 中，有一套自己的事件处理机制，事件名：是驼峰命名 */}
            {/* <button onClick={this.clickHandle}>按钮</button> */}

            {/* 注意：onClick 只接受 funtion 作为处理函数 */}
            {/* 注意：箭头函数，代表一个匿名 function 函数 */}
            <button onClick={ () => this.clickHandle('传递的参数') }>按钮</button>

            <p>{ this.state.msg }</p>

            {/* 如果只是把文本框的 value 属性，绑定到 state 状态，如果不提供 onClick 处理函数，得到的文本框，只是一个只读的 */}
            {/* 当为文本框绑定 value 值后，同时提供一个 readonly 或 添加 onChange 处理函数 */}
            <input type="text" value={this.state.msg} onChange={ (e) => this.textChange(e) } ref="textRef"/>
        </div>
    }

    // 每当文本框内容发生变化触发的函数
    textChange = (e) => {
        // console.log('变化了');

        // 在 onChange 事件中，选取文本框的值，有两种方案
        // 方案1：通过事件参数 e 来获取
        console.log(e.target.value);

        // 方案2：使用 this.refs.引用名称
        console.log(this.refs.textRef.value);

        this.setState({
            msg: e.target.value
        })
    }

    clickHandle = (e) => {
        this.setState({
            msg: e
        })
    }
}