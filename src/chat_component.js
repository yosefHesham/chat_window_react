import React from 'react'
import MessageList from './message_list.js'
import MessageInput from './message_input.js'
const ChatWindow = (props) => {
	const {userName,messages,addMessage} = props
    
    
    return ( <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{userName}</div>

			<MessageList messages={messages} userName={userName} />            
			<MessageInput userName={userName} addMessage={addMessage} />
         	
          </div>
)

}

export default ChatWindow