function logout(){
    $.post({
        url: 'menu',
        data: {
            "data" : "true",
        },
        success: function () {
            window.location.replace('index.xhtml')
        },
        error: function () {
            console.log('error');
        }
    })
}