class Campus {

    constructor(id, nome, cidade, utilizacao) {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
        this.utilizacao = utilizacao;
    }

    static async findCities(cities) {
        return new Promise((resolve, reject) => {
            const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/42/municipios';
            $.ajax({
                method: 'GET',
                url: URL,
                dataType: 'json',
                success: resolve,
                error: reject,
            }).done((data) => {
                for (let i = 0; i < data.length; i++) {
                    let {nome} = data[i];
                    cities.push(nome);
                }
            });
        });
    }

    static async post(campus) {
        let res = null;
        await $.post({
            url: 'campus',
            data: {
                "campus": JSON.stringify(campus),
            },
            success: await function (data) {
                res = data;
            },
            error: await function () {
                messageError('Erro na requisição, por favor entre em contato<br/>com o suporte.')
            }
        });

        return res;
    }

    static async get(){
        let response = null;
        await $.get({
            url: 'campus',
            success: await function (data) {
                response = data;
            },
            error: await function () {
                messageError('Erro na requisição, por favor entre em contato<br/>com o suporte.')
            }
        });

        return response;
    }

    static async put(campus){
        let response = null;

        await $.ajax({
           type: 'PUT',
           url: 'campus',
           data: {
               "campus": JSON.stringify(campus),
           },
           success: await function (data) {
               response = data;
           },
           error: await function () {
               messageError('Erro na requisição, por favor entre em contato<br/>com o suporte.')
           }
        });

        return response;
    }
}
