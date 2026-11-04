//
const submitbutton = document.querySelector("button")
const aplicationform = document.forms.base

aplicationform.addEventListener("submit", function(event){
    event.preventDefault()

    let FormData = new FormData(aplicationform)
    console.log(FormData)
})