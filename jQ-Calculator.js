var Beta;
var X1;
var X2;
var X;
var Y1;
var Y2;
var Y;
var Slope;
var Yint;
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
        document.getElementById("calcinput").value += "("
        Beta = "2"
    }
    else {
        document.getElementById("calcinput").value += ")"
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
    $('.averagecalbod').fadeIn();
    $("#calcbody").fadeOut();
    $(".sidebarB").fadeOut();
}

function CA() {
    $("#calcbody").fadeIn();
    $(".sidebarB").fadeIn();
    $(".averagecalbod").fadeOut();
    setTimeout('document.getElementById("averagecalbod").remove();', 1000)
}
function CIM() {
    $("#calcbody").fadeIn();
    $(".sidebarB").fadeIn();
    $("#intmenu").fadeOut();
    setTimeout('document.getElementById("intmenu").remove();', 1000)
}
function CIM1() {
    $("#calcbody").fadeIn();
    $(".sidebarB").fadeIn();
    $("#PISI").fadeOut();
    setTimeout('document.getElementById("PISI").remove();', 1000)
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
function PISIC() {
    if (Y1<="0" && X1<="0") {
        XPI = Math.abs(X1)
        YPI = Math.abs(Y1)
        Slope = "("+YPI+"/"+XPI+")";
        document.getElementById("PISIR1").value = "Y+"+YPI+"="+Slope+"(X+"+XPI+")";
    }
    else if (Y1<="0") {
        YPI = Math.abs(Y1)
        Slope = "-"+"("+YPI+"/"+X1+")";
        document.getElementById("PISIR1").value = "Y+"+YPI+"="+Slope+"(X-"+X1+")";
    }
    else if (X1<="0") {
        XPI = Math.abs(X1)
        Slope = "-"+"("+Y+"/"+XPI+")"
        document.getElementById("PISIR1").value = "Y-"+Y1+"="+Slope+"(X+"+XPI+")";
    }
    else {
        Slope = "("+Y+"/"+X+")"
        document.getElementById("PISIR1").value = "Y-"+Y1+"="+Slope+"(X-"+X1+")";
    }
    SC()
}
function intmenue1() {
    $("#body").append("<div id='PISI' style='background-color: cadetblue;font-size: 3em;top: 12%;left: 25%;width: 740px;height: 500px;position:fixed;display:none; border-radius:12px;' class='averagecalbod'>"+"</div>");
    $("#PISI").append('<button style="left: 25%;top:12%;position:fixed;border-radius:12px;" onclick="CIM1()">X</button>');
    $("#PISI").append('<p style="position:fixed;left: 35%;top: 7%;font-size:0.9em">X1</p>')
    $("#PISI").append('<input type="number" id="PISII1" style="top: 20%;left: 25%;position: fixed;cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;">')
    $("#PISI").append('<input type="number" id="PISII2" style="top: 20%;left: 25%;position: fixed;cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;">')
    $("#PISI").append('<input type="number" id="PISII3" style="top: 20%;left: 25%;position: fixed;cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;">')
    $("#PISI").append('<p style="position:fixed;left: 60%;top: 7%;font-size:0.9em">Y1</p>')
    $("#PISI").append('<p style="position:fixed;left: 60%;top: 7%;font-size:0.9em">Y1</p>')
    $("#PISI").append('<p style="position:fixed;left: 60%;top: 7%;font-size:0.9em">Y1</p>')
    $("#PISI").append('<input type="number" id="PISII4" style="top: 20%;left: 50%;position: fixed;cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;">')
    $("#PISI").append('<p style="position:fixed;left: 60%;top: 27%;font-size:0.9em">Y2</p>')
    $("#PISI").append('<input type="number" id="PISII5" style="top: 40%;left: 25%;position: fixed;cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;">')
    $("#PISI").append('<p style="position:fixed;left: 35%;top: 27%;font-size:0.9em">X2</p>')
    $("#PISI").append('<input type="number" id="PISII6" style="top: 40%;left: 50%;position: fixed;cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;">')
    $("#PISI").append('<p style="position:fixed;left: 31%;top: 47%;font-size:0.9em">Point-int</p>')
    $("#PISI").append('<input disabled="" id="PISIR1" style="top: 60%;left: 25%;position: fixed;cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;display: inline-block;">')
    $("#PISI").append('<p style="position:fixed;left: 56%;top: 47%;font-size:0.9em">Slope-int</p>')
    $("#PISI").append('<input disabled="" id="PISIR2" style="top: 60%;left: 50%;position: fixed;cursor:auto;background-color: turquoise;height: auto;width: auto;border: 12px;padding: 5px;border-radius: 12px;color:black;border-color: black;border-width:5px;font-size:.5em;display: inline-block;">')
    $("#PISI").append('<button style="left: 42%;top: 72%;position:fixed;border-radius:12px;height: auto;width: auto;font-size: 0.9em;" onclick="XC()">Calculate</button>')
    $("#intmenu").fadeOut();
    setTimeout('document.getElementById("intmenu").remove();', 1000)
    $("#PISI").fadeIn()
}
function intmenu2C() {
    $("#body").append("<div id='PISI2' style='background-color: cadetblue;font-size: 3em;top: 12%;left: 25%;width: 740px;height: 500px;position:fixed;display:none; border-radius:12px;' class='averagecalbod'>"+"</div>");
    $("#PISI2").append('<button style="left: 25%;top:12%;position:fixed;border-radius:12px;" onclick="CIM1()">X</button>');
    $("#PISI2").append('<p style="font-size:0.8em;position:fixed;left:25%;top:30%;">Y=</p>')
    $("#PISI2").append('<input type="numbers" style="font-size:0.6em;position:fixed;left: 28.5%;top: 35.5%;width: 90px;">')
    $("#PISI2").append('<p style="font-size:0.8em;position:fixed;left: 35%;top:30%;">X(</p>')
    $("#PISI2").append('<p style="font-size:0.8em;position:fixed;left: 40%;top:30%;">)</p>')
    $("#PISI2").append('<p style="font-size: 0.5em;position:fixed;left: 37.5%;top: 33%;">+</p>')
    $("#PISI2").append('<p style="font-size:0.4em;position:fixed;left: 39.3%;top: 35%;">-</p>')
    $("#PISI2").append('<p style="font-size:0.6em;position:fixed;left: 38.5%;top: 32.5%;">/</p>')
    $("#PISI2").append('<input type="numbers" style="font-size:0.6em;position:fixed;left: 41%;top: 35.5%;width: 90px;">')

    $("#intmenu").fadeOut();
    setTimeout('document.getElementById("intmenu").remove();', 1000)
    $("#PISI2").fadeIn()
}
/*$(document).ready(function (){
    $("#intmenu2").click(function(){
        intmenu2C()
    });
})*/
function intmenu() {
    $("#body").append("<div id='intmenu' style='background-color: cadetblue;font-size: 3em;top: 25%;left: 29%;width: 540px;height: 300px;position:fixed;display:none; border-radius:12px;' class='averagecalbod'>"+"</div>");
    $("#intmenu").append('<button style="left: 29%;top:25%;position:fixed;border-radius:12px;" onclick="CIM()">X</button>');
    $("#intmenu").append('<input type="button" id="intmenu1" style="left: 33%;top: 29%;position:fixed;border-radius:12px;font-size: 0.9em;" onclick="intmenue1()" value="Point-int to Slope-int">');
    $("#intmenu").append('<button type="button" id="intmenu2" style="left: 33%;top: 42%;position:fixed;border-radius:12px;font-size: 0.9em;" onclick="function temp(){intmenue2C()}">Standard to Slope-int</button>');
    $("#intmenu").append('<button type="button" id="intmenu3" style="left: 33%;top: 55%;position:fixed;border-radius:12px;font-size: 0.9em;" onclick="intmenu3()">Slope-int to Standard</button');
    $(".sidebarB").fadeOut()
    $("#calcbody").fadeOut()
    $('#intmenu').fadeIn()
}

function XC() {
    X1 = document.getElementById("PISII3").value
    X2 = document.getElementById("PISII5").value
    if (X2>="0") {
        X = eval(X1+"-"+X2);
    }
    else {
        X = eval(X1+"+"+X2)
    }
    YC()
}
function YC() {
    Y1 = document.getElementById("PISII4").value
    Y2 = document.getElementById("PISII6").value
    if (Y2>="0") {
        Y = eval(Y1+"-"+Y2);
    }
    else {
        Y = eval(Y1+"+"+Y2)
    }
    PISIC()
}
function SC() {
    Yint = eval(Y1+eval(Math.abs(X1)+"*"+eval(Slope)))
    document.getElementById("PISIR2").value = "Y="+Math.round(eval(Slope))+"X"+"+"+"("+Yint+")"
}
