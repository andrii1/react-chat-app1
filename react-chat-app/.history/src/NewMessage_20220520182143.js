import React, { Component } from "react";
//const users = [{ username: "Amy" }, { username: "John" }];

class NewMessage extends Component {
  state = {
    messagesEntered: "",
    username: ""
  };

  onItemChange = event => {
    this.setState({
      messagesEntered: event.target.value,
      username: event.target.name
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const messagesEntered = this.state.messagesEntered;
    const username = this.state.username;

    this.setState({
      messagesEntered: ""
    });
    this.props.onAddItem(username, messagesEntered);
  };

  render() {
    let buttonDisabled = true;
    //let displaymessage;

    if (this.props.users[this.props.id].username === this.state.username) {
      if (this.state.messagesEntered) {
        buttonDisabled = false;
      }
    }

    //console.log(this.props.username);
    // console.log("u2", users[this.props.id].username);
    // console.log("message", this.props.messagesEntered);
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name={this.props.users[this.props.id].username}
            className="form-control"
            placeholder="Enter your message..."
            value={this.state.messagesEntered}
            onChange={this.onItemChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={buttonDisabled}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewMessage;
