var ano; // Ano selecionado pelo usuario
var corValue; // Recebe o valor do dropdown
var arrayObjectData = new Array();
var datasDeFinaisDeSemana = new Array();
var valueCheckBoxModoRapido = false;
const yearsOfMonth = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"); // array que contém os meses do ano
var firstHalfTotal = 0;
var secondHalfTotal = 0;

/* Ao dar um double click no button da data volta para data que aquela data foi iniciada no calendário */
function voltarData(dia, mes, ano) {
    // Cria uma nova data com a data que está inserida naquele button
    var data = new Date(ano, mes, dia);
    var id = returnId(data);

    clearHolidaysCity(id);
    /* Verifica se está data não está não esta na lista de datas de fim de semana*/
    if (datasDeFinaisDeSemana.indexOf(id) !== -1) {
        $('#' + id).css('background-color', '#c2c2a3');
    } else {
        $('#' + id).css('background-color', 'rgba(0, 0, 0, 0)');
    }


    contadorClick = 0;
    retornaDias('rgb(0, 179, 179)');
    findByDaysSchool();

}

function retornarIdData(id) {
    return new Date(id.substring(6, 11), id.substring(4, 6), id.substring(2, 4));
}

function findByDaysSchool() {
    var countHolidaysTeacher = 1;
    const daysSchoolInitAndEnd = [null, null, null, null]; // Armazena os inicio e fins de cada semestre
    var counter = 0;
    firstHalfTotal = 0;
    secondHalfTotal = 0;
    const counterDaysSchoolInWeekFirstHalf = [0, 0, 0, 0, 0, 0, 0];
    const counterDaysSchoolInWeekSecondHalf = [0, 0, 0, 0, 0, 0, 0];
    const counterDaysSchoolFirstHalf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Armazena a quantidade de dias letivos do primeiro semestre
    const counterDaysSchoolSecondHalf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Armazena a quantidade de dias letivos do segundo semestre
    const today = new Date(ano + 1, 0, 1);
    for (var date = new Date(ano, 0, 1); date <= today; date.setDate(date.getDate() + 1)) {
        if ($('#' + returnId(date)).css('background-color') === 'rgb(0, 179, 179)') {
            $('#holidayTeacher').text(countHolidaysTeacher++);
        }
        if ($('#' + returnId(date)).css('background-color') === 'rgb(0, 64, 128)') {
            counter++;
            if (counter === 1) {
                daysSchoolInitAndEnd[0] = returnId(date);
            }
            if (counter === 2) {
                daysSchoolInitAndEnd[1] = returnId(date);
            }
            if (counter === 3) {
                daysSchoolInitAndEnd[2] = returnId(date);
            }
            if (counter === 4) {
                daysSchoolInitAndEnd[3] = returnId(date);
            }
        }
    }

    checkDaysSchool(daysSchoolInitAndEnd[0], daysSchoolInitAndEnd[1], counterDaysSchoolFirstHalf, counterDaysSchoolInWeekFirstHalf);
    checkDaysSchool(daysSchoolInitAndEnd[2], daysSchoolInitAndEnd[3], counterDaysSchoolSecondHalf, counterDaysSchoolInWeekSecondHalf);

    for (var i = 0; i < 12; i++) {
        if (counterDaysSchoolFirstHalf[i] !== 0) {
            $('#td-tot1' + numberReturnMonth(retornarIdData(daysSchoolInitAndEnd[0]).getMonth() - 1)).text('1° Sem');
            $('#td-tot1' + yearsOfMonth[i]).text(counterDaysSchoolFirstHalf[i]);
            $('#td-tot1' + yearsOfMonth[i]).css('background-color', '#c2c2a3');
            $('#td-tot1' + numberReturnMonth(retornarIdData(daysSchoolInitAndEnd[0]).getMonth() - 1)).css('background-color', '#c2c2a3');

        } else {
            $('#td-tot1' + yearsOfMonth[i]).text('');
            $('#td-tot1' + yearsOfMonth[i]).css('background-color', 'rgba(0, 0, 0, 0)');

        }
        if (counterDaysSchoolSecondHalf[i] !== 0) {
            $('#td-tot2' + numberReturnMonth(retornarIdData(daysSchoolInitAndEnd[2]).getMonth() - 1)).text('2° Sem');
            $('#td-tot2' + yearsOfMonth[i]).text(counterDaysSchoolSecondHalf[i]);
            $('#td-tot2' + yearsOfMonth[i]).css('background-color', '#c2c2a3');
            $('#td-tot2' + numberReturnMonth(retornarIdData(daysSchoolInitAndEnd[2]).getMonth() - 1)).css('background-color', '#c2c2a3');
        } else {
            $('#td-tot2' + yearsOfMonth[i]).text('');
            $('#td-tot2' + yearsOfMonth[i]).css('background-color', 'rgba(0, 0, 0, 0)');


        }
    }

    for (i = 0; i < 7; i++) {
        $('#' + i + 'FirstHalf').text(counterDaysSchoolInWeekFirstHalf[i]);
        $('#' + i + 'SecondHalf').text(counterDaysSchoolInWeekSecondHalf[i]);
    }

    for (i = 0; i < counterDaysSchoolInWeekSecondHalf.length; i++) {
        firstHalfTotal += counterDaysSchoolInWeekFirstHalf[i];
        secondHalfTotal += counterDaysSchoolInWeekSecondHalf[i];
    }

    $('#totalFirstHalf').text(firstHalfTotal);
    $('#totalSecondHalf').text(secondHalfTotal);
}

