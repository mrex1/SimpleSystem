import React from 'react'
import {Button,ButtonGroup } from 'react-bootstrap'

 export default class Tabs extends React.Component{
     constructor(props){
         super(props)
         this.state = {Active:this.props.tabs[0]}
         this.getTabs = this.getTabs.bind(this)
     }

     getTabs(){
         let {tabs,currentTab} = this.props
         let {Active} = this.state
         let output = []
         let setActiveTab = (tab)=>{
             currentTab(tab)
             this.setState({Active:tab})
         }
         for(let tab of tabs){
             output.push(
                <Button key={tab} onClick={()=>setActiveTab(tab)}>
                    {tab}
                </Button>
            )
         }
         return output
     }

     render(){
         return(
            <div className="d-flex flex-column">
                <ButtonGroup size="lg">
                    {this.getTabs()}
                </ButtonGroup>
            </div>
         )
     }
 }