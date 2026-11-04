
const applicationForm = document.querySelector("form")
const textinput = applicationForm.elements.text
const sendbtn = applicationForm.elements.btn
const msgcontainer = document.querySelector(".msg")
const msgscontainer = document.querySelector(".messages")
const navmenubtn = document.querySelector(".back")
const navmenu = document.querySelector(".navsetmenu")
const logoutbtn = document.querySelectorAll(".pos")[0]

logoutbtn.addEventListener("click" , () => {
    window.location.href = "/logout"
})

navmenubtn.addEventListener("click", function(){
    navmenu.classList.add("navsetmenuOn")
})

window.addEventListener("click", function(event){
    console.log(document.querySelector(".logobackground"))
    if(event.target == document.querySelector(".logobackground") || event.target == document.querySelector(".username") || event.target == this.document.querySelector(".imgsett") || event.target == this.document.querySelector(".back")) console.log("target");
    else navmenu.classList.remove("navsetmenuOn")
})

fetch("/getmsg", {
    method: "GET",
})
.then((response)=>{
    return response.json()
})
.then((result)=>{
    for(let mess of result.result){
        msgcontainer.insertAdjacentHTML("beforeend",`<div class='msgsend'><p class='username'>${mess["name"]}</p><p>${mess["text"]}</p></div>`)
    }
})

setInterval(() => {
    fetch("/getmsg", {
        method: "GET",
    })
    .then((response)=>{
        return response.json()
    })
    .then((result)=>{
        if(document.querySelectorAll(".msgsend").length != result.result.length){
            msgcontainer.insertAdjacentHTML("beforeend",`<div class='msgsend'><p class='username'>${result.result[result.result.length-1]["name"]}</p><p>${result.result[result.result.length-1]["text"]}</p></div>`)
            
            let allmsg = document.querySelectorAll(".msgsend")
            allmsg[allmsg.length-1].scrollIntoView({behavior: "smooth"})
        }
    })
}, 50)

console.log("work")
let emptytext = true

textinput.addEventListener("input", function(){
    if (textinput.value.length == 0){
        emptytext = true
        sendbtn.classList.add("btndisabled")
    }
    else{
        emptytext = false
        sendbtn.classList.remove("btndisabled")
    }
})

applicationForm.addEventListener("submit", function(event){
    event.preventDefault()

    if(!emptytext){
        fetch("/main", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: textinput.value
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            console.log(result)
        })
    }

    textinput.value = ""
})