function numberReturnMonth(number) {
    switch (number) {
        case 0:
            return 'Janeiro';
            break;
        case 1:
            return 'Fevereiro';
            break;
        case 2:
            return 'Março';
            break;
        case 3:
            return 'Abril';
            break;
        case 4:
            return 'Maio';
            break;
        case 5:
            return 'Junho';
            break;
        case 6:
            return 'Julho';
            break;
        case 7:
            return 'Agosto';
            break;
        case 8:
            return 'Setembro';
            break;
        case 9:
            return 'Outubro';
            break;
        case 10:
            return 'Novembro';
            break;
        case 11:
            return 'Dezembro';
            break;
    }
}

function checkDaysSchool(init, end, vector, vectorWeek) {
    if (init !== null && end !== null) {
        init = retornarIdData(init);
        end = retornarIdData(end);
        for (var date = new Date(init.getFullYear(), init.getMonth(), init.getDate()); date <= end; date.setDate(date.getDate() + 1)) {
            if ($('#' + returnId(date)).css('background-color') === 'rgb(0, 64, 128)' || $('#' + returnId(date)).css('background-color') === 'rgba(0, 0, 0, 0)') {
                vector[date.getMonth()]++;
                vectorWeek[date.getDay()]++;
            }
        }
    }
}

const holidaysCity = new Array();

function clearHolidaysCity(id) {
    let indice = holidaysCity.indexOf(id);
    while (indice >= 0) {
        holidaysCity.splice(indice, 1);
        indice = holidaysCity.indexOf(id);
    }
    let a = $('#tdLegendsHolidays' + id).closest('tr');
    a.fadeOut(300, function () {
        a.remove();
    })

}

var contadorClick = 0;

