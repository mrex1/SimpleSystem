import React from 'react'
import './App.css';
import * as Pages from './pages'

export default class App extends React.Component{
	constructor(props){
		super(props)
		this.state={PageName:"Account",key:""}
		this.go = this.go.bind(this)
		this.storeKey = this.storeKey.bind(this)
		this.retrieveKey = this.retrieveKey.bind(this)
	}
	
	go(PageName){
		this.setState({PageName})
	}
	storeKey(key){
		this.setState({key})
	}
	retrieveKey(){
		return this.state.key
	}
  render(){
	  let {PageName} = this.state
	  let ActivePage = Pages[PageName]
	  let globalprops = {go:this.go, storeKey:this.storeKey,retrieveKey:this.retrieveKey}
	  return(
	  <ActivePage
	  {...globalprops}
	  />);
	}
}

