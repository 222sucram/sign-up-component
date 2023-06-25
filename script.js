const inputForm = [...document.querySelectorAll(".input-form")]
const submitForm = document.querySelector(".btn-trial")
const errorMsgForm = [...document.querySelectorAll(".error")]
const signUp = document.querySelector(".form-signup")


inputForm.forEach((input) => {
    input.addEventListener("input", (e) => {
        if(e.target.validity.valid) {
            input.classList.remove("invalid")
            input.classList.add("valid") 

            if(e.target.classList.contains("first")) {
                errorMsgForm[0].textContent = ""
            }
            if(e.target.classList.contains("last")) {
                errorMsgForm[1].textContent = ""
            }
            if(e.target.classList.contains("email")) {
                errorMsgForm[2].textContent = ""
            }
            if(e.target.classList.contains("password")) {
                errorMsgForm[3].textContent = ""
            }
        }
        if(!input.validity.valid) {
            input.classList.remove("valid")
            input.classList.add("invalid")

            if(e.target.classList.contains("first")) {
                errorMsgForm[0].textContent = "Please enter your first name."
            }
            if(e.target.classList.contains("last")) {
                errorMsgForm[1].textContent = "Please enter your last name."
            }
            if(e.target.classList.contains("email")) {
                errorMsgForm[2].textContent = "Please enter a valid email."
            }
            if(e.target.classList.contains("password")) {
                errorMsgForm[3].textContent = "Enter a password with at least 8 characters."
            }
        }
    })
})

submitForm.addEventListener("click", (e) => {
    e.preventDefault()
  
    inputForm.forEach((input) => {
        if(input.classList.contains("invalid") || input.textContent == "") {
            input.classList.remove("vallid")
            input.classList.remove("invalid")
            if(input.classList.contains("first")) {
                input.classList.add("invalid")
                errorMsgForm[0].textContent = "Please enter your first name."
            }
            if(input.classList.contains("last")) {
                input.classList.add("invalid")
                errorMsgForm[1].textContent = "Please enter your last name."
            }
            if(input.classList.contains("email")) {
                input.classList.add("invalid")
                errorMsgForm[2].textContent = "Please enter a valid email."
            }
            if(input.classList.contains("password")) {
                input.classList.add("invalid")
                errorMsgForm[3].textContent = "Enter a password with at least 8 characters."
            }
        }

        if(input.classList.contains("valid") || !input.textContent == "") { 
            if(input.classList.contains("first")) {
                input.classList.add("valid")
                errorMsgForm[0].textContent = ""
            }
            if(input.classList.contains("last")) {
                input.classList.add("valid")
                errorMsgForm[1].textContent = ""
            }
            if(input.classList.contains("email")) {
                input.classList.add("valid")
                errorMsgForm[2].textContent = ""
            }
            if(input.classList.contains("password")) {
                input.classList.add("valid")
                errorMsgForm[3].textContent = ""
            }
        }
    })

    if(inputForm[0].classList.contains("valid") && inputForm[1].classList.contains("valid") && inputForm[2].classList.contains("valid") && inputForm[3].classList.contains("valid")) {
        signUp.submit()
    }
})