function selectionDay(dia, mes, ano) {
    var data = new Date(ano, mes, dia);
    var id = returnId(data);
    var cor = '';

    switch (parseInt(corValue)) {
        case 0:
            $('#' + id).css('background-color', '#004080');// Essa cor é para Data de início do semestre letivo e data limite de término do semestre letivo

            break;
        case 1:
            $('#' + id).css('background-color', '#ff66cc');// Essa cor é para Atividades pedagógicas e administrativas, sem atividades acadêmicas
            cor = '#ff66cc';
            break;
        case 2:
            $('#' + id).css('background-color', '#00b3b3');// Essa cor é para Férias docentes
            cor = '#00b3b3';
            break;
        case 3:
            $('#' + id).css('background-color', '#ff0000');// Essa cor é para Feriados e pontos facultativos
            cor = '#ff0000';
            break;
        case 4:
            $('#' + id).css('background-color', '#ff9933');// Essa cor é para Recesso (com reposição de acordo com necessidade institucional)
            cor = '#ff9933';
            break;
        case 5:
            $('#' + id).css('background-color', '#cccc00');// Essa cor é para Ponto facultativo até as 14h
            cor = '#cccc00';
            break;
        case 6:
            $('#' + id).css('background-color', '#ffff00');// Essa cor é para Solenidades de colação de grau e formatura – data prevista
            cor = '#ffff00';
            break;
        case 7:
            if (data.getDay() === 0) {
                return messageError("Não pode ser inserido dias letivos\n" +
                    "em um domingo.")
            } else {
                $('#' + id).css('background-color', 'rgba(0, 0, 0, 0)');// Essa cor é para Dia letivo
                cor = 'rgba(0, 0, 0, 0)';
            }
            break;
        case 8:
            if (datasDeFinaisDeSemana.indexOf(id) !== -1) {
                $('#' + id).css('background-color', '#c2c2a3');
            } else {
                return messageError('Esse dia não é um final de semana');
            }
            break;
        case 9:
            $('#' + id).css('background-color', 'rgb(255, 0, 0)');// Essa cor é para Feriados e pontos facultativos
            cor = 'rgb(255, 0, 0)';
            if (holidaysCity.indexOf(id) === -1) {
                var dateAux = '';
                if (retornarIdData(id).getDate() < 10) {
                    dateAux = '0' + retornarIdData(id).getDate();
                } else {
                    dateAux = retornarIdData(id).getDate()
                }
                $('#tableLegendaFeriados').append('<tr id="tdLegendsHolidays' + id + '" >' +
                    '<th style="padding-right: 10px;">' + dateAux + '/' + returnMonthAbbreviation(retornarIdData(id).getMonth()) + '</th>' +
                    '<th class="texto-legenda"><input id="input' + id + '" type="text" style="font-weight: bold; color: #212529" /></th>' +
                    '</tr>');
                holidaysCity.push(id);
                $('#input' + id + '').focus();
            }
            break;
        default:
            break;
    }
    if (parseInt(corValue) !== 9) {
        if (holidaysCity.indexOf(id) >= 0) {
            clearHolidaysCity(id)
        }
    }

    retornaDias('rgb(0, 179, 179)');
    findByDaysSchool();
}

