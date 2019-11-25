$(document).ready(async function () {
    const btnNotReleased = $('.btnNotReleased');
    const btnSubmit = $('#btn-submit');
    const modal = $('#modal-alerta');
    const btnNotSubmit = $('.btnNotSubmit');
    const btnSucess = $('.btn-success');

    btnSucess.on('click', () => {
        btnNotSubmit.prop('disabled', true);
    });

    btnNotSubmit.prop('disabled', true);
    btnNotReleased.on('click', () => {
        modal.modal();
    });

    btnSubmit.on('click',async (event) => {
        event.preventDefault();
       let email =  $('#emailRecipient');
       let subject = $('#subject');
       let body = $('#body');
       let calendarId = $('#calendarId');

       if(email.val() === ""){
           messageError("Destinátario não pode estar vazio.");
           return null;
       }else if(subject.val() === ""){
           messageError("É necessário um assunto.");
           return null;
       }else if(body.val() === ""){
           messageError("Por favor, insira os motivos...");
           return null;
       }

        await sendEmail(email.val(), subject.val(), body.val(), calendarId.text());


    });

    async function sendEmail(email, subject, body, calendarId) {
        await $.ajax({
            type: 'POST',
            url: 'SendCalendar',
            data:{
                "email": email,
                "subject": subject,
                "body": body,
                "calendarId": calendarId
            },
            success: await function (res) {
                if(res === 'false'){
                    messageError("Erro ao enviar o email :(");
                }else{
                    menssagemSucess("Email enviado com sucesso!", 'AllCalendars.xhtml');
                }
            }
        })
    }

});