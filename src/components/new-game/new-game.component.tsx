import React from "react";
var FileSaver = require('file-saver');

interface NewGameState{
    designatedName: string,
    discordUsername: string,
    roll20Username: string,
    gameName: string,
    errorWarning: string
} 

export class NewGamePage extends React.Component<any, NewGameState>{
    constructor(props: any) {
        super(props);
        this.state = {
        designatedName: '',
        discordUsername: '',
        roll20Username: '',
        gameName: '',
        errorWarning: "-"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async(event: any) => {
        event.preventDefault();
        if(this.testBlanks()){
            this.setState({
                errorWarning: '-'
            });
            this.creationSuccess();
        }
        else{
            this.setState({
                errorWarning: 'Make Sure to Fill Out All Fields!'
            });
        }
        
    }
    
    creationSuccess = async() => {
        let saveFile = {
            macAddess: {
                designatedName: "000000000000"
            },
            designatedName: this.state.designatedName,
            discordUsername: this.state.discordUsername,
            roll20Username: this.state.roll20Username
        }
        const saveMe = await JSON.stringify(saveFile);
        var blob = new Blob([saveMe], {type: "text/plain;charset=utf-8"});
        try{
            window.alert("Please save this file. It will contain your game's data within it so make sure to remember where you save it at.");
            FileSaver.saveAs(blob, `PnPMC_${this.state.gameName}`);
        }
        catch{
            await this.setState({
                errorWarning: 'Issues Encountered Attempting To Save!'
            });
        }
    }

    testBlanks = ():boolean =>  {
        if(this.state.designatedName === ''){
            return false;
        }
        else if(this.state.roll20Username === ''){
            return false;
        }
        else if(this.state.discordUsername === ''){
            return false;
        }
        else if(this.state.gameName === ''){
            return false;
        }
        else{
            return true;
        }
    }

    handleDesignatedName = async(event: any) =>{
        event.preventDefault();
        await this.setState({
            designatedName: event.target.value
        });
    }
    
    handleDiscordUsername = async(event: any) =>{
        event.preventDefault();
        await this.setState({
            discordUsername: event.target.value
        });
    }

    handleRoll20Username = async(event: any) =>{
        event.preventDefault();
        await this.setState({
            roll20Username: event.target.value
        });
    }

    handleGameName = async(event: any) =>{
        event.preventDefault();
        await this.setState({
            gameName: event.target.value
        });
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Starting a new game eh?</h1>
                    <p>Lets just get some info from ya.</p>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><p>Desired Player Name</p></td>
                                    <td><input type="text" value={this.state.designatedName} onChange={this.handleDesignatedName}/></td>
                                </tr>
                                <tr>
                                    <td><p>Discord Username</p></td>
                                    <td><input type="text" value={this.state.discordUsername} onChange={this.handleDiscordUsername}/></td>
                                </tr>
                                <tr>
                                    <td><p>Roll20 Username</p></td>
                                    <td><input type="text" value={this.state.roll20Username} onChange={this.handleRoll20Username}/></td>
                                </tr>
                                <tr>
                                    <td><p>Game Name</p></td>
                                    <td><input type="text" value={this.state.gameName} onChange={this.handleGameName}/></td>
                                </tr>
                            </tbody>
                        </table>
                        <button type='submit'>Create Game</button>
                    </form>
                    <h1>{this.state.errorWarning}</h1>
                </header>
            </div>
        );
    }
    }