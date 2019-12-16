var year; // Ano selecionado pelo usuario
var datasFeriados = new Array(); // array que armazena feriados vindos da API
var DataFeriados; // array que armazena o Data da API
var corValue; // Recebe o valor do dropdown
var arrayObjectData = new Array();
var arrWeekendId = new Array();
const yearsOfMonth = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"); // array que contém os mesesarrWeekendId = [];
var firstHalfTotal = 0;
var secondHalfTotal = 0;
var year = 0;
const holidaysCity = new Array();

/* Ao dar um double click no button da data volta para data que aquela data foi iniciada no calendário */
function comeBackDate(dia, mes, ano) {
    // Cria uma nova data com a data que está inserida naquele button
    var data = new Date(ano, mes, dia);
    var id = returnId(data);

    clearHolidaysCity(id);
    /* Verifica se está data não está não esta na lista de datas de fim de semana*/
    if (datasFeriados.indexOf(id) !== -1) {
        $('#' + id).css('background-color', 'rgb(255, 0, 0)');
    } else if (arrWeekendId.indexOf(id) !== -1) {
        $('#' + id).css('background-color', '#c2c2a3');
    } else {
        $('#' + id).css('background-color', 'rgba(0, 0, 0, 0)');
    }


    contadorClick = 0;
    returnDays('rgb(0, 179, 179)');
    findByDaysSchool();

}

function retornarIdData(id) {
    return new Date(id.substring(6, 11), id.substring(4, 6), id.substring(2, 4));
}

