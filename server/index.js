var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var chalk=require('chalk')
console.log(chalk.blue("Welcome"));
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


let chatData = []
let users = []
let userNames = []
app.get("/reset",(req,res)=>{
 chatData = []
 users = []
 userNames = []
 return res.send("Done Reset")
})
io.on('connection', (socket) => {
    socket.on("connected", (uid, name, func) => {
        if (uid && !users.includes(uid)) {
            users.push(uid)
            userNames.push(name)
            socket.broadcast.emit("new connection", name, userNames)
        }
        func(chatData, userNames)
    })
    socket.on('send', (chat, func) => {
        chatData.push({
            ...chat,
            timestamp: new Date().getTime()

        })
        socket.broadcast.emit("new chat", chat)
        func("Sent");
    });
    socket.on("typing", (name) => {
        socket.broadcast.emit("getTyping", name)
    })
});

const port = process.env.PORT || 3000;
http.listen(port, () => {
    console.log('listening on *:' + port);
});
