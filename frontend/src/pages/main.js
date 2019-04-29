import React from 'react';
import JobList from './components/JobList'
import {getJobs,postJobs,delJobs,logout} from '../api'
import {Navbar,Button,Modal,FormControl} from 'react-bootstrap'

export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {jobs:[],show:false,title:"",details:""}
        this.loadJobs = this.loadJobs.bind(this)
        this.addJob = this.addJob.bind(this)
        this.delJob = this.delJob.bind(this)
        this.showAddJobWindow = this.showAddJobWindow.bind(this)
        this.HideAddJobWindow = this.HideAddJobWindow.bind(this)
        this.handleDetails = this.handleDetails.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.Logout = this.Logout.bind(this)
    }
    componentDidMount(){
        this.loadJobs()
        
    }
    loadJobs(){
        let callback = (r)=>{
            if(r.data.success===1){
                let jobs = r.data.jobs
                this.setState({jobs})
            }   
        }
        let auth_token = this.props.retrieveKey()
        getJobs(auth_token,callback)
    }
    addJob(){
        let {title,details} = this.state
        let job = {title,details}
        if(title===""){
            alert("Please fill in the title")
            return false;
        }
        let auth_token = this.props.retrieveKey()
        let callback = (r)=>{
            if(r.data.success===1){
                this.loadJobs()
                this.setState({title:"",details:""})
                this.HideAddJobWindow()
            }else{
                alert(r.data.msg)
            }
        }
        postJobs(auth_token,job,callback)
    }
    delJob(jobid){
        let auth_token = this.props.retrieveKey()
        let callback = (r)=>{
            if(r.data.success===1){
                this.loadJobs()
            }else{
                alert(r.data.msg)
            }
        }
        delJobs(auth_token,jobid,callback)
    }
    showAddJobWindow(){
        this.setState({show:true})
    }
    HideAddJobWindow(){
        this.setState({show:false})
    }
    handleTitle(e){
        let title = e.target.value
        this.setState({title})
    }
    handleDetails(e){
        let details = e.target.value
        this.setState({details})
    }
    Logout(){
        let auth_token = this.props.retrieveKey
        let callback = (r)=>{
            this.props.go("Account")
        }
        logout(auth_token,callback)
    }
    
    render(){
        let {jobs,show} = this.state
        return(
            <div className="background">
                <Navbar bg="light">
                    <Navbar.Brand>Jobs</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Button onClick={this.showAddJobWindow}>Add</Button>
                        <Button variant="secondary" onClick={this.Logout}>Logout</Button>
                    </Navbar.Collapse>
                </Navbar>
                {show?
                    <Modal.Dialog>
                    <Modal.Header>
                      <Modal.Title>New Job</Modal.Title>
                    </Modal.Header>
                  
                    <Modal.Body>
                    Title:
                      <FormControl onChange={this.handleTitle} value={this.state.title}/>
                      Details:
                      <FormControl onChange={this.handleDetails} value={this.state.details}/>
                    </Modal.Body>
                  
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.HideAddJobWindow}>Close</Button>
                      <Button variant="primary" onClick={this.addJob}>Add</Button>
                    </Modal.Footer>
                  </Modal.Dialog>:null}
                <JobList jobs={jobs} delJob={this.delJob}/>
            </div>
        )
    }
}