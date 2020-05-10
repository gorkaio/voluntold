require("./app.scss");

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props)  {
    super(props)
    this.state = {
      query: '',
      result: ''
    }
  }
  
  updateQuery = (e) => {
    this.setState({query: e.target.value})
  }
  
  chooseVoluntold = (e) => {
    e.preventDefault()
    const voluntold = this.raffle(this.state.query);
    this.setState({result: voluntold})
  }

  raffle = (query) => {
    const names = query.replace(/,+/g, ',').replace(/,\s*,/g, ',').replace(/,$/, '').split(',')
    return names[Math.floor(Math.random() * names.length)].trim();
  }
  
  render() {
    return (
      <form onSubmit={this.chooseVoluntold}>
        <div className="field">
          <label className="label">Names</label>
          <div className="control">
            <input value={this.state.query} onChange={this.updateQuery} className="input" type="text" placeholder="Comma-separated list (ie: Beth, Julie, Gabriel)" autocomplete="off"/>
          </div>
        </div>
        <div className="field">
          <button className="button is-link" type="submit">Choose voluntold</button>
        </div>
        <div id="result">{this.state.result}</div>
      </form>
    )
  }
}

const container = document.getElementById('app');
const component = <App />;

ReactDOM.render(component, container);
