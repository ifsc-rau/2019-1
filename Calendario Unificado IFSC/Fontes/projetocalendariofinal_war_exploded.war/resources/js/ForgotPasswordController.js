class ForgotPasswordController{

    static async put(user){
        let response = null;
        await $.ajax({
           type: 'PUT',
           url: 'forgot',
           data: {
               "user": JSON.stringify(user)
           },
           success: await function (data) {
               response = data;
           },
           error: await function () {
               messageError('Erro na requisição, por favor entre em contato<br/>com o suporte.');
           }
        });

        return response;
    }
}
