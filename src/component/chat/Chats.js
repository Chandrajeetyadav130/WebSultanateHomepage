import "./chat.css"
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdCircle } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import React, { useState } from "react";
const Chats = () => {
  const [chat,setChat]=useState("");
  const [Messages,setMessages]=useState([])
  const [useName]=useState("Coolmate");
  const handleSubmit=(e)=>{
    console.log(e.target.value)
    setChat(e.target.value)
  }
  const handleClick=()=>{
  if (chat.trim() !== "") {
    setMessages([...Messages, chat]);
    setChat("");
  }
  }
    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className='chatMainContaier'>
      <header className="chatHeader">
        <div className="chatIconandContent"><IoChatbubbleEllipsesSharp size={15} color={Messages.length===0?"white":"green"}/><span className="chatCount">chat</span></div>
        <div className="right_chat_count">
          <MdCircle size={15} color={Messages.length===0?"white":"green"}/><span className="chatCount">{Messages.length||0}</span>
          <FaChevronRight />
        </div>
      </header>
      <main className="chat_msg_container">
        {Messages.map((val)=>{
          return(
            <React.Fragment key={val}>
              <span style={{color:"white"}}>{useName}</span>
            <p className="chat_heading">{val}</p>

            </React.Fragment>
          )
        })}
      </main>
      <footer className="inputBtn">
        <input type="text"  value={chat}  onKeyDown={handleKeyDown} onChange={handleSubmit} placeholder="type a message"
         style={{color:"#ffff"}} /><button onClick={handleClick}><IoIosSend size={15} color="#FFFF"/></button>
      </footer>


    </div>
  )
}

export default Chats