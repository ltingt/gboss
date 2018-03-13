/*
*用户登陆的路由组件
* */

import React from "react"
import {NavBar,WingBlank, List, InputItem, WhiteSpace, Button} from 'antd-mobile'
import Logo from "../../components/logo/logo"

export default class Login extends React.Component{
  state={
    name:'',
    pswd:'',

  }

  handleChange=(name,value)=>{
    this.setState({[name]:value})
  }
  login=()=>{
    console.log(JSON.stringify(this.state))
  }
  toRegister=()=>{
    this.props.history.replace('/register')
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

            <Button onClick={this.login}  type="primary">登陆</Button>
            <Button onClick={this.toRegister}>还没有注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}