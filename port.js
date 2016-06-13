var readline = require('readline');
var serialPort = require('serialport').SerialPort;
var port = new serialPort('com3',{ baudrate: 9600});
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr=["w","a","s","d","z","x","u","i","j","k"];
// var arr="wasdzxuijk";
rl.setPrompt('> ');
console.log('输入 help 查看操作');
rl.prompt();

rl.on('line', function (cmd) {
    if(cmd=='help'){
        help();
    }else if(arr.indexOf(cmd) != -1){
        input(cmd);
    }else{
        rl.prompt();
    }
});

function input(cmd){
    port.write(cmd, function(err) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        port.drain();
    });
}

function help(){
    console.log(' w(上) a(左) s(后) d(右)');
    console.log(' u(短拳) i(长拳) j(短踢) k(长踢)');
    console.log(' z(改变) x(选中)');
    rl.prompt();
}

port.on('data', function (data) {
    console.log(data.toString());
    rl.prompt();
});

port.on('error',function(){
    console.log('串口被占用');
    rl.prompt();
});
