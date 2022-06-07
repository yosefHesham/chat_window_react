
import React from 'react'

const MessageList = props => {
	const {messages,userName} = props
    return (<ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === userName ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>)
}

export default MessageList