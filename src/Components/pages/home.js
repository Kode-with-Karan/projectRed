import React, { useState } from 'react'
import ChatApp from './ChatApp';
import Sign from './Sign';
import { useParams } from 'react-router-dom';


function Home() {
  const { username } = useParams();
  return (
  <ChatApp username={username}/>
  )

}

export default Home