// 同步和一步请求
// 在控制台输出页面源文件
var xhr =new XMLHttpRequest();
xhr.open("GET",'/bar/foo.txt',true);
// 第三个参数为true，表示请求以异步模式执行
xhr.onload = function(e){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            console.log(xhr.responseText);
        }else{
            console.error(xhr.statusText)
        }
    }
};
xhr.onerror = function(e){
    console.error(xhr.statusText);
};
xhr.send(null);

