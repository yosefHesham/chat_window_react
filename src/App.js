import React, { Component } from 'react';
import logo from './logo.svg';
import ChatWinow from './chat_component.js'
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
  	messages:[]
  }
  
  addMessage = (message) => {
  this.setState(prevState => ({
  messages: [...prevState.messages, message]
}))
  }
  
  

  render() {
    const {messages} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
         <ChatWinow userName={users[0].username} messages={messages} addMessage={this.addMessage} />
 		 <ChatWinow userName={users[1].username } messages={messages}  addMessage={this.addMessage} />

        </div>
      </div>
    );
  }
}

export default App;
