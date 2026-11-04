
const aplicationform = document.querySelector("form")

aplicationform.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("sumbit")

    const allerrormsg = document.querySelectorAll(".errortext")
    for(let errmsg of allerrormsg){
        errmsg.remove()
    }

    for(let field of aplicationform.elements){
        field.classList.remove("errorfield")
    }
    
    const name = aplicationform.elements.name
    const password = aplicationform.elements.password
    
    if(name.value == ""){
        AddErrorMessage("Поле должно быть заполнено", name, 1)
    }

    if (password.value == ""){
        AddErrorMessage("Поле должно быть заполнено", password, 2)
    }

    else if (password.value.length < 6){
        AddErrorMessage("Пароль должен содержать больше 6 символов", password, 2)
    }

    else{
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name.value,
                password: password.value,
            })
        })
        .then((responce) => {
            return responce.json()
        })
        .then((result)=>{
            if(result.status == "200"){
                window.location.href = "/"
            }
            else{
                AddErrorMessage("", name, 1)
                AddErrorMessage("Такого пользователя не сущевствует", password, 2)
            }
        })
    }

})

function AddErrorMessage(msg, element, contnumber){
    element.classList.add("errorfield")
    const errorscontainers = document.querySelectorAll(".errorcontainer")
    console.log(element)
    console.log(errorscontainers)

    if(contnumber == 1){
        console.log(1)
        errorscontainers[0].insertAdjacentHTML("beforeend", `<p class='errortext'>${msg}</p>`)
    }
    else if(contnumber == 2){
        console.log(2)
        errorscontainers[1].insertAdjacentHTML("beforeend", `<p class='errortext'>${msg}</p>`)
    }
}