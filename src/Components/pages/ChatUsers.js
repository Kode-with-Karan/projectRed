import React from 'react'
import './ChatUsers.css'


const ChatUsers = (props) => {
  const click = () =>{
    props.seluser(props.index);
    props.receive(props.index);
  }

  return (
    <>
    <div className="userContainer" onClick={() =>{click()}}>
      <div className="uimg" >{Array.from(props.username)[0]}</div>
      <div className="user" >
        <div className="username">
          {
            (props.username.length > 15)?props.username.substring(0, 15)+"...":props.username
          }
          </div>
        <div className="usermsg">{props.username}</div>
      </div>
      
    </div>
    <span></span>
    </>
  )
}

export default ChatUsers