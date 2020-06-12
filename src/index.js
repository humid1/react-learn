// 1、导入React
import React from 'react';
import ReactDOM from 'react-dom';

// 导入评论列表组件
// import CmtList from '@/components/CmtList';

import BindEvent from '@/components/BindEvent'
import BindInputValue from '@/components/BindInputValue'


// 3.调用 render 函数渲染
ReactDOM.render(<div>
   <BindInputValue></BindInputValue>
</div>, document.getElementById("app"));
