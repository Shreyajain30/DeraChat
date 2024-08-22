import React, { createRef } from "react";
import './MessageWindow.css'
const Message = (props) => (
    <div className={'message' + (props.self ? ' message-self' : '')}>
      <div className='message-username'>{props.username}</div>
      <div className='message-text'>{props.text}</div>
    </div>
  )
export default class MessageWindow extends React.Component {
  constructor(props) {
    super(props);
    this.messageWindow = createRef();
  }
  componentDidUpdate() {
    const messageWindow = this.messageWindow.current;
    //scrollTop is scrolled out of view =total height (shown +hidden due to scrolling)-height visible
      messageWindow.scrollTop = messageWindow.scrollHeight - messageWindow.clientHeight
  }
  render() {
    //object destructuring
    const { messages = [], username } = this.props;
    return (
      <div className="message-window" ref={this.messageWindow}>
        {messages.map((msg, i) => {
          return (
            <Message
              key={i}
              text={msg.text}
              username={msg.username}
              self={username === msg.username}
            />
          );
        })}
      </div>
    );
  }
}
