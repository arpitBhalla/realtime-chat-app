console.clear()
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

let chatData = []
let users=[]
let userNames=[]
io.on('connection', (socket) => {
    socket.on("connected", (uid,name, func) => {
        if(uid && !users.includes(uid)){
            users.push(uid)
            userNames.push(name)
            socket.broadcast.emit("new connection", name,userNames)
        }
        func(chatData,userNames)
    })
    socket.on('send', (chat, func) => {
        chatData.push({
            ...chat,
            timestamp: new Date().getTime()

        })
        socket.broadcast.emit("new chat", chat)
        func("Sent");
    });
    socket.on("typing",(name)=>{
        socket.broadcast.emit("getTyping",name)
    })
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});