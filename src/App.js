

//  1- Пример 




// import React from "react";

// class App extends React.Component {

	
// 	constructor(props) {
// 		super(props);

// 		this.intervalFlag = null;

// 		this.state = {
// 			title: "Текущее время",
// 			date: new Date(),
// 			counter: 0,
// 		};
// 	}

// 	componentDidMount() {
// 		this.intervalFlag = setInterval(() => {
// 			this.setState((state, props) => ({
// 				date: new Date(),
// 				counter: state.counter + 1,
// 			}));
// 		}, 1000);
// 	}

// 	componentDidUpdate() {}

// 	componentWillUnmount() {
// 		clearInterval(this.intervalFlag);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<p>{this.state.title}</p>
// 				<p>{this.state.counter}</p>
// 				<p>{this.state.date.toLocaleTimeString()}</p>
// 			</div>
// 		);
// 	}
// }

// export default App;


// 2 Пример 

import React, { Component } from 'react'

export default class DidMount extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Этот текст будет удален через 5 секунд '
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({name: "Текст был удален и сработал метот componentDidMount "})
    }, 5000)

  }
  render() {
    return (
      <div>
       <p>{this.state.name}</p>
      </div>
    )
  }
}