class CalendarReleasedController{

    static async get(){
        let response = null;

        $.get({
            url: 'releasedCalendar',
            success: await function(data){
                response = data;
            },
            error: await function () {

            }
        });

        return response;
    }
}