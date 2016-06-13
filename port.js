var serialPort = require('C:/Program Files/nodejs/node_modules/serialport').SerialPort;
var port = new serialPort('com3',{ baudrate: 9600});

port.on('open', function () {
    port.write('w', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
    });
});

port.on('data', function (data) {
    console.log(data);
});

























// SerialPort.list(function (err, ports) {
//     ports.forEach(function(port) {
//         console.log(port.comName);
//         console.log(port.pnpId);
//         console.log(port.manufacturer);
//     });
// });





