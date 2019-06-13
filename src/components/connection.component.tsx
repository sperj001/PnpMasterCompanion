import React  from "react";
import { connect } from 'react-redux';
import { IState, IConnection } from "../reducers";
import { createConnection } from "../actions/connection.actions";

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
        if(this.props.createConnection){
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