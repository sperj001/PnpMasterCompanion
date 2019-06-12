import React from "react";

interface ServertestState{
    name: string,
    greeting: String,
    accessLink: string,
    theirLink: string
} 

export class OtherServerTest extends React.Component<any, ServertestState>{
    constructor(props: any) {
        super(props);
        this.state = {
          name: "",
          greeting: "",
          accessLink: "",
          theirLink: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

      handleChange(event: { target: { value: any; }; }) {
        this.setState({
          theirLink: event.target.value
        })
      }
    
      handleSubmit = async(event: any) => {
        event.preventDefault();
        let readable: String = "";
        console.log(this.state.theirLink);
        console.log(`http://${this.state.theirLink}/api/greeting`);
        try{
            const resp = await fetch(`${this.state.theirLink}/api/greeting`, {
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
              console.log("Error talking to server");
            }
        this.setState({
          greeting: readable
        })
      }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                <h1>Here is your Address</h1>
                <p>{this.state.accessLink}</p>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Their Address: </label>
                <input
                id="name"
                type="text"
                value={this.state.theirLink}
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