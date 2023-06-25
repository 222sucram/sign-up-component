const inputForm = document.querySelectorAll(".input-form")
const submitForm = document.querySelector(".btn-trial")
const errorMsgForm = [...document.querySelectorAll(".error")]


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
        
    })
})