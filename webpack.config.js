const path = require('path');
// 导入 在内存中自动生成 index 页面插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 创建一个插件实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), //源文件
    filename: 'index.html' // 生成的内存中的首页名称
});


// 向外暴露一个打包配置对象，因为 webpack 是基于 node 构建的，所以 webpack 支持所有 node api 语法
module.exports = {
    mode: 'development', // production or development
    // 在 webpack 4.x 中，有一个很大的特性，就是 约定大于配置，约定默认的打包入口路径是 src  ---> index.js
    plugins: [
        htmlPlugin
    ],
    // webpack 默认只能打包处理 .js 后缀名文件，像 .png .vue 无法主动处理，所以需要配置第三方 loader
    module: { // 所有第三方 模块配置文件
        rules: [ // 第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 必须添加 exclude 排除项
        ]
    }
}

// 此类语法不行, 这是 ES6 中，向外导出模块的 API，对应的导入 import ** from '标识符'
// export default {}
// 那些特性 node 支持？ Chrome 浏览器支持哪些，则 node 就支持哪些