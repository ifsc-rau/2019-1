class DataController{
    constructor(data_id, date, typeDate, description, calendar){
        this.data_id = data_id;
        this.date = date;
        this.typeDate = typeDate;
        this.description = description;
        this.calendar = calendar;
    }

    get Data_id(){
        return this.data_id;
    }

    set Data_id(data_id){
        this.data_id = data_id;
    }

    get Date(){
        return this.date;
    }

    set Date(date){
        this.date = date;
    }

    get TypeDate(){
        return this.typeDate;
    }

    set TypeDate(typeDate){
        return this.typeDate;
    }

    get Description(){
        return this.description;
    }

    set Description(description){
        this.description = description;
    }

    get Calendar(){
        return this.calendar;
    }

    set Calendar(calendar){
        return this.calendar = calendar;
    }
}