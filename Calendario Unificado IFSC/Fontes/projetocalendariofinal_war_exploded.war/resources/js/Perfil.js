$(document).ready(async function () {

    function User(userId, password, email, name, campus, user_type) {
        this.userId = userId;
        this.password = password;
        this.email = email;
        this.name = name;
        this.campus = campus;
        this.user_type = user_type;
    }

    var typeUser;
    var campus;
    var userId = null;
    var password;

    const inputName = $('#name');
    const inputEmail = $('#email');
    const lblInfoEmail = $("#infoEmail");
    const newPassword = $("#newPassword");
    const currentCampus = $('#currentCampus');
    const currentTypeUser = $('#currentTypeUser');
    const infoConfirmPassword = $("#infoPassword");
    const confirmNewPassword = $("#confirmNewPassword");

    $.ajax({
        type: 'GET',
        url: 'Perfil',
        dataType: 'json',
        success: function (user) {
            inputName.val("");
            inputEmail.val("");
            inputName.val(user.name);
            inputEmail.val(user.email);
            newPassword.val("");
            currentCampus.text("Atual campus: " + user['campus']['nome']);
            if (user['user_type'] === true) {
                currentTypeUser.text("Tipo de usuário: REITORIA");
            } else {
                currentTypeUser.text("Tipo de usuário: COMUM");
            }

            campus = user['campus'];
            typeUser = user['user_type'];
            userId = user['userId'];
            password = user['password'];

            /*
                Botão já inicia habilitado, já que email e nome jã estão preenchidos
             */
            $('#btn-register').prop('disabled', false);
        }
    });


    $('#btn-register').on('click', function () {
        $("#modal-alerta").modal();
        const confirmPasswordModal = $("#confirmPasswordModal");
        confirmPasswordModal.val("");

    });

    $("#btn-confirm").on('click', async function () {
        const confirmEmailModal = $("#confirmEmailModal");
        const confirmPasswordModal = $("#confirmPasswordModal");

        if (verifyPassword(newPassword.val(), confirmNewPassword.val())) {
            var ok = true;
            if (newPassword.val() !== "") {
                password = newPassword.val();
                ok = false;
            }

            var user = new User(userId, password, inputEmail.val(), inputName.val(), campus, typeUser);

            infoConfirmPassword.text("");

            $.ajax({
                type: "POST",
                url: "Perfil",
                data: {
                    "user": JSON.stringify(user),
                    "verifyEmail": confirmEmailModal.val(),
                    "verifyPassword": confirmPasswordModal.val(),
                    "ok": JSON.stringify(ok)
                },

                success: async (data) => {
                    data = data.substring(1, data.length - 1);
                    if(data === "0"){
                        lblInfoEmail.text("Email já existe, tente outro por favor...");
                    }else if(data === "1"){
                        Error("Email e ou senha inválidos");
                    }else{
                        return menssagemSucess("Tudo certo! Seus dados foram alterados.", 'Perfil.xhtml');
                    }

                },
            });
        }


    });

    function verifyPassword(pass1, pass2) {
        if (pass1 === pass2) {
            infoConfirmPassword.removeClass("colorError");
            infoConfirmPassword.addClass("colorSucess");
            infoConfirmPassword.text("Senhas conhecidem.");
            $('#btn-register').prop('disabled', false);

            return true;
        } else {
            infoConfirmPassword.addClass("colorError");
            infoConfirmPassword.text("Senhas não conhecidem.");
            $('#btn-register').prop('disabled', true);

            return false;
        }
    }

    newPassword.on("keyup", ()=>{
        if(confirmNewPassword.val() === "" && newPassword.val() === "" ){
            infoConfirmPassword.text("");
            $('#btn-register').prop('disabled', false);
        }else if(confirmNewPassword.val() !== ""){
           verifyPassword(newPassword.val(), confirmNewPassword.val());
       }
    });

    confirmNewPassword.on("keyup", ()=>{
        if(confirmNewPassword.val() === "" && newPassword.val() === "" ){
            infoConfirmPassword.text("");
            $('#btn-register').prop('disabled', false);

        }else {
            verifyPassword(newPassword.val(), confirmNewPassword.val());
        }
    });

    inputEmail.on("keyup", ()=>{
         lblInfoEmail.text("");
    });

    var inputs = $('.hab input').on('keyup', verificarInputs);

    async function verificarInputs() {
        const preenchidos = inputs.get().every(({value}) => value)
        $('#btn-register').prop('disabled', !preenchidos);
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

    function alertSuccess(msg){
        $('.errors').html('<div class="alert alertSucess error-enter" ' +
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




