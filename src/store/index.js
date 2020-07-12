/*
    store 相当于action和reducer的关联js
    同时也是通过store -> index.js 来进行start更新
*/ 
import {createStore} from 'redux'

//导入自己创建的 reducer
import {reducer} from '../reducer'

//构建 store 
const store = createStore(reducer)

export default store;