import React from 'react';
import * as forms from './components/forms'
import Tabs from './components/Tabs'
import { Card } from 'react-bootstrap';

const tabsTitle = Object.keys(forms) 

export default class Account extends React.Component{
    constructor(props){
        super(props)
        this.state={currentTab:"Login"}
        this.setCurrentTab = this.setCurrentTab.bind(this)
    }

    setCurrentTab(currentTab){
        this.setState({currentTab})
    }

    render(){
        let {currentTab} = this.state
        let Form = forms[currentTab]
        return(
            <Card style={{ width: '18rem',alignSelf:'center'}}>
                <Tabs currentTab={this.setCurrentTab} tabs={tabsTitle}/>
                <Form go={this.props.go} storeKey={this.props.storeKey}/>
            </Card>
        )
    }
}