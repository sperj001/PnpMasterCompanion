import React, { Dispatch } from "react";
import { connect } from 'react-redux';
import { IState, IConnection } from "../reducers";
import { createConnection } from "net";

interface ConnectionState{
    
} 

interface ConnectionProps{
    connection?: IConnection,
    createConnection?: () => any
}

export class ConnectionComponent extends React.Component<ConnectionProps, ConnectionState>{
    constructor(props: any) {
        super(props);
        this.state = {

        };
      }
    
    componentWillMount = () => {
        console.log("I am here");
        if(this.props.createConnection){
            console.log("Will run connection");
            this.props.createConnection();
        }

    }
    
    render(){
        return (
            <>
            </>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return  {
      connection: state.connection
    }
  }
  
  const mapDispatchToProps = {
    createConnection: createConnection
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ConnectionComponent);