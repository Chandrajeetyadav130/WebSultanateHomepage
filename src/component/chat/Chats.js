import "./chat.css"
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdCircle } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
const Chats = () => {
  return (
    <div className='chatMainContaier'>
      <header className="chatHeader">
        <div className="chatIconandContent"><IoChatbubbleEllipsesSharp size={15} color="green"/><span className="chatCount">chat</span></div>
        <div className="right_chat_count">
          <MdCircle size={15} color="green"/><span className="chatCount">1000</span>
          <FaChevronRight />
        </div>
      </header>
      <main className="chat_msg_container">
        <h1>chat msgh</h1>
      </main>
      <footer className="inputBtn">
        <input type="text" value="" placeholder="type a message" /><button><IoIosSend size={15} color="#FFFF"/></button>
      </footer>


    </div>
  )
}

export default Chats