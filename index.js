var PopcornWrapper = require('./PopcornWrapper');

// Setup your config 
var config = {
    host: '127.0.0.1',
    port: '8008',
    user: 'popcorn',
    pass: 'popcorn'
};
var popcorn = new PopcornWrapper();
popcorn.sendUp(function(err, cb) {
    if(err) {
        console.error(err);
    } else {
        console.log("test");
    }
});
