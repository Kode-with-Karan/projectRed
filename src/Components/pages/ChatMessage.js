import React from 'react'
import './ChatMessage.css'

function ChatMessage(props) {
  if (props.uname === props.name && props.rec === props.reciever) {
    return (
      <div className='messageBoxRight'>
        <p>{props.message}</p>
      </div>
    )
  } else {
    
    if (props.name === props.rec && props.uname === props.reciever) {
      return (
        <div className='messageBox'>
          <div className="name">
            {Array.from(props.name)[0]}
          </div>
          <p>{props.message}</p>
        </div>
      )
    }
  }

}

export default ChatMessage