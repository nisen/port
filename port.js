var SerialPort = require('C:/Program Files/nodejs/node_modules/serialport').SerialPort;
var port = new SerialPort('com3');
// port.close();
// port.open();

port.on('open', function() {
    port.write('a', function(f) {
        console.log(f);
    });
});












// SerialPort.list(function (err, ports) {
//     ports.forEach(function(port) {
//         console.log(port.comName);
//         console.log(port.pnpId);
//         console.log(port.manufacturer);
//     });
// });





