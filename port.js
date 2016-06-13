var readline = require('readline');
var serialPort = require('C:/Program Files/nodejs/node_modules/serialport').SerialPort;
var port = new serialPort('com3',{ baudrate: 9600});
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('> ');
rl.prompt();

rl.on('line', function (cmd) {
    if(cmd =='w'){
        w();
    }else if(cmd == 's'){
        s();
    }else if(cmd == 'a'){
        a();
    }else if(cmd == 'd'){
        d();
    }else if(cmd == 'u'){
        u();
    }else if(cmd == 'i'){
        i();
    }else if(cmd == 'j'){
        j();
    }else if(cmd == 'k'){
        k();
    }else if(cmd == 'x'){
        x();
    }else if(cmd == 'z'){
        z();
    }else if(cmd == 'help'){
        help();
    }else{
        console.log('输入 help 查看操作');
        rl.prompt();
    }
});


function w(){
    port.write('w', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
        rl.prompt();
    });
}function s(){
    port.write('s', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
        rl.prompt();
    });
}function a(){
    port.write('a', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
        rl.prompt();
    });
}function d(){
    port.write('d', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
        rl.prompt();
    });
}function u(){
    port.write('u', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
        rl.prompt();
    });
}function i(){
    port.write('i', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
        rl.prompt();
    });
}function j(){
    port.write('j', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
        rl.prompt();
    });
}function k(){
    port.write('k', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
        rl.prompt();
    });
}function x(){
    port.write('x', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
        rl.prompt();
    });
}function z(){
    port.write('z', function(err, bytesWritten) {
        if (err) {
            return console.log('Error: ', err.message);
        }
        console.log(bytesWritten, 'bytes written');
        port.drain();
        rl.prompt();
    });
}

function help(){
    console.log(' w(上) a(左) s(后) d(右)');
    console.log(' u(短拳) i(长拳) j(短踢) k(长踢)');
    console.log(' z(改变) x(选中)');
    rl.prompt();
}

port.on('data', function (data) {
    console.log(data);
    rl.prompt();
});

port.on('error',function(){
    console.log('串口被占用');
    rl.prompt();
});
