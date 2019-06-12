var localtunnel = require('localtunnel');



export const connectionTypes = {
  SET_ADDRESS: "SET_ADDRESS"
}

export const createConnection = () => async(dispatch: any) => {
  try {
    // create tunnel link here
    if(localtunnel){
        let tunnel = localtunnel(5631, function(err:any, tunnel:any){
            if(err){
                console.log(err);
            }
        })
        console.log(tunnel.url);
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
        console.log("LocalTunnel not  found");
    }
  } catch (err) {
    console.log(err);
  }
}