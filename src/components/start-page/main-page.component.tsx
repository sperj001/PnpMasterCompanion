import React from "react";
import logo from '../../images/PnPMasterCompanion.jpg'
interface StartState{
    chosen: String
} 

export class StartPage extends React.Component<any, StartState>{
  constructor(props: any) {
      super(props);
      this.state = {
        chosen: '-'
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  clear = () => {
    this.setState({
      chosen: "-"
    })
  }
    
  handleSubmit = async(event: any) => {
    event.preventDefault();
    switch(event.target.value){
      case "New":
          this.props.history.push("/new");
        break;
      case "Load":

        break;
      case "Join":

        break;
    }
  }
    
  handleMouseOver = (event: any) => {
    switch(event.target.value){
      case "New":
        this.setState({
          chosen: "Set-up and create a new game." 
        });
        break;
      case "Load":
        this.setState({
          chosen: "Load and continue a game." 
        });
        break;
      case "Join":
        this.setState({
          chosen: "Join another player's game." 
        });
        break;
    }
      
  }

  render(){
      return (
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt='Logo'/>
            <label htmlFor="name">What Would You Like To Do: </label>
            <br/>
            <button onClick={this.handleSubmit} onMouseOver={this.handleMouseOver} onMouseOut={this.clear} value={"New"} type="submit">Create New Game</button>
            <br/>
            <button onClick={this.handleSubmit} onMouseOver={this.handleMouseOver} onMouseOut={this.clear} value={"Load"} type="submit">Load Existing Game</button>
            <br/>
            <button onClick={this.handleSubmit} onMouseOver={this.handleMouseOver} onMouseOut={this.clear} value={"Join"} type="submit">Join A Game</button>
            <p>{this.state.chosen}</p>
          </header>
        </div>
      );
  }
}