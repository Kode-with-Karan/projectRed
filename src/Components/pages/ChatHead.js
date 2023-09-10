import React from 'react'
import './ChatHead.css'
function ChatHead(props) {
  return (
    <div className="userHead">
      <div className="uimg" >{Array.from(props.rname)[0]}</div>
      <div className="user" >
        <div className="username">
          {props.rname}
          </div>
        <div className="usermsg">{props.username}</div>
      </div>
      
    </div>
  )
}

export default ChatHead