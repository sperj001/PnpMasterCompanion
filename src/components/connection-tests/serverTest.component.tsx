import React from "react";

interface ServertestState{
    name: String,
    greeting: String
} 

export class ServerTest extends React.Component<ServertestState, any>{
    constructor(props: any) {
        super(props);
        this.state = {
          name: "",
          greeting: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event: { target: { value: any; }; }) {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = async(event: any) => {
        event.preventDefault();
        let readable: String = "";
        if(this.state.name !== ""){
          try{
          const resp = await fetch(`http://localhost:3001/api/greeting/${this.state.name}`, {
            method: 'GET',
            headers: {
              'content-type': 'application/json'
            }
            });
            const uncoded = await resp.json();
            console.log(uncoded);
            readable = uncoded.greeting;
          }
          catch{
            console.log("Error talking to server")
          }
        }
        else{
          try{
            const resp = await fetch(`http://localhost:3001/api/greeting`, {
              method: 'GET',
              headers: {
                'content-type': 'application/json'
              }
              });
              const uncoded = await resp.json();
              console.log(uncoded);
              readable = uncoded.greeting;
            }
            catch{
              console.log("Error talking to server")
            }
        }
        this.setState({
          greeting: readable
        })
      }

    render(){
        return (
          <div className="App">
            <header className="App-header">
              <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Enter your name: </label>
              <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
              </form>
              <p>{this.state.greeting}</p>
            </header>
          </div>
        );
    }
}