
$(document).ready(async function () {
    const yearsOfMonth = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"];
    const daysOfWeek = ["S", "D", "S", "T", "Q", "Q", "S", "S", "D", "S", "T", "Q", "Q", "S", "S", "D", "S", "T", "Q",
        "Q", "S", "S", "D", "S", "T", "Q", "Q", "S", "S", "D", "S", "T", "Q", "Q", "S", "S", "D", "Férias", "Dias letivos"];
    const arrayBooleanConfirma = [true, true, true, true, true, true, true, true, true, true, true, true];
    const arrayContadorDiasDoMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const holidaysCity = [];
    const holidaysNational = [];
    var firstHalfTotal = 0;
    var secondHalfTotal = 0;
    let holidaysObjects = [];

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
    year = ano;
    let calendar = new Calendario(id, ano, titulo, subtitulo, liberar, dataDeCriacao, sent, user, dates);
    let Dates = dates;

    $('#div-titulo').append('<table id="table-titulos"></table>');
    $('#table-titulos').append('<tr><td id="td-titulo"><input id="inputText-titulo" type="text" placeholder="Insira o titulo" maxlength="160" class="input-titulos"></td></tr>' +
        '<tr><td><input id="inputText-subtitulo" type="text" placeholder="Insira o subtítulo" class="input-titulos" maxlength="160"></td></tr>');
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
                            $('#tr-' + yearsOfMonth[j] + '').append('<td id="' + returnId(dia) + '" ' +
                                'class="fimDeSemana" ' +
                                'style="padding-right: 10px; padding-left: 10px;"> ' + dia.getDate() + ' </td>');
                        } else {
                            $('#tr-' + yearsOfMonth[j] + '').append('<td id="' + returnId(dia) + '" ' +
                                'style="padding-right: 10px; padding-left: 10px;">' + dia.getDate() + '</td>');

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
        findByDaysSchool();
        returnDays('rgb(0, 179, 179)');

        // Função para preencher as datas do calendário
        function fillDatesInCalendar() {

            for (i = 0; i < Dates.length; i++) {
                let {typeDate, date, description} = Dates[i];
                let identity = returnId(date);
                if (typeDate === 'Data de início do semestre letivo e data limite de término do semestre letivo') {
                    $("#" + identity).css('background-color', 'rgb(0, 64, 128)');
                    $('#' + identity).addClass('boldWhite')
                } else if (typeDate === 'Atividades pedagógicas e administrativas, sem atividades acadêmicas') {
                    $("#" + identity).css('background-color', 'rgb(255, 102, 204)');
                } else if (typeDate === 'Férias docentes') {
                    $("#" + identity).css('background-color', 'rgb(0, 179, 179)');
                } else if (typeDate === 'Feriados e pontos facultativos' && description === 'Ponto facultativo') {
                    $("#" + identity).css('background-color', 'rgb(255, 0, 0)');
                } else if (typeDate === 'Feriados e pontos facultativos' && description !== 'Ponto facultativo') {
                    $("#" + identity).css('background-color', 'rgb(255, 0, 0)');
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

        if(holidaysObjects.length > 0) {
            $('#div-legendaFeriados').append('<table id="tableLegendaFeriados"></table>');
            $('#tableLegendaFeriados').append('<tr><th id="headerLegendaFeriados" colspan="2">FERIADOS - ' + year + '</th></tr>');


            for (var i = 0; i < holidaysObjects.length; i++) {

                let {date, description} = holidaysObjects[i];
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
                    '<th style="padding-right: 10px; max-width: 130px">' + day + '</th>' +
                    '/*<th class="texto-legenda" style="width: 100%;"> ' + description + '</th>*/' +
                    '</tr>');
            }
        }
    }

    setTimeout(calendarCreate, 2000);
    setTimeout(findByDaysSchool,  2100);
});

var cache_width = $('#renderPDF').width(); //Criado um cache do CSS
var a4  =[ 1400,  1400]; // Widht e Height de uma folha a4

function getPDF(){
    menssagemSucess('Gerando PDF do calendário...', null);
    // Setar o width da div no formato a4
    $("#renderPDF").width(2000).css('max-width','none');
    // Aqui ele cria a imagem e cria o pdf
    html2canvas($('#renderPDF')[0]).then( canvas => {
        var img = canvas.toDataURL("image/png",1.0);
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'cm',
            format: a4
        })
        doc.addImage(img, 'JPEG', 0, 0);
        doc.save('calendario' + new Date().getMonth() + "" + new Date().getDate() + "" +  new Date().getFullYear() + "" + new Date().getTime() );
        //Retorna ao CSS normal
        $('#renderPDF').width(cache_width);
    });
}
