//Email/password validator 

let validate = document.querySelector("#validate") ;
let submit = document.querySelector("#submit") ;
validate.addEventListener("click" , function(det) 
    {
        submit.click();
        console.log("Clicked") ;
    }
)

let email = document.querySelector("#email") ;
let password = document.querySelector("#password") ;
let form = document.querySelector("form") ;
let emailErrorMsg = document.querySelector("#emailError") ;
let passwordErrorMsg = document.querySelector("#passwordError") ;
let correct = document.querySelector("#Correct") ;
let isValid = true ;
function validateEmail()
{
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailCheck = emailPattern.test(email.value) ;
    if (!emailCheck)
    {
        isValid = false ;
        emailMessage.style.display = "initial" ;
        emailErrorMsg.textContent = "Email is Incorrect" ;
    }
    else
    {
        emailMessage.style.display = "none" ;
    }
}
function validatePassword()
{
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;     
    let passwordCheck = passwordPattern.test(password.value) ;
    
    if (!passwordCheck)
    {
        isValid = false ;
        passwordMessage.style.display = "initial" ;
        document.querySelector("#passwordError").textContent = "Password is Incorrect" ;
    }
    else
    {
        passwordMessage.style.display = "none" ;
    }
}

form.addEventListener ("submit" , function(dets) 
    {
        dets.preventDefault();

        isValid = true ;

        validateEmail() ;
        validatePassword() ;
        if (isValid)
        {
            document.querySelector("#correct").style.display = "initial" ;
            document.querySelector("#correct").textContent = "Everything is Correct" ;
        }
    }
)
email.addEventListener("input",validateEmail) ;
password.addEventListener("input",validatePassword) ;
let passShow = false ; //password is hidden ;
document.querySelector("#eye").addEventListener("click" , function()
                                                        {

                                                            if (passShow) //true password is show eye close 
                                                            {
                                                                document.querySelector("#eye").innerHTML = '<i class="ri-eye-close-line"></i>'//close eye
                                                                passShow = false ;
                                                                password.type = "text";

                                                            }
                                                            else
                                                            {
                                                                    document.querySelector("#eye").innerHTML = '<i class="ri-eye-line"></i>' //open eye
                                                                    passShow = true ;
                                                                    password.type = "password";

                                                            }

                                                        })