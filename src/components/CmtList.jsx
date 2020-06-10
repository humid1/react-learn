// 使用 class 关键字，定义父组件
import React from 'react';

// 导入评论项子组件
import CmtItem from '@/components/CmtItem';

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
            <h1>这是评论列表组件</h1>
            {this.state.commentsList.map( item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}
