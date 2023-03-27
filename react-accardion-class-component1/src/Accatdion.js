import React, { Component } from 'react';

class Accardion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      text: !prevState.text,
    }));
  }

  render() {
    const { item } = this.props;
    const { text } = this.state;

    return (
      <div className="item">
        <div className="title" onClick={this.handleClick}>
          <h3>{item.name}</h3>
          <p>{text === false ? "+" : "-"}</p>
        </div>
        <div className="content show">
         {text? "The capital is "+item.capital : ""}
         {/* {text && item.capital} */}
        </div>
      </div>
    );
  }
}

export default Accardion;