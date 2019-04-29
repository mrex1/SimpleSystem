import React from 'react'
import {Card,Button} from 'react-bootstrap'

export default class JobList extends React.Component{
    constructor(props){
        super(props)
        this.getItems = this.getItems.bind(this)
    }
    getItems(){
        let output = []
        let {jobs} = this.props
        for(let job of jobs){
            output.push(
                <Card style={{ width: '18rem' }} key={job.title+job.id}>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Text>{job.details}</Card.Text>
                    <Button  onClick={
                        ()=>{
                            this.props.delJob(job.id)
                        }
                    }>Delete job</Button>
                    </Card.Body>
                </Card>
            )
        }
        return output
    }
    render(){
        return(
            <div className="JobList">
                {this.getItems()}
            </div>
        )
    }
}