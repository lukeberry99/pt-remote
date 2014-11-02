var jsonrpc = require('trac-jsonrpc-client');
var connected = false;
var connecting = false;
var url = "";
var cli = null;

function PopcornWrapper() {
}

PopcornWrapper.prototype.connect = function(config) {
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
                //console.log(data);
                connected = true;
                return connected;
            }
        });
    } else {
        console.error('PopcornWrapper requires config to have 4 arugments, host, port, user and pass');
    }

}

PopcornWrapper.prototype.sendUp = function(handler) {
    if(connected) {
        cli.callRpc('up', [], function(err, data, result) {
            if(err) {
                console.error(err);
            } else { 
                console.log(data);
                console.log(result);
            }
        });
        handler(false, result);
    } else {
        handler(new Error("Connection not made"));
    }
}


module.exports = PopcornWrapper;
