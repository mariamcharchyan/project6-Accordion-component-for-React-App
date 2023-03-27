import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeIndex: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then((res) => res.json())
      .then((item) => this.setState({ data: item.data }));
  }

  handleClick(i) {
    if (this.state.activeIndex === i) {
      return this.setState({ activeIndex: null });
    }
    this.setState({ activeIndex: i });
  }

  render() {
    const { data, activeIndex } = this.state;

    return (
      <div>
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => this.handleClick(i)}>
              <h3>{item.name}</h3>
              <p>{activeIndex === i ? "-" : "+"}</p>
            </div>
            <div className= "content show">
            {/* <div className={activeIndex === i ? "content show" : "content"}> */}
              {activeIndex === i ? item.capital : null}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Accordion;