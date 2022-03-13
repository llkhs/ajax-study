// 引入
const express = require('express');
const { response } = require('express');
// 创建
const app = express();

//创建路由规则
app.get('/server-get',(request, response)=> {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('HELLO AJAX GET');
})

app.post('/server-post',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 遇到自定义响应头时可以设置
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('HELLO AJAX POST');
})

app.all('/server-json', (request, response) => {
     response.setHeader('Access-Control-Allow-Origin', '*');
     response.setHeader('Access-Control-Allow-Headers', '*');
    // JSON 数据打包
     const data = {
        name: 'llkhs'
    };
    // 对对象进行字符串转换
     let str = JSON.stringify(data);
    // 响应体设置
    response.send(str);
    // response.send("HELLO AJAX JSON");
});

// IE 用户
app.get('/server-ie', (request, response) => {
     response.setHeader('Access-Control-Allow-Origin', '*');
     response.send("F**K IE :" + Date.now());

});

// 请求超时：延时2s
app.all('/timeout', (request, response) => {
     response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
         response.send(" ");    //无效响应
    }, 3000)

});

// jQuery
 app.all('/server-jquery', (request, response) => {
     response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // JSON 数据打包
    const data = {name: 'llkhs'};
    response.send(JSON.stringify(data));

});

// axios
app.all('/server-axios',(request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // JSON 数据打包
    const data = {name: 'llkhs', data : 'HELLO AJAX axios'};
    response.send(JSON.stringify(data));
})

// 监听
app.listen(8000, ()=>{
    console.log("监听8000已启动......");
})
