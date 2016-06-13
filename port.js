var SerialPort = require('C:/Program Files/nodejs/node_modules/serialport').SerialPort;
var port = new SerialPort('com3',{ baudrate: 9600});

port.on('open', function() {
    port.write('w',function(){
        console.log('sds');
    });
});

port.on('data', function (data) {
    console.log('Data: ' + data);
});





















// SerialPort.list(function (err, ports) {
//     ports.forEach(function(port) {
//         console.log(port.comName);
//         console.log(port.pnpId);
//         console.log(port.manufacturer);
//     });
// });





