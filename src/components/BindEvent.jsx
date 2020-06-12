//#region
// click事件 this.setState({})
//#endregion

import React from 'react';

export default class BindEvent extends React.Component {
    constructor() {
        super();
        // 私有数据
        this.state = {
            msg: '消息11111',
            name: 'xingming'
        }
    }

    render() {

        return <div>
            BindEvent 组件
            <hr/>    

            {/* 在 React 中，有一套自己的事件处理机制，事件名：是驼峰命名 */}
            {/* <button onClick={this.clickHandle}>按钮</button> */}

            {/* 注意：onClick 只接受 funtion 作为处理函数 */}
            {/* 注意：箭头函数，代表一个匿名 function 函数 */}
            <button onClick={ () => this.clickHandle('传递的参数') }>按钮</button>

            <p>{ this.state.msg }</p>
            <p>{ this.state.name }</p>
        </div>
    }

    // 这是一个实例方法
    // clickHandle(e) {
    //     console.log('点击了:' + e);
    // }

    clickHandle = (e) => {
        // console.log('点击了:' + e);

        // 注意：在 React 中，如果想为 state 中的数据，重新赋值，不推荐使用 this.state.***
        // 要使用 React 提供的 this.setState( {msg: '123'} )
        // this.state.msg = '修改了 msg 数据';

        this.setState({
            // 在 setState,只会把对应的 state 状态更新，而不会覆盖其他的 state 状态
            msg: '修改了 msg'
        },function(){
            // 需要在 回调函数中获取最新数据
            console.log(this.state.msg);
        })

        // this.setState() 方法执行是异步的
        // console.log(this.state.msg);
    }
}