function retornaDias(background) {
    const contador = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var hoje = new Date((ano + 1), 0, 1);
    for (var dia = new Date(ano, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
        for (var j = 0; j < yearsOfMonth.length; j++) {
            if (yearsOfMonth[dia.getMonth()] === yearsOfMonth[j]) {
                for (var j = 0; j < yearsOfMonth.length; j++) {
                    if (yearsOfMonth[dia.getMonth()] === yearsOfMonth[j]) {
                        if ($('#' + returnId(dia)).css('background-color') === background) {
                            contador[dia.getMonth()]++;
                        }
                    }
                }
            }
        }
    }
    for (var i = 0; i < yearsOfMonth.length; i++) {
        if (contador[i] === 0) {
            $('#td-cont' + yearsOfMonth[i] + '').css('background-color', '#ffffff');
            $('#td-cont' + yearsOfMonth[i] + '').text('');
        } else {
            $('#td-cont' + yearsOfMonth[i] + '').css('background-color', 'rgb(0, 179, 179)');
            $('#td-cont' + yearsOfMonth[i] + '').text(contador[i]);
        }
    }
}

function configuraData(dia, mes, ano) {
    var data;
    if (mes >= 10 && dia < 10) {
        data = '' + ano + '-' + mes + '-0' + dia + '';
    } else if (mes < 10 && dia >= 10) {
        data = '' + ano + '-0' + mes + '-' + dia + '';
    } else if (dia < 10 && mes < 10) {
        data = '' + ano + '-0' + mes + '-0' + dia + '';
    } else {
        data = '' + ano + '-' + mes + '-' + dia + '';
    }
    return data;
}

function returnId(data) {
    if (data.getMonth() >= 10 && data.getDate() < 10) {
        return 'td0' + data.getDate() + '' + data.getMonth() + '' + ano + '';
    } else if (data.getMonth() < 10 && data.getDate() >= 10) {
        return 'td' + data.getDate() + '0' + data.getMonth() + '' + ano + '';
    } else if (data.getDate() < 10 && data.getMonth() < 10) {
        return 'td0' + data.getDate() + '0' + data.getMonth() + '' + ano + '';
    } else {
        return 'td' + data.getDate() + '' + data.getMonth() + '' + ano + '';
    }
}

function returnMonthAbbreviation(Month) {
    switch (Month) {
        case 0:
            return 'Jan';
            break;
        case 1:
            return 'Fev';
            break;
        case 2:
            return 'Mar';
            break;
        case 3:
            return 'Abr';
            break;
        case 4:
            return 'Mai';
            break;
        case 5:
            return 'Jun';
            break;
        case 6:
            return 'Jul';
            break;
        case 7:
            return 'Ago';
            break;
        case 8:
            return 'Set';
            break;
        case 9:
            return 'Out';
            break;
        case 10:
            return 'Nov';
            break;
        case 11:
            return 'Dez';
            break;
    }
}


function keyPressed(evt) {
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key);
}

const mouseEnterColor = (day, month, year) => {

    document.onkeypress = function (evt) {
        var str = keyPressed(evt);

        if (str === 'z')
            selectionDay(day, month, year)
    };

};

