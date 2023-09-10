import React, { useEffect } from 'react'
import { useState } from 'react';
import ChatMessage from './ChatMessage';
import './ChatApp.css';
import { getDatabase, push, set, ref, onChildAdded } from 'firebase/database'
import ChatUsers from './ChatUsers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ChatHead from './ChatHead';

function ChatApp(props) {
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState('');
  const [users, setUsers] = useState([]);
  const [recUser, setrecUser] = useState('');

  const db = getDatabase();
  const postListRef = ref(db, 'chats');
  const userListRef = ref(db, 'users');

  const updateHight = () => {
    const el = document.getElementsByClassName('chatContainer')[0];
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }

  const sendChats = () => {
    if (msg !== ""){
      const newPostRef = push(postListRef);
      // console.log(e.key)
      set(newPostRef, {
        name: props.username, message: msg, receiver: recUser
      })
      setMsg("")
    }
  }

  const sendChatsByEnter = (e) => {
    if (e.key === 'Enter'){
      sendChats()
    }
  }

  useEffect(() => {
    onChildAdded(postListRef, (data) => {
      setChats(chats => [...chats, data.val()])
      setTimeout(() => {
        updateHight();
      }, 100)
    });
  }, [])

  useEffect(() => {
    onChildAdded(userListRef, (data) => {
      setUsers(users => [...users, data.val()])
    });
  }, [])

  const receive = (index) => {
    setrecUser(users[index].username)
    setTimeout(() => {
      updateHight();
    }, 10)
  } 

  const selectUser = (index) => {
    for (let i = 0; i < users.length; i++) {
      if(i===index){
        document.getElementsByClassName("userContainer")[index].classList.add('activeUser')
      }else{
        document.getElementsByClassName("userContainer")[i].classList.remove("activeUser")
      }
    }
  }

  const switchChat = (e) =>{
    console.log(e.target.innerHTML === "Users")
    if (e.target.innerHTML === "Users"){
      document.getElementsByClassName("users")[0].classList.add("activeLeft")
      document.getElementsByClassName("usersChat")[0].classList.remove("activeRight")
      document.getElementsByClassName("chatUsers")[0].style.display = 'flex'
      document.getElementsByClassName("chats")[0].style.display = 'none'
    }else{
      document.getElementsByClassName("usersChat")[0].classList.add("activeRight")
      document.getElementsByClassName("users")[0].classList.remove("activeLeft")
      document.getElementsByClassName("chatUsers")[0].style.display = 'none'
      document.getElementsByClassName("chats")[0].style.display = 'block'
    }
  }

  return (
    <>
      <div className="switchChat" onClick={e => switchChat(e)}>
        <div className="users activeLeft">Users</div>
        <div className="usersChat">Chat</div>
      </div>
      {/* {(swChat === 'users')?hello:bye} */}
      <div className="chat">
        <div className="chatUsers">
          {users.map((user, index) => (
            <ChatUsers key={index} username={user.username} index={index} receive={receive} seluser={selectUser}/>
          ))}
        </div>
        <div className='chats'>
          <ChatHead rname={recUser}/>
          <div className="chatContainer">
            {chats.map((chat, index) => (
              <ChatMessage key={index} name={chat.name} message={chat.message} uname={props.username} reciever={chat.receiver} rec={recUser}/>
            ))}
          </div>
          <div className='inputField'>
            <input type="text" onKeyDown={e => sendChatsByEnter(e)} onInput={e => setMsg(e.target.value)} value={msg}
            placeholder='msg' />
            <button onClick={e => sendChats()}><FontAwesomeIcon icon={faPaperPlane} /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatApp