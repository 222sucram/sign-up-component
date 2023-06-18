const inputForm = document.querySelectorAll(".input-form")
const submitForm = document.querySelector(".btn-trial")
const errorMsgForm = document.querySelectorAll(".error")

inputForm.forEach((input) => {
    input.addEventListener("input", (e) => {
        if(input.validity.valid) {
            input.classList.add("valid")
        }
        if(!input.validity.valid) {
            input.classList.add("invalid")
            errorMsgForm.forEach((err) => {
                if(!input.validity.valid && err.classList.contains("password")) {
                    err.textContent = "21345"
                }
            })
        }
    })
})

// loop over form els
// add eventlistener for input
// check validity of each input
// 