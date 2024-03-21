import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    console.log("box~~", this.props.source)
    let result;
    if (this.props.title === "computer" && this.props.result !== "tie" && this.props.result !== "are you ready?") {
        result = this.props.result === "win" ? "lose" : "win";
    }
    else {
        result = this.props.result;
    }
    
    return (
      <div className = {`box ${this.props.title} ${result}`}>
        <h1>{this.props.title}</h1>
        <div>
            <img src = {this.props.source === null ? "https://mblogthumb-phinf.pstatic.net/MjAyMzExMDRfMzIg/MDAxNjk5MDg2MzgwMjUy.lJyAk6Jbofs0JCpCTJ_0i083P10f11VJO13QJC_Fo30g.nQQBaD5VI1MAuSRGSlRfN02Xt5Tj_ZcJmTIdO5NHpBQg.JPEG.ghkdwjdtka/download.jpg?type=w800": this.props.source}></img>
        </div>
        <h3 className = {`${result}`}>{result}</h3>
      </div>
    )
  }
}
