$(document).ready(function () {
    function Usuario(email, password){
        this.email = email;
        this.password = password;
    }

    const btnLogin = $(".btn-login");
    const form = document.querySelector("form");

    btnLogin.on("click", (event) => {
        event.preventDefault();
        var email = $('#inputEmail').val();
        var password = $("#inputPassword").val();

        $.ajax({
            type: "POST",
            url: 'getLogin',
            data:{
                data: JSON.stringify(new Usuario(email, password))
            },
            success: function (data) {
                if(data === "true"){
                    form.classList.add("form-hide");
                    form.addEventListener('animationend', (event) => {
                        if (event.animationName === "down") {
                            form.style.display = "none";
                            window.location.replace("menuPrincipal.xhtml");
                        }
                    });
                }else{
                    messageError("Email ou senha inválidos.");
                }
            }
        });
    });

    $('#forgot').on('click', function () {
        window.location.replace('ForgotPassword.xhtml')
    })


});
