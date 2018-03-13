/*
*用户注册的路由组件
* */

import React from "react"
import {NavBar,WingBlank, List, InputItem, WhiteSpace, Radio, Button} from 'antd-mobile'
import Logo from "../../components/logo/logo"

const RadioItem = Radio.RadioItem
export default class Register extends React.Component{
  state={
    name:'',
    pswd:'',
    pswd2:'',
    type:'boss'
  }
  toLogo=()=>{
    this.props.history.replace('/login')
  }
  handleChange=(name,value)=>{
    this.setState({[name]:value})
}
  register=()=>{
    console.log(JSON.stringify(this.state))
  }
  render(){
    const {type}=this.state
    return(
      <div>
        <NavBar type="primary">随 便 招 聘</NavBar>
        <Logo></Logo>
       <WingBlank>
         <List>
           <InputItem onChange={val=>this.handleChange('name',val)}>用户名：</InputItem>
           <WhiteSpace></WhiteSpace>
           <InputItem type="password" onChange={val=>this.handleChange('pswd',val)}>密码：</InputItem>
           <WhiteSpace></WhiteSpace>
           <InputItem onChange={val=>this.handleChange('pswd2',val)}>确认密码：</InputItem>
           <WhiteSpace></WhiteSpace>
           <RadioItem
             checked={type==='genius'}
             onChange={()=>this.handleChange('type','genius')}>牛人</RadioItem>
           <WhiteSpace></WhiteSpace>
           <RadioItem
              checked={type==='boss'}
              onChange={val=>this.handleChange('type','boss')}
           >Boss</RadioItem>
           <WhiteSpace></WhiteSpace>
           <Button onClick={this.register}  type="primary">注册</Button>
           <Button onClick={this.toLogo}>已经有账号</Button>
         </List>
       </WingBlank>
      </div>
    )
  }
}