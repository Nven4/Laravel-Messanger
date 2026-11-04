
const aplicationform = document.querySelector("form")
const register = document.querySelectorAll("a")[1]
let nameexist = true

console.log(aplicationform)

const namefield = aplicationform.elements.name

namefield.addEventListener("input", function(){

    const allerrormsg = document.querySelectorAll(".errortext")
    for(let errmsg of allerrormsg){
        errmsg.remove()
    }

    namefield.classList.remove("errorfield")

    nameexist = false

    fetch("/checkname", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fieldcontent: namefield.value,
        })
    })
    .then((responce)=>{
        return responce.json()
    })
    .then((result)=>{
        if(result[namefield.value]){
            nameexist = true
            AddErrorMessage("Такое имя уже сущевтсвует", namefield, 1)
        }

        
    })
})

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
    const secondpassword = aplicationform.elements.secondpassword
    
    if(name.value == ""){
        AddErrorMessage("Поле должно быть заполнено", name, 1)
    }

    else if(name.value.length < 4){
        AddErrorMessage("Пароль должен содержать больше 4 символов", name, 1)
    }

    else if(name.value.includes(" ")){
        AddErrorMessage("Имя не может содержать пробелы", name, 1)
    }

    if (password.value == ""){
        AddErrorMessage("Поле должно быть заполнено", password, 2)
    }

    if (secondpassword.value == ""){
        AddErrorMessage("Поле должно быть заполнено", secondpassword, 3)
    }

    else if (password.value.length < 6){
        AddErrorMessage("Пароль должен содержать больше 6 символов", password, 2)
    }

    else if(secondpassword.value != password.value){
        AddErrorMessage("Пароли не совпадают", password, 2)
        AddErrorMessage("Пароли не совпадают", secondpassword, 3)
    }

    else if(nameexist){
        AddErrorMessage("Такое имя уже сущевтсвует", name, 1)
    }

    else if(name.value.length > 16){
        AddErrorMessage("Имя не может содержать больше 16 символов", name, 1)
    }

    else{
        fetch("/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.value,
                    password: password.value
                })
            })
            .then((responce) => {
                return responce.json()
            })
            .then((result) => {
                console.log(result)
                if(result.status == "200"){
                    window.location.href = "/login"
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
    else if(contnumber == 3){
        console.log(3)
        errorscontainers[2].insertAdjacentHTML("beforeend", `<p class='errortext'>${msg}</p>`)
    }
}