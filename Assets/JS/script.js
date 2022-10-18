$(document).ready(function(){
    const nine = $("#nineAM");
    const ten = $("#tenAM");
    const eleven = $("#elevenAM");
    const twelve = $("#twelvePM");
    const one = $("#onePM");
    const two = $("#twoPM");
    const three = $("#threePM");
    const four = $("#fourPM");
    const five = $("#fivePM");
    const save = $("span.fa-save");
    
    const workDayHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    let dayOfWeek = "";
    let month = "";
    let now = luxon.DateTime;
    let date = now.local();
    let hour = date.hour;
    

    let whatHour = function() {
       
        for (let i = 0; i < workDayHours.length; i++){
            let currentHour = "";

            switch (workDayHours[i]){
                case 9:
                    currentHour = "div.nine";
                    break;
                case 10:
                    currentHour = "div.ten";
                    break;
                case 11:
                    currentHour = "div.eleven";
                    break;
                case 12:
                    currentHour = "div.twelve";
                    break;
                case 13:
                    currentHour = "div.one";
                    break;
                case 14:
                    currentHour = "div.two";
                    break;
                case 15:
                    currentHour = "div.three";
                    break;
                case 16:
                    currentHour = "div.four";
                    break;
                case 17:
                    currentHour = "div.five";
            }

            if (hour <= 17 && workDayHours[i] < hour){
                $(currentHour).removeClass("future");
                $(currentHour).removeClass("present");
                $(currentHour).addClass("past");
            }
            else if (hour <= 17 && workDayHours[i] == hour){
                $(currentHour).removeClass("future");
                $(currentHour).removeClass("past");
                $(currentHour).addClass("present");
            }
            else if (hour <= 17 && workDayHours[i] > hour){
                $(currentHour).removeClass("present");
                $(currentHour).removeClass("past");
                $(currentHour).addClass("future");
            }
            else{
                $(currentHour).removeClass("present");
                $(currentHour).removeClass("past");
                $(currentHour).addClass("future");
                saveSchedule();
            }
        }
    }

    let saveSchedule = function(){

        localStorage.setItem("nineAM", nine.val());
        localStorage.setItem("tenAM", ten.val());
        localStorage.setItem("elevenAM", eleven.val());
        localStorage.setItem("twelvePM", twelve.val());
        localStorage.setItem("onePM", one.val());
        localStorage.setItem("twoPM", two.val());
        localStorage.setItem("threePM", three.val());
        localStorage.setItem("fourPM", four.val());
        localStorage.setItem("fivePM", five.val());
    };

    

    let setDay = function() {
        let today = date.weekday;
        
        switch (today) {
            case 1:
                dayOfWeek = "Monday";
                break;
            case 2: 
                dayOfWeek = "Tuesday";
                break;
            case 3:
                dayOfWeek = "Wednesday";
                break;
            case 4:
                dayOfWeek = "Thursday";
                break;
            case 5:
                dayOfWeek = "Friday";
                break;
            case 6:
                dayOfWeek = "Saturday";
                break;
            case 7:
                dayOfWeek = "Sunday";
                break;
                
        }

    }

    let setMonth = function() {
        let thisMonth = date.month;

        switch (thisMonth) {
            case 1:
                month = "January";
                break;
            case 2:
                month = "February";
                break;
            case 3:
                month = "March";
                break;
            case 4:
                month = "April";
                break;
            case 5:
                month = "May";
                break;
            case 6:
                month = "June";
                break;
            case 7:
                month = "July";
                break;
            case 8:
                month = "August";
                break;
            case 9:
                month = "September";
                break;
            case 10:
                month = "October";
                break;
            case 11:
                month = "November";
                break;
            case 12:
                month = "December";
                break;
        }
    }

    let displayDate = function(){
        $("#currentDay").text(dayOfWeek + ", " + month + " " + date.day);
    }

    let getSchedule = function (){
        let getNine = localStorage.getItem("nineAM");
        let getTen = localStorage.getItem("tenAM");
        let getEleven = localStorage.getItem("elevenAM");
        let getTwelve = localStorage.getItem("twelvePM");
        let getOne = localStorage.getItem("onePM");
        let getTwo = localStorage.getItem("twoPM");
        let getThree = localStorage.getItem("threePM");
        let getFour = localStorage.getItem("fourPM");
        let getFive = localStorage.getItem("fivePM");

        if (getNine !== null){
            nine.val(getNine);
        }

        if(getTen !== null){
            ten.val(getTen);
        }

        if(getEleven !== null){
            eleven.val(getEleven);
        }

        if(getTwelve !== null){
            twelve.val(getTwelve);
        }

        if(getOne !== null) {
            one.val(getOne);
        }

        if(getTwo !== null){
            two.val(getTwo);
        }

        if(getThree !== null){
            three.val(getThree);
        }

        if(getFour !== null) {
            four.val(getFour);
        }

        if(getFive !== null) {
            five.val(getFive);
        }
    }

    let init = function(){
        getSchedule();
    }
    
    init();
    setDay();
    setMonth();
    displayDate();
    whatHour();

    save.on("click", saveSchedule);

    
}); 