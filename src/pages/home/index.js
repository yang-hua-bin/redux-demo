import React from 'react'
//导入store
import store from '../../store'
//导入action
import {sendAction} from '../../action'
export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            declaration:'明天王世垚一定能考400分'
        }
        
    }
    handleClick = () => {
        const action = sendAction(this.state.declaration)
        //发送action 利用store
        store.dispatch(action)
    }
    //当我们组件加载完毕的时候注册监听
    componentDidMount(){
        store.subscribe(()=>{
            console.log("这个是函数监听",store.getState());
            this.setState({})
        })
    }
    render(){
        return(
            <div>
                <button onClick = {this.handleClick} >点我点我，发送一个action</button>
                <div> {store.getState().value} </div>
            </div>
        )
    }
}




