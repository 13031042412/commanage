const webpack = require('webpack')

module.exports = {
    // baseUrl: '/',  //根路径
    // outputDir: 'dist',  //构建输出目录
    // assetsDir: 'assets',  //静态资源目录(js,css,img,fonts)
    // lintOnSave: false,  //是否开启eslint保存检查,有效值：true || flase || 'error'
    devServer: {    //开发服务设置
        // open: false,    //运行服务时是否自动打开站点,默认：false
        // host: '192.168.1.104/',  //默认：localhost，一般不用配置
        // port: 8080, //默认端口：8080
        // https: false,   //是否开启https
        // hotOnly: false, //热模块更新
        proxy: {    //配置跨越 --重要--
            '/api': {
                target: 'https://xcx.jiangshi.org/',   //要跨越的目标地址
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }

    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",

                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    }
};

