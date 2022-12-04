import React from "react";


class Main extends React.Component{
  constructor(){
    super();
    this.state ={
      show:false
    }
  }

  toggleShow = () =>{
    this.setState({show: !this.state.show})
  }
  render(){
    return(
      <div>
        <p>Welcome to the site</p>
        <button onClick={this.toggleShow}>Click here to see hidden message</button>
        {this.state.show ? <p>You are going to have an amazing day!</p> : null }
      </div>
    )
  }
}

export default Main; 