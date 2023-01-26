////document.getElementById("btnSend").addEventListener("click", function () {
////    alert("From: " + document.getElementById("g1").value +
////        ", Subject: " + document.getElementById("g2").value +
////        ", Message: " + document.getElementById("g3").value);
////})


/*jquery way of doing it*/
$("#btnSend").click(function() {
    alert("From: " + $("#g1").val() +
        ", Subject: " + $("#g2").val() +
        ", Message: " + $("#g3").val());
    $("#picKat").fadeout("slow");
/*fadetoggle() when clicked once it fades out and clicked twice it fades in*/
})