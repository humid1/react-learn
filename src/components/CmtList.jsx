// 使用 class 关键字，定义父组件
import React from 'react';

// 导入评论项子组件
import CmtItem from '@/components/CmtItem';

// 导入样式 ( 对全局组件都生效 )
import styleObj from '@/css/cmt.css';
console.log(styleObj);

export default class CmtList extends React.Component {
    constructor() {
        super();
        this.state = {
            commentsList: [
                { id: 1, user: '张三1', content: '这是评论的内容1' },
                { id: 2, user: '张三2', content: '这是评论的内容2' },
                { id: 3, user: '张三3', content: '这是评论的内容3' },
                { id: 4, user: '张三4', content: '这是评论的内容4' },
                { id: 5, user: '张三5', content: '这是评论的内容5' },
            ]
        }
    }
    render() {
        return <div>
            {/* <h1 className={ styleObj.title + ' test' }>这是评论列表组件</h1> */}
            <h1 className={ [styleObj.title,'test'].join(' ') }>这是评论列表组件</h1>
            {this.state.commentsList.map( item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>

        // =================== 行内样式 =======================
        // return <div>
        //     {/* 在 jsx 中，如果想要写行内样式，不能直为 style 设置字符串的值 */}
        //     {/* 应该写成 style={ { color: 'red' } } */}
        //     <h1 style={ { color: 'red', fontSize: '35px',textAlign: 'center',fontWeight: '400' } }>这是评论列表组件</h1>
        //     {this.state.commentsList.map( item => <CmtItem {...item} key={item.id}></CmtItem>)}
        // </div>

        
    }
}
