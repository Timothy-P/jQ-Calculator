var Beta;
var ACI = "0";
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
    $("#body").append("<div id='averagecalbod' style='background-color: cadetblue;font-size: 3em;top: 25%;left: 25%;width: 740px;height: 300px;position:fixed;display:none; border-radius:12px;' class='averagecalbod'>"+"</div>");
    $(".averagecalbod").append("<button style='left:25%;top:25%; position:fixed;border-radius:12px;' onclick='CA()'>X</button>");
    $(".averagecalbod").append("<center id='averagecalcent'></center>");
    $("#averagecalcent").append("<input type='number' id='averageI1' style='cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;'>");
    $("#averagecalcent").append("<input type='number' id='averageI2' style='cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;'>");
    $("#averagecalcent").append("<br>");
    $("#averagecalcent").append("<input type='number' id='averageI3' style='cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;'>");
    $("#averagecalcent").append("<input type='number' id='averageI4' style='cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;'>");
    $("#averagecalcent").append("<br>");
    $("#averagecalcent").append("<input disabled id='averageR' style='cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;display: inline-block;'>");
    $(".averagecalbod").append("<button style='border-radius:12px; left:61%;top:43.5%;position:fixed;font-size:0.5em;' onclick='Average()'>Calculate</button>");
    $('.averagecalbod').slideDown();
    $("#calcbody").slideUp();
    $(".sidebarB").slideUp();
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
function Average() {
    ACI = "0"
    if (document.getElementById("averageI1").value != "") {
        ACI = eval(ACI+1);
    };
    if (document.getElementById("averageI2").value != "") {
        ACI = eval(ACI+1);
    };
    if (document.getElementById("averageI3").value != "") {
        ACI = eval(ACI+1);
    };
    if (document.getElementById("averageI4").value != "") {
        ACI = eval(ACI+1);
    };
    document.getElementById("averageR").value = eval("("+document.getElementById("averageI1").value+"+"+document.getElementById("averageI2").value+"+"+document.getElementById("averageI3").value+"+"+document.getElementById("averageI4").value+")"+"/"+ACI)
};