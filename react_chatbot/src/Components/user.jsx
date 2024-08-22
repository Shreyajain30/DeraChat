import React from "react";
import TextBar from "./TextBar";
import './user.css'
export default function User({setUsername}){
return (
  <div className="outer-container">
    <div className="pattern"></div>
    <div className="image-container"><img  className="image"src="girl.jpg" alt="girl"></img></div>
    <div className="container">
        <h1>Instant Connections, Real-Time Conversations 💬</h1>
        <p>Bring your community together with our online group chat app, where everyone is always connected. Enjoy real-time chats and instant updates with all members online. Start conversations, share moments, and stay in touch effortlessly with DeraChat!</p>
        <h2 className="container-title">Enter username</h2>
        <TextBar onSend={setUsername} button={"Join!"} />
      </div>
      </div>
)
}