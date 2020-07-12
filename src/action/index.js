/*
    这是 action 构建函数
*/
const sendAction = (text) => {
    //我们需要返回一个action对象
    return{
        type:'send_type',
        value:text
    }
}

module.exports = {
    sendAction
}