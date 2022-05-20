import React, { Component } from "react";
import NewMessage from "./NewMessage";

//const users = [{ username: "Amy" }, { username: "John" }];

class ChatWindow extends Component {
  render() {
    return (
      <div className="chat-window">
        <h2>Awesome Chat</h2>
        <div className="name sender">
          {this.props.users[this.props.id].username}
        </div>

        <ul className="message-list">
          {this.props.messages.map((message, index) => (
            <li
              key={index}
              className={
                message.username === this.props.users[this.props.id].username
                  ? "message sender"
                  : "message recipient"
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>
        <NewMessage
          id={this.props.id}
          users={this.props.users}
          onAddItem={this.props.onAddItem}
        />
      </div>
    );
  }
}
export default ChatWindow;
