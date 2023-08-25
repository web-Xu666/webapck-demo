const {resolve}=require("path") //node模块化语法，resolve是拼接路径的
const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    entry:"./src/index.js",//入口文件
    output:{
        filename:"bundle.js",//打包之后生成的js文件名
        path:resolve(__dirname,"dist")  //__dirname代表的是node中的一个变量，代表当前文件夹的绝对路径
    },
    //loader 让webpack去处理那些非js文件
    module:{
        rules:[
            {
                //匹配.css结尾的文件
                test:/\.css$/,
                use:[
                    "style-loader",//创建一个标签，将js中的css样式字符串，加入到head中的style标签中
                    "css-loader"//将css文件以字符串的形式加载到js中 执行顺序从下往上，从右往左
                ]
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader" //将less编译成css
                ]
            },
            {
                test:/\.html$/,
                use:["html-loader"] //处理html中的img图片
            }
        ]
    },
    //插件
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html" //制定生成的html文件默认以该文件为模板
        })
    ],
    mode:"development",
    devServer:{
        port:8080,
    }

}