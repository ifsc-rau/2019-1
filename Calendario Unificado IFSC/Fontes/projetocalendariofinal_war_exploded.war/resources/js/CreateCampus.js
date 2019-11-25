$(document).ready(async function () {
    const btnModalCampus = $('#btnModalCampus');
    const btnConfirm = $('#btn-register-campus');
    let selectCities;

    /*
        divSelect está armazendo onde ficará
        o select dos municipios
     */
    const divSelect = $('.select-cities .mb-3');
    /*
     Montar o select de municipios
     */

    let cities = [];
    await Campus.findCities(cities);

    divSelect.append('<select name="select"' +
        ' class="btn btn-success dropdown-toggle form-control"' +
        ' id="select-cities">' +
        '<option value="noValue" selected>' +
        '   Selecione a cidade' +
        '</option>' +
        '</select>');

    selectCities = $('#select-cities');

    for (let i = 0; i < cities.length; i++) {
        selectCities.append('<option value="' + cities[i] + '">' +
            '' + cities[i] + '</option>')
    }

    btnModalCampus.on('click', async (evt) => {
        const modalCampus = $('#modal-campus');
        modalCampus.modal();
    });

    btnConfirm.on('click', async (evt) => {
        evt.preventDefault();
        const campusName = $('#campusName');

        if (!campusName.val()) {
            messageError("Nome do campus não pode estar vazio");
        } else if (selectCities.val() === 'noValue') {
            messageError('Por favor, selecione uma cidade');
        } else {
            let campus = new Campus(null, campusName.val(), selectCities.val(), null);

            console.log(campus);
            let response = await Campus.post(campus);

            if(response === 'true'){
                menssagemSucess('Campus registrado com sucesso!', 'ViewCampus.xhtml');
            }else if(response === 'false'){
                messageError('Campus já existente :(');
            }
        }
    });
});