var jsonrpc = require('trac-jsonrpc-client');

var connection = null;
function PopcornWrapper() {
}

PopcornWrapper.prototype.connect = function(cb) {
    connection = new jsonrpc("http://127.0.0.1:8008", function hasConnected(err, res){ 
        auth: { username: "popcorn", password: "popcorn" }
        cb();
    });
};

module.exports = PopcornWrapper;
