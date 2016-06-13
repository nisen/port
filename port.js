var SerialPort = require('serialport').SerialPort;
var port = new SerialPort('com3',function writeAndDrain (data, callback) {
        port.write(data, function () {
        port.drain(callback);
    });
});
