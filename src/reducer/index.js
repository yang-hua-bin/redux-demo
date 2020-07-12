/*
    这个文件是创建reducer函数的，专门处理
    发送过来的action的
*/
const initState = {
    value :'默认值 老铁双击666'
}
const reducer = (state = initState,action) => {
    console.log("reducer",state,action)
    switch(action.type){
        case "send_type":
            return Object.assign({},state,action)
        default:
            return state;
    }
}

module.exports = {
    reducer
}
