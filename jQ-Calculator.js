var Beta;
function A() {
    var B = document.getElementById("calcinput").value;
    let expression = document.getElementById("calcinput").value;
    let result;
    try {
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
        result = math.evaluate(expression);
        document.getElementById("calcinput").value = result;
    } catch (error) {
        document.getElementById("calcinput").value = "Error";
    }
    var C = document.getElementById("calcinput").value;
    $("#history").append('<p>'+B + "=" + C+'</p>')
};
function B() {
    $("#mainhist").slideToggle()
}
function parathe() {
    if (Beta== "1") {
        document.calculator.ans.value += "("
        Beta = "2"
    }
    else {
        document.calculator.ans.value += ")"
        Beta= "1"
    }
}
function DEL() {
    document.getElementById("calcinput").value = document.getElementById("calcinput").value.slice(0, -1);
};
// Now, I'm gonna have to do .ajax because Chrome is garbage and decided to make localstorage useless. DX
$(document).on("unload", function() {
    localStorage.setItem("calcinputLocal", document.getElementById("caclinput").value)
});
$(document).on("load", function() {
    document.getElementById("calcinput").value = localStorage.getItem("calcinputLocal")
});
/*$.ajax({
    url: 'path.php',
    type: 'PUT',
    success: function(data) {
      alert("Data set.")
    }
});*/

function C() {
    // Checking out what I'm doing, eh? Just change the alert line to a comment and the code to
    // an actual bit of code. Send me an email or message about what you think! :D

    /*$("#body").append("<div id='averagecalbod' style='background-color: cadetblue;font-size: 3em;top: 25%;left: 25%;width: 740px;height: 300px;position:fixed;display:none;' class='averagecalbod'>"+"</div>");
    $(".averagecalbod").append("<button onclick='CA()'>")
    $(".averagecalbod").append("<center id='averagecalcent'></center>");
    $("#averagecalcent").append("<input id='averageI1' style='background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border:5px;font-size:.5em;'>");
    $("#averagecalcent").append("<input id='averageI2' style='background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border:5px;font-size:.5em;'>");
    $("#averagecalcent").append("<br>");
    $("#averagecalcent").append("<input id='averageI3' style='background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border:5px;font-size:.5em;'>");
    $("#averagecalcent").append("<input id='averageI4' style='background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border:5px;font-size:.5em;'>");
    $('.averagecalbod').slideDown();
    $("#calcbody").slideUp();
    $(".sidebarB").slideUp();*/
    alert("Hello. This isn't working currently.\nCome back later when it is.\nThis area is going well, so I won\'t be too long.")
}

function CA() {
    $("#calcbody").slideDown();
    $(".sidebarB").slideDown();
    $(".averagecalbod").slideUp();
    setTimeout('document.getElementById("averagecalbod").remove();', 1000)
}

function Clearhist() {
    document.getElementById("history").innerHTML = ""
}