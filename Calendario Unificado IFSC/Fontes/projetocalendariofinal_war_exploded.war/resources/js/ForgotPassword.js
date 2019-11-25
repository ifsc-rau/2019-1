$(document).ready(async function () {
   const email = $('#inputEmail');

   $('.btn').on("click", async function (event) {
       event.preventDefault();
       if(email.val() === ""){
           return messageError("Email não pode estar vazio");
       }

       let user = new User(null, null, email.val(), null, null, null);
       
       messageWarning('Espere um pouco... estamos fazendo algumas verificações');

       let response = await ForgotPasswordController.put(user);

       if(response === 'true'){
           menssagemSucess('Verifique seus emails', 'index.xhtml');
       }

   })
});