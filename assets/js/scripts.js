$(document).ready(function () {
    var gender = "";
    var purpose = "";
    var dating = "";
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var vName;
    var date;
    var month;
    var year;
    var dob;
    var vLocation;
    var vEmail;

    $('div#question1-block').css({"display": "block"});
    $('div#question2-block').css({"display": "none"});
    $('div#question3-block').css({"display": "none"});
    $('div#question4-block').css({"display": "none"});

    $(".sex").click(function () {
        var value = $(this).attr('value');
        if (value == "Male") {
            gender = value;
        } else if (value == "Female") {
            gender = value;
        } else {
            gender = "Male";
        }
    });

    $("input.sex").click(function () {
        $('div#question1-block').css({"display": "none"});
        $('div#question2-block').css({"display": "block"});
        $('div#question3-block').css({"display": "none"});
        $('div#question4-block').css({"display": "none"});
    });

    $("#back2").click(function () {
        $('div#question1-block').css({"display": "block"});
        $('div#question2-block').css({"display": "none"});
        $('div#question3-block').css({"display": "none"});
        $('div#question4-block').css({"display": "none"});
    });

    $(".purposeof").click(function () {
        // alert("Button clicked");
        var value = $(this).attr('value');
        if (value == "Chat") {
            purpose = value;
        } else if (value == "Make New Friends") {
            purpose = value;
        } else if (value == "Date") {
            purpose = value;
        } else {
            purpose = "Chat";
        }
    });

    $("input.purposeof").click(function () {
        $('div#question1-block').css({"display": "none"});
        $('div#question2-block').css({"display": "none"});
        $('div#question3-block').css({"display": "none"});
        $('div#question4-block').css({"display": "block"});
    });

    $("input#btnDate").click(function () {
        $('div#question1-block').css({"display": "none"});
        $('div#question2-block').css({"display": "none"});
        $('div#question3-block').css({"display": "block"});
        $('div#question4-block').css({"display": "none"});
        $("#pointers").append("<span>&nbsp;</span>");
    });


    $("#back3").click(function () {
        $('div#question1-block').css({"display": "none"});
        $('div#question2-block').css({"display": "block"});
        $('div#question3-block').css({"display": "none"});
        $('div#question4-block').css({"display": "none"});
        $("#pointers>span:nth-last-child(2)").remove();
    });

    $(".datewith").click(function () {
        var value = $(this).attr('value');
        if (value == "Guys") {
            dating = value;
        } else if (value == "Girls") {
            dating = value;
        } else if (value == "Both") {
            dating = value;
        }

    });

    $("input.datewith").click(function () {
        $('div#question1-block').css({"display": "none"});
        $('div#question2-block').css({"display": "none"});
        $('div#question3-block').css({"display": "none"});
        $('div#question4-block').css({"display": "block"});
    });

    var divWidth = $('div#dob').innerWidth();
    $('input.input-bio').css({"width": divWidth - 50});

    for (var i = 0; i <= 31; i++) {
        if (i == 0) {
            $('#dob-day').append($('<option>', {value: '', text: 'Day'}));
        }
        $('#dob-day').append($('<option>', {value: i + 1, text: i + 1}));
    }

    for (var j = 0; j < 12; j++) {
        if (j == 0) {
            $('#dob-month').append($('<option>', {value: '', text: 'Month'}));
        }
        $('#dob-month').append($('<option>', {value: months[j], text: months[j]}));
    }

    for (var k = 2001; k >= 1970; k--) {
        if (k == 2001) {
            $('#dob-year').append($('<option>', {value: '', text: 'Year'}));
        }
        $('#dob-year').append($('<option>', {value: k - 1, text: k - 1}));
    }

    $("#back4").click(function () {
        $('div#question1-block').css({"display": "none"});
        $('div#question2-block').css({"display": "block"});
        $('div#question3-block').css({"display": "none"});
        $('div#question4-block').css({"display": "none"});
    });

    // $("#signupForm").click(function(){
    // 	vName = $("#inName").val();
    // 	day = $("#dob-day option:selected").text();
    // 	month = $("#dob-month option:selected").text();
    // 	year = $("#dob-year option:selected").text();
    // 	if (day ==) {}

    // 	dob = ""+ day + " - " + month + " - " + year;
    // 	vLocation = $("#inLocation").val();
    // 	vEmail = $("#inEmail").val();

    // 	console.log(gender + "\n" + purpose + "\n" + dating +" \n"+vName + "\n"+ day + "-" + month + "-" + year + "\n" + vLocation + "\n" + vEmail)
    // });

});