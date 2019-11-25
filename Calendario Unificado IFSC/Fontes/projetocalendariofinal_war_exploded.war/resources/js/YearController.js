class YearController {

   static async post(year){
       let response =  null;
       await $.post({
           url: 'ano',
           data: {
               'ano': year,
           },
           success: await function (){
               response = true;
           },
           error: await function(){
               messageError('Erro na requisição, por favor entre em contato<br/>com o suporte.');
           },
       });

       return response;
   }

   static async get(){
       let response = null;
       await $.get({
           url: 'ano',
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