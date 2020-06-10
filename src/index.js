// 1、导入React
import React from 'react';
import ReactDOM from 'react-dom';

// class 关键字创建组件
class Movie extends React.Component {
    // 构造器
    constructor() {
        // 由于继承了 React.Component 必须添加 super()
        super();
        // 只有调用了 super(),才能使用 this 关键字
        this.state = { // 这个 this.state = {} 就相当于 vue 中的 data() { return { } }
            msg: '这是组件内部的参数'
        }
    }
    // render 函数作用：渲染当前组件对应的虚拟 DOM 元素
    render() {
        // return null;
        // 在 class 关键字创建的组件中，要使用 props 参数，无需接收参数，只需要 this.props.*** 访问
        // this 表示当前组件的实例对象
        
        // 在 class 创建的组件中 this.state 上的数据，是可读写的
        this.state.msg = '修改了';

        return <div>
            这是 Movie 组件 -------  {this.props.name} -------- {this.props.age}
            <h2>{this.state.msg}</h2>
            </div>;
    }
}

const arr = {
    name: 'xiaoming',
    age: 22
}

// 3.调用 render 函数渲染
ReactDOM.render(<div>
    {/* <Movie name={arr.name} age={arr.age}></Movie> */}
    <Movie {...arr}></Movie>
</div>, document.getElementById("app"));