function returnIdByDate(id) {
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
    const today = new Date(year + 1, 0,1);
    for (var date = new Date(year, 0, 1); date <= today; date.setDate(date.getDate() + 1)) {
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
            $('#td-tot1' + numberReturnMonth(returnIdByDate(daysSchoolInitAndEnd[0]).getMonth() - 1)).text('1° Sem');
            $('#td-tot1' + yearsOfMonth[i]).text(counterDaysSchoolFirstHalf[i]);
            $('#td-tot1' + yearsOfMonth[i]).css('background-color', '#c2c2a3');
            $('#td-tot1' + numberReturnMonth(returnIdByDate(daysSchoolInitAndEnd[0]).getMonth() - 1)).css('background-color', '#c2c2a3');

        } else {
            $('#td-tot1' + yearsOfMonth[i]).text('');
            $('#td-tot1' + yearsOfMonth[i]).css('background-color', 'rgba(0, 0, 0, 0)');

        }
        if (counterDaysSchoolSecondHalf[i] !== 0) {
            $('#td-tot2' + numberReturnMonth(returnIdByDate(daysSchoolInitAndEnd[2]).getMonth() - 1)).text('2° Sem');
            $('#td-tot2' + yearsOfMonth[i]).text(counterDaysSchoolSecondHalf[i]);
            $('#td-tot2' + yearsOfMonth[i]).css('background-color', '#c2c2a3');
            $('#td-tot2' + numberReturnMonth(returnIdByDate(daysSchoolInitAndEnd[2]).getMonth() - 1)).css('background-color', '#c2c2a3');
        } else {
            $('#td-tot2' + yearsOfMonth[i]).text('');
            $('#td-tot2' + yearsOfMonth[i]).css('background-color', 'rgba(0, 0, 0, 0)');


        }
    }

    for (i = 1; i < 8; i++) {
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

function clearHolidaysCity(id) {
    let indice = holidaysCity.indexOf(id);
    while (indice >= 0) {
        holidaysCity.splice(indice, 1);
        indice = holidaysCity.indexOf(id);
    }
    let a = $('#tdLegendsHolidays' + id).closest('tr');
    a.fadeOut(300, function () {
        a.remove();
    });
}

var dataInicial;
var dataFinal;
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
                    "em um domingo.");
            }
            $('#' + id).css('background-color', 'rgba(0, 0, 0, 0)');// Essa cor é para Dia letivo
            cor = 'rgba(0, 0, 0, 0)';
            break;
        case 8:
            if (arrWeekendId.indexOf(id) !== -1) {
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

                const lastDayYear = new Date(year + 1, 0, 1);
                let days = [];
                for (let dia = new Date(year, 0, 1); dia <= lastDayYear; dia.setDate(dia.getDate() + 1)) {
                    if(dia.getFullYear() === year) {
                        let id = returnId(dia);
                        if ($('#' + id).css('background-color') === 'rgb(255, 0, 0)') {
                            let dad = $('#tdLegendsHolidays' + id);

                            if (dad !== undefined) {
                                let last = dad.children().last();
                                last = last.children().first();
                                days.push({
                                    "date": returnIdByDate(id),
                                    "description": last.val()
                                })
                            }
                        }
                    }
                }

                $('#tableLegendaFeriados tr').remove();
                $('#tableLegendaFeriados').append('<tr><th id="headerLegendaFeriados" colspan="2">FERIADOS - ' + year + '</th></tr>');

                for (var i = 0; i < days.length; i++) {
                    let {date, description} = days[i];
                    let identity = returnId(date);
                    var month = date.getMonth();
                    var day = date.getDate();
                    if (day < 10) {
                        day = '0' + day;
                    }

                    switch (month) {
                        case 0:
                            month = 'Jan';
                            break;
                        case 1:
                            month = 'Fev';
                            break;
                        case 2:
                            month = 'Mar';
                            break;
                        case 3:
                            month = 'Abr';
                            break;
                        case 4:
                            month = 'Mai';
                            break;
                        case 5:
                            month = 'Jun';
                            break;
                        case 6:
                            month = 'Jul';
                            break;
                        case 7:
                            month = 'Ago';
                            break;
                        case 8:
                            month = 'Set';
                            break;
                        case 9:
                            month = 'Out';
                            break;
                        case 10:
                            month = 'Nov';
                            break;
                        case 11:
                            month = 'Dez';
                            break;
                    }
                    day = day + '/' + month;
                    $('#tableLegendaFeriados').append('<tr id="tdLegendsHolidays' + identity + '" >' +
                        '<th style="padding-right: 10px; width: 20px;  ">' + day + '</th>' +
                        '<th class="texto-legenda"><input id="input' + identity + '" type="text" style="font-weight: bold; color: #212529" /></th>' +
                        '</tr>');

                    $('#input' + identity).val(description)
                }

                console.log(days);
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

    returnDays('rgb(0, 179, 179)');
    findByDaysSchool();

}

