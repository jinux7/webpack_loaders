var _ = require('lodash');
//var add = require('./add.js')

module.exports = function(source){
    // console.log(source);
    /*var template = _.template(source + 'loader has worked!');
    return 'module.exports = ' + template;*/



    var str = source.replace('/\\n/g','') + "经过处理的内容！！"; //loader加载进来的文件内容进行下处理
    var fn = 'function(){return "'+str+'"}'; //讲一个函数以字符串的形式写好
    return 'module.exports = ' + fn;         //loader模块固定输出方式，都是以字符串形式输出的
};