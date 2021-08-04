let mess = "mess gret modu";

module.exports.message = mess;

module.exports.getMessage = function(message) {
    return mess + " hui" + message;
}