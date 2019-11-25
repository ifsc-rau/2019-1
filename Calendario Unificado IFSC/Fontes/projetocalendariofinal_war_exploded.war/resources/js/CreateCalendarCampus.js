$(document).ready(async function () {

    const button = $('button.btn');

    button.on('click', async (event) => {
        event.preventDefault();

        const calendar = $('#calendar');

        let response = await CreateCalendarCampus.post(calendar.val());

       if(response === 'true') {
           menssagemSucess('Tudo certo :)', 'CalendarCampus.xhtml')
       }

    })
});

class CreateCalendarCampus{
    static async post(__id){
        let response = null;
        await $.post({
            url: 'calendarCampus',
            data:{
                "__id": __id
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
