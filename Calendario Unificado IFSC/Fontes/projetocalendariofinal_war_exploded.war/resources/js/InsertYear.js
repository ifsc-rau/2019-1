$(document).ready(async function() {
    const inputAno = $('#inputAno');
    const button = $('button.btn');

    button.on('click', async function (event) {
        event.preventDefault();

        const data = new Date();

        if(inputAno.val() < data.getFullYear()){
            messageError('Ano inválido...');
        }else{
            let response = await YearController.post(inputAno.val());

            if(response){
                menssagemSucess('Tudo certo :)', 'Calendario.xhtml')
            }
        }

    })
});