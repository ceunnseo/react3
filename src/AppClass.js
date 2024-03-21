import React, { Component } from 'react'
import BoxClass from './components/BoxClass'
import "./App.css"

const choice = {
  rock : "https://img.freepik.com/premium-vector/stone-with-plant-boulders-vector-illustration_202271-2089.jpg",
  scissors : "https://media.istockphoto.com/id/1282547894/ko/%EB%B2%A1%ED%84%B0/%ED%88%AC%EB%AA%85%ED%95%9C-%EB%B0%B0%EA%B2%BD%EC%9D%98-%EC%95%84%EC%9D%B4%EC%BD%98-%EA%B7%B8%EB%A3%A8%EB%B0%8D.jpg?s=612x612&w=0&k=20&c=twqyjJ9O0pZ33oQFZRYowal82dn2Ig2Ghe_BmcLUnrk=",
  paper : "https://i.namu.wiki/i/HZUMLJivyd1QwdPZfAO8OB2kRCdjbZCnS2o5m5mKCtj9ZSZtULRv9eSLQtbMLoVyRzyw0H8XSGIeb8QIVude1A.webp"
}
const keys = Object.keys(choice)

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userPick : null,
      computerPick : null,
      result : "are you ready?"
    };
  }
  play = (user) => {
    let computer = this.random();
    this.setState({
      userPick:user,
      computerPick : computer,
      result : this.judegement(user, computer)
    })
    console.log("setState!", this.state.userPick, this.state.computerPick);
    console.log("result!", this.state.result)
  }
  random = () => {
    const randomIdx = Math.floor(Math.random() * 10) % 3;
    return keys[randomIdx]
  }
  judegement = (user, computer) => {
    console.log("judegement!", user, computer)
    if (user === computer) {
      return "tie"
    }
    else if (user === "rock") {
      return computer === "scissors" ? "win" : "lose"
    }
    else if (user === "scissors") {
      return computer === "paper" ? "win" : "lose"
    }
    else if (user === "paper") {
      return computer === "rock" ? "win" : "lose"
    }

  }
  render() {
    return (
      <div className = "main">
        <div className = "resMain">
          <BoxClass title = "you" choice = {this.state.userPick} result = {this.state.result} source = {choice[this.state.userPick] === undefined ? null : choice[this.state.userPick]}/>
          <div id = "vs">⚡</div>
          <BoxClass title = "computer" choice = {this.state.computerPick} result = {this.state.result} source = {choice[this.state.computerPick] === undefined ? null : choice[this.state.computerPick]}/>
        </div>
        <div className = "btnMain">
          <button onClick = {()=>this.play("rock")}>✊</button>
          <button onClick = {()=>this.play("scissors")}>✌️</button>
          <button onClick = {()=>this.play("paper")}>✋</button>
        </div>
      </div>

    )
  }
}

