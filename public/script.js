$(document).ready(function () {
    const addNewChat = (chat, byMe = false) => {
        $(".messages")
            .append($(`<div class="msg msg--${!byMe?"me":"them"}"></div>`)
                .append($('<div class="blockquote"></div>')
                    .append(
                        $('<div class="by"></div>').text(chat.displayName),
                        $('<div class="text"></div>').text(chat.text),
                        $('<div class="time"></div>').text(chat.time)
                    )))
        $(".messages").animate({
            scrollTop: 20000000
        }, "slow");
    }
    const socket = io();
    let displayName, uid
    if (!localStorage.getItem("uid") || localStorage.getItem("uid") == "") {
        displayName = prompt("Enter name") || "User"
        displayName=displayName[0].toUpperCase()+displayName.slice(1)
        uid = (new Date().getTime()).toString()
        localStorage.setItem("displayName", displayName)
        localStorage.setItem("uid", uid)
    } else {
        displayName = localStorage.getItem("displayName")
        uid = localStorage.getItem("uid")
    }
    const userBox = (users) => {
        let index = users.indexOf(displayName)
        index > -1 && users.splice(index, 1)
        $(".contact--userBox").text("You, " + users)
    }
    socket.emit("connected", uid, displayName, function (chats, users) {
        chats.forEach(chat => {
            addNewChat(chat, chat.uid == uid)
        })
        userBox(users)
    })
    socket.on("new connection", function (user, users) {
        $(".messages").append(`<h3 class="msg--date">${user} connected</h3>`)
        userBox(users)
    })
    socket.on("new chat", function (chat) {
        addNewChat(chat)
    })
    socket.on("getTyping", function (name) {
        $(".contact--typingBox").text(name + " is typing...")
        $(".contact--typingBox").show()
        $(".contact--userBox").hide()
        setTimeout(function () {
            $(".contact--typingBox").hide()
            $(".contact--userBox").show()
        }, 2000)
    })
    $(".msg-send").click(function () {
        if ($("input").val().trim() == "")
            return 0;
        const chat = {
            uid,
            displayName,
            text: $("input").val().trim(),
            time: new Date().toLocaleTimeString()
        }
        addNewChat(chat, true)
        $("input").val("")
        socket.emit("send", chat, function (data) {
            console.log(data)
        })
    })
    $("input").keyup(function (e) {
        if (e.keyCode == 13) {
            $(".msg-send").click()
            $(".contact--typingBox").hide()
            $(".contact--userBox").show()
        } else
            socket.emit("typing", displayName)
    })
})