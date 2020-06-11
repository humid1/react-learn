import React from 'react';

// 导入样式
import cssObj from '@/css/cmt.css';

export default function CmtItem(props) {
    return <div className={cssObj.item}>
        <h1 className={cssObj.itemTitle}>评论人：{props.user}</h1>
        <p className={cssObj.itemContent}>评论内容：{props.content}</p>
    </div>
}

// ==================== 行内样式 ========================

// 第一种封装方式 (样式对象分离)
// const divStyle = { border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' }
// const h1Style = { fontSize: '20px' }
// const pStyle = { fontSize: '16px' }

// 第二种方式 (合并为大对象)
// const styles = {
//     divStyle: { border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' },
//     h1Style: { fontSize: '20px' },
//     pStyle: { fontSize: '16px' }
// }

// 第三种方式 (抽离为单独 样式 js对象 模块)
// import styles from '@/components/styles';

// 使用 function 构造函数构造无状态组件
// export default function CmtItem(props) {
//     return <div style={ styles.divStyle }>
//         <h1 style={ styles.h1Style }>评论人：{props.user}</h1>
//         <p style={ styles.pStyle }>评论内容：{props.content}</p>
//     </div>
// }