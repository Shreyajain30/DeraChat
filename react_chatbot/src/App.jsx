import React from "react";
import "./App.css";
import MessageWindow from "./Components/MessageWindow";
import TextBar from "./Components/TextBar";
import { registerOnMessageCallback, send } from "./websocket";
import User from './Components/user'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: null,
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.setUsername = this.setUsername.bind(this);
    registerOnMessageCallback(this.onMessageReceived.bind(this));
  }
  onMessageReceived(msg) {
    //as communication is in string format so need to parse back as object
    msg = JSON.parse(msg);
    this.setState({ messages: this.state.messages.concat(msg) });
  }
  setUsername(name) {
    this.setState({
      username: name,
    });
  }
  sendMessage(text) {
    const message = {
      username: this.state.username,
      text: text,
    };
    //ws uses strings for communication
    send(JSON.stringify(message));
  }
  render() {
    return this.state.username == null ? (
      <User setUsername={this.setUsername}/>
    ) : (
      <div className="message-container">
        <div className="title">Messages</div>
        <MessageWindow
          messages={this.state.messages}
          username={this.state.username}
        />
        <TextBar onSend={this.sendMessage} button={"Send!"} msg={true}/>
      </div>
    );
  }
}
