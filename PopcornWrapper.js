var jsonrpc = require('trac-jsonrpc-client');
var connected = false;
var url = "";
var cli = null;
function PopcornWrapper(config) {
    var argCount = 0;
    for(_obj in config) {
        if(config.hasOwnProperty(_obj)) {
            argCount++;
        }
    }
    if(argCount == 4) {
        // Set URL
        url = "http://" + config['host'] + ":" + config['port'];
        // Set CLI
        cli = new jsonrpc(url, {
            auth: {  username: config['user'], password: config['pass'] }
        });
        // Check connection
        cli.callRpc('ping', [], function(err, data, result) {
            if(err) {
                console.log(err);
                connected = false;
            } else {
                console.log("Connection made");
                console.log(data);
            }
        });
        
    } else {
        console.log('[ERROR]: PopcornWrapper requires config to have 4 arguments, host, port, user and pass');
    }
}


module.exports = PopcornWrapper;

//function testSend() {
    //var cli = new jsonrpc(url, {
        //auth: {username: config['user'], password: config['pass']}
    //});
    //cli.callRpc('ping', [], function(err, data, result) {
      
    //});
//};

//testSend();
