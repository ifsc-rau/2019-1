const messageError = (msg) => {
    $('.errors').html('<div class="alert menssageError error-enter" ' +
        'role="alert">' +
        ' ' + msg + '</div>');
    setTimeout(()=>{
        $(".alert").removeClass("error-enter").addClass("error-hide");
        setTimeout(function (){
            $(".alert").remove()
        }, 500);

    }, 5000);
};

/*
    Geralmente para um dar um sucesso já é encaminho para outra pagina,
    então por isso o params url. Caso não precisar colocar como NULL a url
 */
const menssagemSucess = (msg, url) => {
    $('.errors').html('<div class="alert alertSucess error-enter" ' +
        'role="alert">' +
        ' ' + msg + '  </div>');
    setTimeout(()=>{
        $(".alert").removeClass("error-enter").addClass("error-hide");
        setTimeout(function (){
            $(".alert").remove();
            if(url !== null){
                window.location.replace(url);
            }


        }, 500);

    }, 2000);
};

const messageWarning = (msg) => {
    $('.errors').html('<div class="alert warning error-enter" ' +
        'role="alert">' +
        ' ' + msg + '</div>');
    setTimeout(()=>{
        $(".alert").removeClass("error-enter").addClass("error-hide");
        setTimeout(function (){
            $(".alert").remove()
        }, 500);

    }, 5000);
};


