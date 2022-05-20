import React, { Component } from "react";
import "./styles.css";
import ChatWindow from "./ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }];

class AllTogetherExercise2Exercise extends Component {
  /*
   If the user did not type anything, he/she should not be
   allowed to submit.
   */

  state = {
    messages: []
    //messagesEntered: "",
    //username: ""
  };

  onAddItem = (username, messagesEntered) => {
    this.setState({
      messages: [
        ...this.state.messages,
        { username: username, text: messagesEntered }
      ]
    });
  };

  render() {
    console.log(this.state.messages);

    // let buttonDisabledAmy = true
    //    if (this.state.messagesAmy) {buttonDisabledAmy=false}

    //  if (this.state.messagesJohn) {buttonDisabledJohn=false}

    return (
      <div className="container">
        {users.map((user, id) => (
          <ChatWindow
            key={user.username}
            id={id}
            messages={this.state.messages}
            onAddItem={this.onAddItem}
            users={users}
          />
        ))}
      </div>
    );
  }
}

export default AllTogetherExercise2Exercise;
