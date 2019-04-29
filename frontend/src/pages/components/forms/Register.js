import React from 'react'
import {register} from '../../../api'
import {InputGroup,FormControl,Button,Alert} from 'react-bootstrap'

export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {username:"",password1:"",password2:""}
        this.register = this.register.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.confirmPassword = this.confirmPassword.bind(this)
    }

    handleUsername(e){
        let username = e.target.value
        this.setState({username})
    }
    handlePassword(e){
        let password1 = e.target.value
        this.setState({password1})
    }
    confirmPassword(e){
        let password2 = e.target.value
        this.setState({password2})
    }
    register(){
        let {username,password1,password2} = this.state
        let user = {username,password1,password2}
        let callback = (r)=>{
            this.props.go('Main')
        }
        let errorHandle = (e)=>{
            let errors = e.response.data
            console.log(errors)
            this.setState({errors})
        }
        register(user,callback,errorHandle)
    }
    render(){
        let {errors} = this.state
        return(
            <div style={{ alignSelf: 'center'}}>
            <InputGroup size="sg" style={{width:'15rem',alignSelf:'center',marginBottom:'1rem',marginTop:'1rem'}}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Username:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={this.handleUsername}/>
            </InputGroup>
            {!!errors&&!!errors.username?
                (<Alert variant="danger">{errors.username}</Alert >):
                null}
            <InputGroup size="sg"  style={{width:'15rem',alignSelf:'center',marginBottom:'1rem'}}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Password:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="password" onChange={this.handlePassword}/>
            </InputGroup>
            {!!errors&&!!errors.password1?
                (<Alert variant="danger">{errors.password1}</Alert >):
                null}
            <InputGroup size="sg"  style={{width:'15rem',alignSelf:'center',marginBottom:'1rem'}}>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Confirm Password:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="password" onChange={this.confirmPassword}/>
            </InputGroup>
            {!!errors&&!!errors.password2?
                (<Alert variant="danger">{errors.password2}</Alert >):
                null}
                {!!errors&&!!errors.non_field_errors?
                (<Alert variant="danger">{errors.non_field_errors}</Alert >):
                null}
            <Button onClick={this.register} style={{width:'15rem',alignSelf:'center'}}>
                Register
            </Button>
            </div >
        )
    }
}