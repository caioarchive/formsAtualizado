    const form = document.getElementById("form")
    const username = document.getElementById("username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const passwordConfimartion = document.getElementById("password-confirmation")
    



    form.addEventListener("submit", (event) => {
        event.preventDefault()

        checkForm()
    } )

    function checkInputUsername(){
        const usernameValue = username.value
            if(usernameValue === ""){
                errorInput(username, "Campo obrigatorio")
            }else{
                const formItem = username.parentElement
                formItem.classList = "form-content"
            }
    }
    function checkInputEmail(){
        const emailValue = email.value

        if(emailValue === ""){
            errorInput(email, "Email envalido")
        }else{
            const formItem = email.parentElement
            formItem.classList = "form-content"
        }
    }
    function checkInputPassoword(){
        const passwordValue = password.value

        if(passwordValue === ""){
            errorInput(password, "Senha invalida")
        }else if(passwordValue.length < 8){
            errorInput(password, "A senha precisa de 8 caracteres")
        }
        else{
            const formItem = password.parentElement
            formItem. classList = "form-content"
        }
    }
        function checkInputPassowordConfirmation(){
            const passwordConfimartionValue = passwordConfimartion.value
            const passwordValue = password.value
                if(passwordConfimartionValue === ""){
                    errorInput(passwordConfimartion, "A confirmação de senha é obrigatoria")
                }else if(passwordConfimartionValue !== passwordValue){
                    errorInput(passwordConfimartion, "A senha não são iguais.")
                }
                else{
                    const formItem = passwordConfimartion.parentElement;
                    formItem.className = "form-content"
                }
        }
    
    function   checkForm() {
        checkInputPassowordConfirmation()
        checkInputPassoword()
        checkInputEmail()
        checkInputUsername()

        const formItems = form.querySelectorAll(".form-content")
        const isValid = [...formItems].every( (item) =>{
            return item.className == "form-content"
        }) 
        if(isValid){
            
            window.location.href = "https://th.bing.com/th/id/R.6a08e51f2024e7aa42a97b4996c881c4?rik=1CoLkMpbNgLmsg&pid=ImgRaw&r=0"
        }
    }



    function errorInput(input, message){
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a")
        textMessage.innerText = message;
        formItem.className = "form-content error"
    }