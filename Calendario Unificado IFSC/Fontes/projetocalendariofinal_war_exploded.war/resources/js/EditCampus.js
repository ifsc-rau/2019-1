$(document).ready(async function (){

    const campusName = $('#campusName');
    const selectCities = $('#select-cities');
    const button = $('button.btn');

    let campus = await Campus.get();

    const divSelect = $('.select-cities .mb-3');

    let cities = [];
    await Campus.findCities(cities);

    divSelect.append('<select name="select"' +
        ' class="btn btn-success dropdown-toggle form-control"' +
        ' id="select-cities">' +
        '<option value="noValue" selected>' +
        '   Selecione a cidade' +
        '</option>' +
        '</select>');

    for (let i = 0; i < cities.length; i++) {
        selectCities.append('<option value="' + cities[i] + '">' +
            '' + cities[i] + '</option>')
    }

    campusName.val(campus['nome']);
    selectCities.val(campus['cidade']);

    button.on('click', async function(event) {
        event.preventDefault();
        campus['nome'] = campusName.val();
        campus['cidade'] = selectCities.val();

        let response = await Campus.put(campus);

        if(response === 'true'){
            menssagemSucess('Campus alterado com sucesso :)', 'ViewCampus.xhtml');
        }else if(response === 'false'){
            messageError('Já existe um campus com este nome :(');
        }
    });
});