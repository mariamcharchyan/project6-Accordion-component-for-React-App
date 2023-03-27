import React, { Component } from 'react';
import Accardion from './Accatdion';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(res => res.json())
      .then(item => this.setState({ data: item.data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="wrapper">
        <h2>Accordion component for React App<br/>Class component1</h2>
        <div className="accardion">
            {data.map((item, i) => (
              <Accardion item={item} key={i} />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
