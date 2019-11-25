class Calendario {
    constructor(id, ano, titulo, subtitulo, liberar, dataDeCriacao, sent, user, dates) {
        this.id = id;
        this.ano = ano;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.liberar = liberar;
        this.dataDeCriacao = dataDeCriacao;
        this.sent = sent;
        this.user = user;
        this.dates = dates;
    }



    static async post(calendar) {
        let response = null;

        await $.post({
            url: 'calendario',
            data: {
                "calendario": JSON.stringify(calendar)
            },
            success: await function (data) {
                response = data;
            },
            error: await function () {
                messageError('Erro na requisição, por favor entre em contato<br/>com o suporte.');
            }
        });

        return response;
    };

    static async get() {
        let response = null;

        await $.get({
            url: 'calendario',
            success: await function (data) {
                response = data;
            },
            error: await function () {
                messageError('Erro na requisição, por favor entre em contato<br/>com o suporte.');
            }
        });
        return response;
    }

    static async put(calendario) {
        let response = null;

        await $.ajax({
            type: 'PUT',
            url: 'calendario',
            data: {
                "calendario": JSON.stringify(calendario)
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

