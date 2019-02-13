import React, { Component } from "react";

class Book extends Component {
  state = {
    hide: "hidden"
  };
  hidebook = () => {
    console.log("Hello");
    if (this.state.hide === "false") {
      this.setState({ hide: "hidden" });
    } else {
      this.setState({ hide: "false" });
    }
  };

  render() {
    return (
      <div>
        <ul>
          <h1 onClick={this.hidebook}>{this.props.book.title}</h1>
          <li className={this.state.hide}>{this.props.book.isbn}</li>
          <li className={this.state.hide}>{this.props.book.subtitle}</li>
          <li className={this.state.hide}>{this.props.book.author}</li>
          <li className={this.state.hide}>{this.props.book.published}</li>
          <li className={this.state.hide}>{this.props.book.publisher}</li>
          <li className={this.state.hide}>{this.props.book.pages}</li>
          <li className={this.state.hide}>{this.props.book.description}</li>
          <li>
            <a href={this.props.book.website}>Read More</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Book;
