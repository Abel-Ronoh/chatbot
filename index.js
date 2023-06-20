var chatBackground=document.getElementById("chat");
var inputs= document.getElementById("inputs");
var send= document.getElementById("send");
var scam= document.getElementById("scam");
var contact = document.getElementById("contact");
var loading = document.getElementById("loading");

send.addEventListener("click",()=>{
    var message= document.createElement("div");

    var text=document.createTextNode(inputs.value);
    message.appendChild(text);
    chatBackground.appendChild(message);
    
})

scam.addEventListener("click",()=>{
    var res = document.createElement("div");
    var resText = document.createTextNode("I have been scammed");
    res.appendChild(resText);
    chatBackground.appendChild(res);
    scam.style.display = "none";
    contact.style.display = "none";
    loading.style.display="block";
    var chat1 = document.createElement("section");
    var chat1Text = document.createTextNode("Provide your username to revieew your history\n");
    var btn1 = document.createElement("button");
    btn1.textContent = "Login?"
    var btnText = document.createTextNode("Login?");
    // if (scam.click === true){
        setTimeout(function(){
            chat1.appendChild(chat1Text);
            chatBackground.appendChild(chat1);
            loading.style.display="none";
            chatBackground.appendChild(btn1);
        },3000)
    // }
})