import React from 'react'
import {login as ApiLogin} from '../../../api'
import {InputGroup,FormControl,Button } from 'react-bootstrap'

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {username:"",password:""}
        this.login = this.login.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleUsername(e){
        let username = e.target.value
        this.setState({username})
    }
    handlePassword(e){
        let password = e.target.value
        this.setState({password})
    }
    login(){
        let {username,password} = this.state
        let user = {username,password}
        let callback = (r)=>{
            this.props.storeKey(r.data.key)
            this.props.go('Main')
        }
        let errorHandle = (e)=>{
            alert("unable to login, please check your username and password")
        }
        ApiLogin(user,callback,errorHandle)
    }
    render(){
        return(
            <div style={{ alignSelf: 'center'}}>
            <InputGroup size="lg" style={{width:'15rem',alignSelf:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Username:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={this.handleUsername}/>
            </InputGroup>
            <InputGroup size="lg"  style={{width:'15rem',alignSelf:'center',marginBottom:'1rem'}}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Password:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="password" onChange={this.handlePassword}/>
            </InputGroup>
                    <Button onClick={this.login} style={{width:'15rem',alignSelf:'center'}}>
                        Login
                    </Button>
            </div >
        )
    }
}