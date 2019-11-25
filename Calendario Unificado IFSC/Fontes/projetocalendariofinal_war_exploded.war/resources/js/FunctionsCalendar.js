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
    const today = new Date(year + 1, 0, 1);
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

    for(var i=0;i<12;i++){
        if($('#td-cont' + yearsOfMonth[i]).is(':empty')){
            $('#td-cont' + yearsOfMonth[i]).addClass('no-border');
        }
        if($('#td-tot1' + yearsOfMonth[i]).is(':empty')){
            $('#td-tot1' + yearsOfMonth[i]).addClass('no-border-bottom');
        }
        if($('#td-tot2' + yearsOfMonth[i]).is(':empty')){
            $('#td-tot2' + yearsOfMonth[i]).addClass('no-border-bottom');
        }


    }
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
            2
        case 7:
            $('#' + id).css('background-color', 'rgba(0, 0, 0, 0)');// Essa cor é para Dia letivo
            cor = 'rgba(0, 0, 0, 0)';
            break;
        case 8:
            if (arrWeekendId.indexOf(id) !== -1) {
                $('#' + id).css('background-color', '#c2c2a3');
            } else {
                return Warning('Esse dia não é um final de semana');
            }
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


    returnDays('rgb(0, 179, 179)');
    findByDaysSchool();

}

function returnDays(background) {
    const contador = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var hoje = new Date((parseInt(year) + 1), 0, 1);
    for (var dia = new Date(year, 0, 1); dia <= hoje; dia.setDate(dia.getDate() + 1)) {
        for (var j = 0; j < yearsOfMonth.length; j++) {
            if (yearsOfMonth[dia.getMonth()] === yearsOfMonth[j]) {
                for (var j = 0; j < yearsOfMonth.length; j++) {
                    if (yearsOfMonth[dia.getMonth()] === yearsOfMonth[j]) {
                        $('#' + returnId(dia)).css('background-color');
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

