
import React, {Component} from 'react'

class MessageInput extends Component {
  
  state = {
    "message":""
  }
  
  isDisabled() {
  	if(this.state.message.trim().length === 0) {
    return true;
    }
    return false
  }
  
  handleChange = (e) =>  {
	this.setState({[e.target.name]:e.target.value})  
    console.log()
  }
  
  sendMessage(e) {
  	e.preventDefault()
	const {message} = this.state
    
    if(message.trim().length === 0) {
    alert("Cannot send empty message")
      return
    }
    const {addMessage,userName} = this.props
    
    addMessage({username:userName,text:message})
    
    this.setState({message:""})
  }
  
 render()  {
    	const {message} = this.state

 return (<div>
              <form className="input-group" onSubmit={(e) => this.sendMessage(e)}>
                <input type="text" className="form-control" onChange={this.handleChange} name="message" value={message} placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>)
 } 
  
}

export default MessageInput