$(document).ready(async function () {

    ano = await YearController.get();
    $('#checkboxModoRapido').on('click', function () {
        if ($(this).is(':checked')) {
            valueCheckBoxModoRapido = true;
        } else {
            valueCheckBoxModoRapido = false;
        }
    });
    const hoje = new Date((ano + 1), 0, 1);

    const mesesDoAno = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro");
    const diasDaSemana = new Array("S", "D", "S", "T", "Q", "Q", "S", "S", "D", "S", "T", "Q", "Q", "S", "S", "D", "S", "T", "Q",
        "Q", "S", "S", "D", "S", "T", "Q", "Q", "S", "S", "D", "S", "T", "Q", "Q", "S", "S", "D", "Férias", "Dias letivos");
    var arrayBooleanConfirma = new Array(true, true, true, true, true, true, true, true, true, true, true, true);
    var arrayContadorDiasDoMes = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

    function criarCalendario() {

        $('#div-calendario').append('<table id="table-calendario"></table>');
        $('#table-calendario').append('<tr id="diasDaSemana"></tr>');


        var contador = 0;
        $('#diasDaSemana').append('<td> </td>');
        $('#diasDaSemana').append('<td style="padding-left: 30px"> </td>');

        while (contador != 39) {
            if (diasDaSemana[contador] === 'D') {
                $('#diasDaSemana').append('<th class="fimDeSemana">' + diasDaSemana[contador] + '</th>');
            } else if (diasDaSemana[contador + 1] === 'D' && diasDaSemana[contador] === 'S') {
                $('#diasDaSemana').append('<th class="fimDeSemana">' + diasDaSemana[contador] + '</th>');
            } else if (diasDaSemana[contador] === 'Férias') {
                $('#diasDaSemana').append('<th class="th-ferias">' + diasDaSemana[contador] + '</th>');
            } else if (diasDaSemana[contador] === 'Dias letivos') {
                $('#diasDaSemana').append('<th class="row-diasSemana th-diasLetivos" colspan="4">' + diasDaSemana[contador] + '</th>');
            } else {
                $('#diasDaSemana').append('<th class="row-diasSemana">' + diasDaSemana[contador] + '</th>');
            }
            contador++;
        }
        for (var i = 0; i < mesesDoAno.length; i++) {
            $('#table-calendario').append('<tr id="tr-' + mesesDoAno[i] + '"><th class="col-meses"' +
                '>' + mesesDoAno[i] + '</th></tr>');
        }


        for (dia = new Date(ano, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
            for (var j = 0; j < mesesDoAno.length; j++) {
                if (mesesDoAno[dia.getMonth()] === mesesDoAno[j]) {
                    if (arrayBooleanConfirma[dia.getMonth()] === true) {
                        var total = 0;
                        if (dia.getDay() === 1) {
                            total = 3;
                        } else if (dia.getDay() === 6) {
                            total = 1;
                        } else if (dia.getDay() === 0) {
                            total = 2;
                        } else if (dia.getDay() !== 1 || dia.getDay() !== 6 || dia.getDay() !== 0) {
                            total = dia.getDay() + 2;
                        }

                        for (var j = 0; j < total; j++) {
                            if (j === 1 || j === 2) {
                                $('#tr-' + mesesDoAno[dia.getMonth()]).append('<td class="fimDeSemana"> </td>');
                            } else {
                                $('#tr-' + mesesDoAno[dia.getMonth()]).append('<td></td>');
                            }
                            arrayContadorDiasDoMes[dia.getMonth()]++;
                        }
                        arrayBooleanConfirma[dia.getMonth()] = false;
                    }
                }
            }
        }

        for (var dia = new Date(ano, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
            for (var j = 0; j < mesesDoAno.length; j++) {
                if (mesesDoAno[dia.getMonth()] === mesesDoAno[j]) {
                    if (dia.getFullYear() == ano) {
                        if (dia.getDay() === 6 || dia.getDay() === 0) {
                            datasDeFinaisDeSemana.push(returnId(dia))
                            $('#tr-' + mesesDoAno[j] + '').append('<td id="' + returnId(dia) + '" class="fimDeSemana">' +
                                '<button  ondblclick="voltarData(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')"' +
                                'onclick="selectionDay(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')"' +
                                'onmouseenter="mouseEnterColor(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')">' + dia.getDate() + '</button></td>');
                        } else {
                            $('#tr-' + mesesDoAno[j] + '').append('<td id="' + returnId(dia) + '" >' +
                                '<button  ondblclick="voltarData(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')"' +
                                'onclick="selectionDay(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')" ' +
                                'onmouseenter="mouseEnterColor(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')">' + dia.getDate() + '</button></td>');
                        }
                        arrayContadorDiasDoMes[dia.getMonth()]++;
                    }
                }
            }
        }

        for (dia = new Date(ano, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
            for (var j = 0; j < mesesDoAno.length; j++) {
                if (mesesDoAno[dia.getMonth()] === mesesDoAno[j]) {
                    if (arrayBooleanConfirma[dia.getMonth()] === false) {
                        for (var j = arrayContadorDiasDoMes[dia.getMonth()]; j < 41; j++) {
                            if (j === 37 || j === 36 || j === 30)
                                $('#tr-' + mesesDoAno[dia.getMonth()]).append('<td class="fimDeSemana"> </td>');
                            else if (j === 38)
                                $('#tr-' + mesesDoAno[dia.getMonth()]).append('<th id="td-cont' + mesesDoAno[dia.getMonth()] + '">  </th>');
                            else if (j === 39)
                                $('#tr-' + mesesDoAno[dia.getMonth()]).append('<th style="width: 100px;" id="td-tot1' + mesesDoAno[dia.getMonth()] + '">  </th>');
                            else if (j === 40)
                                $('#tr-' + mesesDoAno[dia.getMonth()]).append('<th style="width: 100px;" id="td-tot2' + mesesDoAno[dia.getMonth()] + '">  </th>');
                            else {
                                $('#tr-' + mesesDoAno[dia.getMonth()]).append('<td > </td>');
                            }
                            arrayContadorDiasDoMes[dia.getMonth()]++;
                        }
                        arrayBooleanConfirma[dia.getMonth()] = true;
                    }
                }
            }
        }

        $('.div-b-a').append('<table id="table-daysWeek">' +
            '<tr><th rowspan="2">Dias <br/>Letivos/ Semana</th><th rowspan="1">1° Semestre</th>' +
            '<td>Seg.</td><td id="1FirstHalf"> 0 </td>' +
            '<td>Ter.</td><td id="2FirstHalf"> 0 </td>' +
            '<td>Qua.</td><td id="3FirstHalf"> 0 </td>' +
            '<td>Qui.</td><td id="4FirstHalf"> 0 </td>' +
            '<td>Sex.</td><td id="5FirstHalf"> 0 </td>' +
            '<td>Sab.</td><td id="6FirstHalf"> 0 </td>' +
            '<td>Total</td><td id="totalFirstHalf"> 0 </td>' +
            '<th rowspan="2" style="background-color: #00b3b3;"> Férias<br/>Docentes</th>' +
            '<td rowspan="2" id="holidayTeacher"> 0 </td></tr>' +
            '<tr><th rowspan="1">2° Semestre</th>' +
            '<td>Seg.</td><td id="1SecondHalf"> 0 </td>' +
            '<td>Ter.</td><td id="2SecondHalf"> 0 </td>' +
            '<td>Qua.</td><td id="3SecondHalf"> 0 </td>' +
            '<td>Qui.</td><td id="4SecondHalf"> 0 </td>' +
            '<td>Sex.</td><td id="5SecondHalf"> 0 </td>' +
            '<td>Sab.</td><td id="6SecondHalf"> 0 </td>' +
            '<td>Total</td><td id="totalSecondHalf"> 0 </td></tr></table>');

    }

    function criarTitulos() {
        $('#div-titulo').append('<table id="table-titulos"></table>');
        $('#table-titulos').append('<tr><td id="td-titulo"><input id="inputText-titulo" type="text" placeholder="Insira o titulo" maxlength="160" class="input-titulos"></td></tr>' +
            '<tr><td><input id="inputText-subtitulo" type="text" placeholder="Insira o subtítulo" class="input-titulos" maxlength="160"></td></tr>');

        $('#div-legendas').append('<table id="table-legends"></table>');
        $('#table-legends').append('<tr><th colspan="2" id="header-titulos">LEGENDA</th></tr>' +
            '<tr><td id="tdLengendaSemeste"></td><th class="texto-legenda">Data de início do semestre letivo e data limite de término do semestre letivo</th></tr>' +
            '<tr><td id="tdLegendaAtvPdg"></td><th class="texto-legenda">Atividades pedagógicas e administrativas, sem atividades acadêmicas</th></tr>' +
            '<tr><td id="tdLegendaFerias"></td><th class="texto-legenda">Férias docentes</th></tr>' +
            '<tr><td id="tdLegendaFeriados"></td><th class="texto-legenda">Feriados e pontos facultativos</th></tr>' +
            '<tr><td id="tdLegendaRecesso"></td><th class="texto-legenda">Recesso (com reposição de acordo com necessidade institucional)</th></tr>' +
            '<tr><td id="tdPontoFacultativo"></td><th class="texto-legenda">Ponto Facultativo até as 14h</th></tr>' +
            '<tr><td id="tdLegendaSolenidade"></td><th class="texto-legenda">Solenidades de colação de grau e formatura – data prevista</th></tr>');

        $('#div-legendaFeriados').append('<table id="tableLegendaFeriados"></table>');
        $('#tableLegendaFeriados').append('<tr><th id="headerLegendaFeriados"colspan="2">FERIADOS - ' + ano + '</th></tr>');

    }


    $('#select_colors').change(function () {
        corValue = ($(this).val());
    });

    function Calendar(id, ano, titulo, subtitulo, user, dates) {
        this.id = id;
        this.ano = ano;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.user = user;
        this.dates = dates;
    }


    $('#btnSalvar').on('click', async function () {
        var titulo = $('#inputText-titulo').val();
        var subtitulo = $('#inputText-subtitulo').val();


        if (titulo === "" || subtitulo === "") {
            return messageError("Título e subtítulos são obrigatórios.")
        }

        for (var dia = new Date(ano, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
            for (var j = 0; j < mesesDoAno.length; j++) {
                if (mesesDoAno[dia.getMonth()] === mesesDoAno[j]) {
                    if (dia.getFullYear() === ano) {
                        var id = returnId(dia);
                        var backgroundColor = $('#' + id).css('background-color');

                        let typeDate;
                        let description;
                        let date;

                        if (backgroundColor === 'rgb(0, 64, 128)') {
                            typeDate = 'Data de início do semestre letivo e data limite de término do semestre letivo';
                            description = 'Início e fim de semestre'
                        } else if (backgroundColor === 'rgb(255, 102, 204)') {
                            typeDate = 'Atividades pedagógicas e administrativas, sem atividades acadêmicas';
                            description = 'Atividades pedagógicas';
                        } else if (backgroundColor === 'rgb(0, 179, 179)') {
                            typeDate = 'Férias docentes';
                            typeDate = 'Férias docentes';
                        } else if (backgroundColor === 'rgb(255, 0, 0)') {
                            let dad = $('#tdLegendsHolidays' + id);

                            if (dad !== undefined) {
                                let last = dad.children().last();

                                last = last.children().first();

                                if (last.val() === "") {
                                    last.focus();
                                    return messageError('Por favor, verifique os feriados')
                                }

                                typeDate = 'Feriados e pontos facultativos';
                                description = last.val();
                            } else {
                                typeDate = 'Feriados e pontos facultativos';
                                description = 'Ponto facultativo';
                            }
                        } else if (backgroundColor === 'rgb(255, 153, 51)') {
                            typeDate = 'Recesso (com reposição de acordo com necessidade institucional)';
                            description = 'Recesso';
                        } else if (backgroundColor === 'rgb(204, 204, 0)') {
                            typeDate = 'Ponto Facultativo até as 14h';
                            description = '';
                        } else if (backgroundColor === 'rgb(255, 255, 0)') {
                            typeDate = 'Solenidades de colação de grau e formatura – data prevista';
                            description = 'Data prevista';
                        } else if (backgroundColor === 'rgba(0, 0, 0, 0)' || (backgroundColor === 'rgb(255, 255, 255)')) {
                            typeDate = 'Dia letivo';
                            description = 'Dia letivo';
                        } else if (backgroundColor === 'rgb(194, 194, 163)') {
                            typeDate = 'Fim de semana';
                            description = 'Fim de semana';
                        }

                        date = configuraData(dia.getDate(), (dia.getMonth() + 1), dia.getFullYear());
                        let Data = new DataController(null, date, typeDate, description, null);
                        if(arrayObjectData.indexOf(Data) === -1) {
                            arrayObjectData.push(Data);
                        }
                    }
                }
            }
        }
        if (firstHalfTotal >= 100 && secondHalfTotal >= 100) {
            let calendar = new Calendario(null, ano, titulo, subtitulo, null,null, null, null, arrayObjectData);
            let response = await Calendario.post(calendar);

            if(response === 'true'){
                menssagemSucess('Calendário criado com sucesso :)', 'MyCalendars.xhtml');
            }
        } else {
            return messageError('Ops, cada semestre precisa ter no mínimo 100(cem)<br/>' +
                'dias letivos.');
        }
    });


    await criarCalendario();
    await criarTitulos();
});
