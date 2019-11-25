
$(document).ready(function () {
    function User(password, email, name, campus, user_type){
        this.password = password;
        this.email = email;
        this.name = name;
        this.campus = campus;
        this.user_type = user_type;
    }
    function Campus(id,nome, cidade, utilizacao){
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
        this.utilizacao = utilizacao;
    }
    const btnRegister = $('#btn-register');

    btnRegister.on("click", () => {
        var name = $('#name').val();
        var lastname = $("#lastname").val();
        var campus = $("#campus").val();
        var typeUser = $("#typeUser").val();
        var email = $("#email").val();

        const CampusAux = new Campus(campus, null, null, null);
        const user = new User(null , email, name + " " + lastname, CampusAux, typeUser);

        if(verifyData(user, lastname, name)){
            if(verifyEmailContainsIFSC(user)) {
                alert("Espere... estamos verificando os dados.");
                $.ajax({
                    type: "POST",
                    url: "RegisterUser",
                    data: {
                        "data": JSON.stringify(user),
                    },
                    success: function (data) {
                        setTimeout(()=>{
                            $(".alert").removeClass("error-enter").addClass("error-hide");
                            setTimeout(function (){
                                $(".alert").remove();
                                if(data === "true"){
                                    return alertSucess("Pronto! Usuário cadastrado com sucesso.");
                                }else{
                                    return Error("Esse email já está em uso :(");
                                }
                            }, 500);

                        }, 3000);

                    }
                });
            }
        }

    });

    function verifyData(user, lastname, name){
        if( name === ""
            || user.email === ""
            || user.campus.id === "" || user.campus === "Campus"
            || user.user_type === ""
            || lastname === "" ){

            Error("Opssss. Você não preencheu todos os campos :(");
            return false;
        }else{
            return true;
        }
    }
    function verifyEmailContainsIFSC(user) {
        if(user.email.includes("@ifsc.edu.br")){
            return true;
        }else{
            Error("Ops. Esse email é inválido :(");
            return false;
        }
    }

    function alertSucess(msg) {
        $('.errors').html('<div class="alert alertSucess error-enter" ' +
            'role="alert">' +
            ' ' + msg + '  </div>');
        setTimeout(()=>{
            $(".alert").removeClass("error-enter").addClass("error-hide");
            setTimeout(function (){
                $(".alert").remove();
                window.location.replace("UsersView.xhtml");

            }, 500);

        }, 2000);
    }

    function alert(msg) {
        $('.errors').html('<div class="alert menssageAlert error-enter" ' +
            'role="alert">' +
            ' ' + msg + '  </div>');
    }

    function Error(msg){
        $('.errors').html('<div class="alert menssageError error-enter" ' +
            'role="alert">' +
            ' ' + msg + '</div>');
        setTimeout(()=>{
            $(".alert").removeClass("error-enter").addClass("error-hide");
            setTimeout(function (){
                $(".alert").remove()
            }, 500);

        }, 5000);
    }
});