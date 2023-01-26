/*jquery way of doing it*/
$("#btnSend").click(function () {
    /*craeting variables and assigning them to ID's on html page*/
    var asign = $("#g1").val();
    asign = (asign * 0.5);
    var gp = $("#g2").val();
    gp = (gp * 0.1);
    var quiz = $("#g3").val();
    quiz = (quiz * 0.1);
    var mexam = $("#g4").val();
    mexam = (mexam * 0.1);
    var fexam = $("#g5").val();
    fexam = (fexam * 0.1);
    var intex = $("#g6").val();
    intex = (intex * 0.1);

    /*math to get the final grade percent*/
    var finalPct = asign + gp + quiz + mexam + fexam + intex

    /*If statement to assign letter grade to the perentage score*/
    var letter_grade = '';
    if (finalPct >= 94) {
        letter_grade = 'A'
    }    
    else if (finalPct >= 90) {
        letter_grade = 'A-'
    }
    else if (finalPct >= 87) {
        letter_grade = 'B+'
    }
    else if (finalPct >= 84) {
        letter_grade = 'B'
    }
    else if (finalPct >= 80) {
        letter_grade = 'B-'
    }
    else if (finalPct >= 77) {
        letter_grade = 'C+'
    }
    else if (finalPct >= 74) {
        letter_grade = 'C'
    }
    else if (finalPct >= 70) {
        letter_grade = 'C-'
    }
    else if (finalPct >= 67) {
        letter_grade = 'D+'
    }
    else if (finalPct >= 64) {
        letter_grade = 'D'
    }
    else if (finalPct >= 60) {
        letter_grade = 'D-'
    }
    else if (finalPct < 60) {
        letter_grade = 'E'
    }

    /*sends back to html page*/
    $("#p1").html(`Final Grade: ${letter_grade} (${finalPct.toPrecision(4)}%)`);
 });


/*This code below would be if you want to turn it into an alert instead*/
/*$("#btnSend").click(function () {*/
/*    alert("Assignments: " + $("#g1").val() +
        ", Group Project: " + $("#g2").val() +
        ", Quizzes: " + $("#g3").val() +
       ", Midterm Exam: " + $("#g4").val() +
        ", Final Exam: " + $("#g5").val() +
        ", INTEX: " + $("#g6").val());*/
    /*$("#picKat").fadeout("slow");*/
/*fadetoggle() when clicked once it fades out and clicked twice it fades in*/
/*})*/

///This is an exam[ple without using jquery]
////document.getElementById("btnSend").addEventListener("click", function () {
////    alert("From: " + document.getElementById("g1").value +
////        ", Subject: " + document.getElementById("g2").value +
////        ", Message: " + document.getElementById("g3").value);
////})