function returnDays(background) {
    const contador = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var hoje = new Date(year + 1, 0, 1);
    for (var dia = new Date(year, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
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
        return 'td0' + data.getDate() + '' + data.getMonth() + '' + data.getFullYear() + '';
    } else if (data.getMonth() < 10 && data.getDate() >= 10) {
        return 'td' + data.getDate() + '0' + data.getMonth() + '' + data.getFullYear() + '';
    } else if (data.getDate() < 10 && data.getMonth() < 10) {
        return 'td0' + data.getDate() + '0' + data.getMonth() + '' + data.getFullYear() + '';
    } else {
        return 'td' + data.getDate() + '' + data.getMonth() + '' + data.getFullYear() + '';
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


    const daysOfWeek = ["S", "D", "S", "T", "Q", "Q", "S", "S", "D", "S", "T", "Q", "Q", "S", "S", "D", "S", "T", "Q",
        "Q", "S", "S", "D", "S", "T", "Q", "Q", "S", "S", "D", "S", "T", "Q", "Q", "S", "S", "D", "Férias", "Dias letivos"];
    const arrayBooleanConfirma = [true, true, true, true, true, true, true, true, true, true, true, true];
    const arrayContadorDiasDoMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let Dates = [];
    let holidaysObjects = new Array();

    let calendario = await Calendario.get();

    let {dates} = calendario;
    for (let i = 0; i < dates.length; i++) {
        let dateMs = dates[i]['date'];
        let arrFormatDate = dateMs.split('-');

        dates[i]['date'] = new Date(arrFormatDate[2], arrFormatDate[1] - 1, arrFormatDate[0]);

    }

    const {id, ano, user, liberar, dataDeCriacao, sent} = calendario;
    const idCalendar = id;
    let {subtitulo, titulo} = calendario;

    let calendar = new Calendario(id, ano, titulo, subtitulo, liberar, dataDeCriacao, sent, user, dates);
    Dates = dates;

    $('#div-titulo').append('<table id="table-titulos"></table>');
    $('#table-titulos').append('<tr><td id="td-titulo"><input id="inputText-titulo" type="text" placeholder="Insira o titulo" maxlength="160" class="input-titulos"></td></tr>' +
        '<tr><td><input id="inputText-subtitulo" type="text" placeholder="Insira o subtítulo" class="input-titulos" maxlength="160"></td></tr>');
    year = parseInt(ano);
    $("#inputText-titulo").val(calendar.titulo);
    $("#inputText-subtitulo").val(calendar.subtitulo);

    $('#div-legendas').append('<table id="table-legends"></table>');
    $('#table-legends').append('<tr><th colspan="2" id="header-titulos">LEGENDA</th></tr>' +
        '<tr><td id="tdLengendaSemeste"></td><th class="texto-legenda">Data de início do semestre letivo e data limite de término do semestre letivo</th></tr>' +
        '<tr><td id="tdLegendaAtvPdg"></td><th class="texto-legenda">Atividades pedagógicas e administrativas, sem atividades acadêmicas</th></tr>' +
        '<tr><td id="tdLegendaFerias"></td><th class="texto-legenda">Férias docentes</th></tr>' +
        '<tr><td id="tdLegendaFeriados"></td><th class="texto-legenda">Feriados e pontos facultativos</th></tr>' +
        '<tr><td id="tdLegendaRecesso"></td><th class="texto-legenda">Recesso (com reposição de acordo com necessidade institucional)</th></tr>' +
        '<tr><td id="tdPontoFacultativo"></td><th class="texto-legenda">Ponto Facultativo até as 14h</th></tr>' +
        '<tr><td id="tdLegendaSolenidade"></td><th class="texto-legenda">Solenidades de colação de grau e formatura – data prevista</th></tr>');

    const hoje = new Date(year + 1, 0, 1);

    function returnMonth(month) {
        if (month === 'Jan') {
            return 0
        } else if (month === 'Feb') {
            return 1
        } else if (month === 'Mar') {
            return 2;
        } else if (month === 'Apr') {
            return 3;
        } else if (month === 'May') {
            return 4;
        } else if (month === 'Jun') {
            return 5;
        } else if (month === 'Jul') {
            return 6;
        } else if (month === 'Aug') {
            return 7;
        } else if (month === 'Sep') {
            return 8;
        } else if (month === 'Oct') {
            return 9;
        } else if (month === 'Nov') {
            return 10;
        } else if (month === 'Dec') {
            return 11;
        }
    }

    $('#select_colors').change(function () {
        corValue = ($(this).val());
    });


    function calendarCreate() {
        year = parseInt(year);
        $('#div-calendario').append('<table id="table-calendario"></table>');
        $('#table-calendario').append('<tr id="daysOfWeek"></tr>');
        var contador = 0;
        $('#daysOfWeek').append('<td> </td>');
        $('#daysOfWeek').append('<th style="padding-left: 30px"> </th>');
        while (contador != 39) {

            if (daysOfWeek[contador] === 'D') {
                $('#daysOfWeek').append('<th class="fimDeSemana">' + daysOfWeek[contador] + '</th>');
            } else if (daysOfWeek[contador + 1] === 'D' && daysOfWeek[contador] === 'S') {
                $('#daysOfWeek').append('<th class="fimDeSemana">' + daysOfWeek[contador] + '</th>');
            } else if (daysOfWeek[contador] === 'Férias') {
                $('#daysOfWeek').append('<th class="th-ferias">' + daysOfWeek[contador] + '</th>');
            } else if (daysOfWeek[contador] === 'Dias letivos') {
                $('#daysOfWeek').append('<th class="row-diasSemana th-diasLetivos" colspan="4">' + daysOfWeek[contador] + '</th>');
            } else {
                $('#daysOfWeek').append('<th class="row-diasSemana">' + daysOfWeek[contador] + '</th>');
            }
            contador++;
        }
        for (var i = 0; i < yearsOfMonth.length; i++) {
            $('#table-calendario').append('<tr id="tr-' + yearsOfMonth[i] + '"><th class="col-meses"' +
                '>' + yearsOfMonth[i] + '</th></tr>');
        }


        for (dia = new Date(year, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
            for (var j = 0; j < yearsOfMonth.length; j++) {
                if (yearsOfMonth[dia.getMonth()] === yearsOfMonth[j]) {
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
                                $('#tr-' + yearsOfMonth[dia.getMonth()]).append('<td class="fimDeSemana"> </td>');
                            } else {
                                $('#tr-' + yearsOfMonth[dia.getMonth()]).append('<td></td>');
                            }
                            arrayContadorDiasDoMes[dia.getMonth()]++;
                        }
                        arrayBooleanConfirma[dia.getMonth()] = false;
                    }
                }
            }
        }

        for (var dia = new Date(year, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
            for (var j = 0; j < yearsOfMonth.length; j++) {
                if (yearsOfMonth[dia.getMonth()] === yearsOfMonth[j]) {
                    if(dia.getFullYear() == year) {
                        if (dia.getDay() === 6 || dia.getDay() === 0) {
                            arrWeekendId.push(returnId(dia));
                            $('#tr-' + yearsOfMonth[j] + '').append('<td id="' + returnId(dia) + '" class="fimDeSemana">' +
                                '<button  ondblclick="comeBackDate(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')"' +
                                'onclick="selectionDay(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')"' +
                                'onmouseenter="mouseEnterColor(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')">' + dia.getDate() + '</button></td>');
                        } else {
                            $('#tr-' + yearsOfMonth[j] + '').append('<td id="' + returnId(dia) + '" >' +
                                '<button  ondblclick="comeBackDate(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')"' +
                                'onclick="selectionDay(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')"' +
                                'onmouseenter="mouseEnterColor(' + dia.getDate() + ', ' + dia.getMonth() + ', ' + dia.getFullYear() + ')">' + dia.getDate() + '</button></td>');
                        }
                        arrayContadorDiasDoMes[dia.getMonth()]++;
                    }
                }
            }
        }

        for (dia = new Date(year, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
            for (var j = 0; j < yearsOfMonth.length; j++) {
                if (yearsOfMonth[dia.getMonth()] === yearsOfMonth[j]) {
                    if (arrayBooleanConfirma[dia.getMonth()] === false) {
                        for (var j = arrayContadorDiasDoMes[dia.getMonth()]; j < 41; j++) {
                            if (j === 37 || j === 36 || j === 30)
                                $('#tr-' + yearsOfMonth[dia.getMonth()]).append('<td class="fimDeSemana"> </td>');
                            else if (j === 38)
                                $('#tr-' + yearsOfMonth[dia.getMonth()]).append('<th id="td-cont' + yearsOfMonth[dia.getMonth()] + '">  </th>');
                            else if (j === 39)
                                $('#tr-' + yearsOfMonth[dia.getMonth()]).append('<th style="width: 100px;" id="td-tot1' + yearsOfMonth[dia.getMonth()] + '">  </th>');
                            else if (j === 40)
                                $('#tr-' + yearsOfMonth[dia.getMonth()]).append('<th style="width: 100px;" id="td-tot2' + yearsOfMonth[dia.getMonth()] + '">  </th>');
                            else {
                                $('#tr-' + yearsOfMonth[dia.getMonth()]).append('<td > </td>');
                            }
                            arrayContadorDiasDoMes[dia.getMonth()]++;
                        }
                        arrayBooleanConfirma[dia.getMonth()] = true;
                    }
                }
            }

        }
        fillDatesInCalendar();
        returnDays('rgb(0, 179, 179)');

        // Função para preencher as datas do calendário
        function fillDatesInCalendar() {

            for (i = 0; i < Dates.length; i++) {
                let {typeDate, date, description} = Dates[i];
                let identity = returnId(date);
                if (typeDate === 'Data de início do semestre letivo e data limite de término do semestre letivo') {
                    $("#" + identity).css('background-color', 'rgb(0, 64, 128)');
                } else if (typeDate === 'Atividades pedagógicas e administrativas, sem atividades acadêmicas') {
                    $("#" + identity).css('background-color', 'rgb(255, 102, 204)');
                } else if (typeDate === 'Férias docentes') {
                    $("#" + identity).css('background-color', 'rgb(0, 179, 179)');
                } else if (typeDate === 'Feriados e pontos facultativos' && description === 'Ponto facultativo') {
                    console.log('a')
                    $("#" + identity).css('background-color', 'rgb(255, 0, 0)');
                } else if (typeDate === 'Feriados e pontos facultativos' && description !== 'Ponto facultativo') {
                    console.log('b')

                    holidaysCity.push(identity);
                    holidaysObjects.push(Dates[i]);
                } else if (typeDate === 'Recesso (com reposição de acordo com necessidade institucional)') {
                    $("#" + identity).css('background-color', 'rgb(255, 153, 51)');
                } else if (typeDate === 'Ponto Facultativo até as 14h') {
                    $("#" + identity).css('background-color', 'rgb(204, 204, 0)');
                } else if (typeDate === 'Solenidades de colação de grau e formatura ? data prevista') {
                    $("#" + identity).css('background-color', 'rgb(255, 255, 0)');
                } else if (typeDate === 'Dia letivo') {
                    $("#" + identity).css('background-color', 'rgba(0, 0, 0, 0)');
                } else if (typeDate === 'Fim de semana') {
                    $("#" + identity).css('background-color', 'rgb(194, 194, 163)');
                    arrWeekendId.push(identity);
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
            '<td>Total</td><td id="totalSecondHalf"> 0 </td>' +
            '</tr></table>');

        $('#div-legendaFeriados').append('<table id="tableLegendaFeriados"></table>');
        $('#tableLegendaFeriados').append('<tr><th id="headerLegendaFeriados" colspan="2">FERIADOS - ' + year + '</th></tr>');
        for (var i = 0; i < holidaysObjects.length; i++) {
            let {date, description} = holidaysObjects[i];
            let identity = returnId(date);
            $("#" + identity).css('background-color', 'rgb(255, 0, 0)');

            var month = date.getMonth();
            var day = date.getDate();
            if (day < 10) {
                day = '0' + day;
            }

            switch (month) {
                case 0:
                    month = 'Jan';
                    break;
                case 1:
                    month = 'Fev';
                    break;
                case 2:
                    month = 'Mar';
                    break;
                case 3:
                    month = 'Abr';
                    break;
                case 4:
                    month = 'Mai';
                    break;
                case 5:
                    month = 'Jun';
                    break;
                case 6:
                    month = 'Jul';
                    break;
                case 7:
                    month = 'Ago';
                    break;
                case 8:
                    month = 'Set';
                    break;
                case 9:
                    month = 'Out';
                    break;
                case 10:
                    month = 'Nov';
                    break;
                case 11:
                    month = 'Dez';
                    break;
            }
            day = day + '/' + month;
            $('#tableLegendaFeriados').append('<tr id="tdLegendsHolidays' + identity + '" >' +
                '<th style="padding-right: 10px; width: 20px;  ">' + day + '</th>' +
                '<th class="texto-legenda"><input id="input' + identity + '" type="text" style="font-weight: bold; color: #212529" /></th>' +
                '</tr>');

            $('#input' + identity).val(description)
        }

        const lastDayYear = new Date(year + 1, 0, 1);
        let days = [];
        for (let dia = new Date(year, 0, 1); dia <= lastDayYear; dia.setDate(dia.getDate() + 1)) {
            let id = returnId(dia);
            if($('#' + id).css('background-color')=== 'rgb(255, 0, 0)')        {
                let dad = $('#tdLegendsHolidays' + id);

                if (dad !== undefined) {
                    let last = dad.children().last();
                    last = last.children().first();
                    days.push({
                        "date": returnIdByDate(id),
                        "description": last.val()
                    })
                }
            }

        }
        $('#tableLegendaFeriados tr').remove();
        $('#tableLegendaFeriados').append('<tr><th id="headerLegendaFeriados" colspan="2">FERIADOS - ' + year + '</th></tr>');

        for (var i = 0; i < days.length; i++) {
            let {date, description} = days[i];
            let identity = returnId(date);
            var month = date.getMonth();
            var day = date.getDate();
            if (day < 10) {
                day = '0' + day;
            }

            switch (month) {
                case 0:
                    month = 'Jan';
                    break;
                case 1:
                    month = 'Fev';
                    break;
                case 2:
                    month = 'Mar';
                    break;
                case 3:
                    month = 'Abr';
                    break;
                case 4:
                    month = 'Mai';
                    break;
                case 5:
                    month = 'Jun';
                    break;
                case 6:
                    month = 'Jul';
                    break;
                case 7:
                    month = 'Ago';
                    break;
                case 8:
                    month = 'Set';
                    break;
                case 9:
                    month = 'Out';
                    break;
                case 10:
                    month = 'Nov';
                    break;
                case 11:
                    month = 'Dez';
                    break;
            }
            day = day + '/' + month;
            $('#tableLegendaFeriados').append('<tr id="tdLegendsHolidays' + identity + '" >' +
                '<th style="padding-right: 10px; width: 20px;  ">' + day + '</th>' +
                '<th class="texto-legenda"><input id="input' + identity + '" type="text" style="font-weight: bold; color: #212529" /></th>' +
                '</tr>');

            $('#input' + identity).val(description)
        }
    }

    $('#btnSalvar').on('click', async function () {
        var titulo = $('#inputText-titulo').val();
        var subtitulo = $('#inputText-subtitulo').val();


        if (titulo === "" || subtitulo === "") {
            return messageError("Título e subtítulos são obrigatórios.")
        }

        arrayObjectData = [];
        var i = 0;
        for (var dia = new Date(ano, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1), i++) {
            for (var j = 0; j < yearsOfMonth.length; j++) {
                if (yearsOfMonth[dia.getMonth()] === yearsOfMonth[j]) {
                    if (dia.getFullYear() == year) {
                        let id = returnId(dia);
                        let backgroundColor = $('#' + id).css('background-color');

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

                            console.log(dad.attr('id'))
                            if (dad.attr('id') !== undefined) {
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

                        if (i <= dates.length - 1) {
                            let {data_id} = dates[i];
                            let Data = new DataController(data_id, date, typeDate, description, null);
                            arrayObjectData.push(Data);
                        }
                    }
                }
            }
        }
        if (firstHalfTotal >= 100 && secondHalfTotal >= 100) {

            let calendar = new Calendario(idCalendar, ano, titulo, subtitulo, liberar, null, sent, user, arrayObjectData);
            let response = await Calendario.put(calendar);
            if (response === 'true') {
                menssagemSucess('Calendário alterado com sucesso :)', null);
            }
        } else {
            return messageError('Ops, cada semestre precisa ter no mínimo 100(cem)<br/>' +
                'dias letivos.');
        }
    });

    setTimeout(calendarCreate, 2000);
    setTimeout(findByDaysSchool, 2100);

});
