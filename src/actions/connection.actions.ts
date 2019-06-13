var localtunnel = require('localtunnel');



export const connectionTypes = {
  SET_ADDRESS: "SET_ADDRESS"
}

export const createConnection = () => (dispatch: any) => {
  try {
    // create tunnel link here
    if(localtunnel){
        let tunnel = localtunnel(5631, function(err:any, tunnel:any) {
            if (err){
                console.log(err);
            }
        
            // the assigned public url for your tunnel
            // i.e. https://abcdefgjhij.localtunnel.me
            console.log(tunnel.url);
        });
        tunnel.on('close', function() {
            // When the tunnel is closed
        });
        
        // test if connection is possible via  the  tunnel
        // if so send the address over
        dispatch({
            payload: {
            address: tunnel.url
            },
            type: connectionTypes.SET_ADDRESS
        });
    }
    else{
        console.log("LocalTunnel not found");
    }
  } catch (err) {
    console.log(err);
  }
}