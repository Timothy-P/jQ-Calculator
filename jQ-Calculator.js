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
let M4;
let Mval;
let M2;
let M3;
let M6;
let M5;
let Mval2;
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
function intmenu1() {
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
    $("#body").append("<div id='PISI' style='background-color: cadetblue;font-size: 3em;top: 32%;left: 25%;width: 560px;height: 300px;position:fixed;display:none; border-radius:12px;' class='averagecalbod'>"+"</div>");
    $("#PISI").append('<button style="left: 25%;top:32%;position:fixed;border-radius:12px;" onclick="CIM1()">X</button>');
    $("#PISI").append('<p style="font-size:0.8em;position:fixed;left:25%;top:30%;">Y=</p>')
    $("#PISI").append('<input id="MInput" type="numbers" style="font-size:0.6em;position:fixed;left: 28.5%;top: 36.5%;width: 90px;">')
    $("#PISI").append('<p style="font-size:0.8em;position:fixed;left: 35%;top:30%;">X(</p>')
    $("#PISI").append('<p style="font-size:0.8em;position:fixed;left: 40%;top:30%;">)</p>')
    $("#PISI").append('<p style="font-size: 0.5em;position:fixed;left: 37.5%;top: 33%;">+</p>')
    $("#PISI").append('<p style="font-size:0.4em;position:fixed;left: 39.3%;top: 35%;">-</p>')
    $("#PISI").append('<p style="font-size:0.6em;position:fixed;left: 38.5%;top: 32.5%;">/</p>')
    $("#PISI").append('<input id="BInput" type="numbers" style="font-size:0.6em;position:fixed;left: 41%;top: 36.5%;width: 90px;">')
    $("#PISI").append('<input disabled id="PSTSR" type="numbers" style="font-size:0.6em;position:fixed;left: 25.5%;top: 53%;width: 390px;">')
    $("#PISI").append('<button onclick="navigator.clipboard.writeText(document.getElementById(\'PSTSR\').value);" style="left: 25.5%;top: 62%;position: fixed;font-size: 0.5em;">Copy Result</button>')
    $("#PISI").append('<button onclick="PSTSN()" style="position:fixed;left:50%;top:32%;font-size:0.6em">Note</button>');
    $("#PISI").append('<button onclick="PSTS()" style="position:fixed;left:52%;top:53%;font-size:0.6em">Calculate</button>')

    $("#intmenu").fadeOut(); 
    setTimeout('document.getElementById("intmenu").remove();', 1000)
    $("#PISI").fadeIn()
}
function intmenu() {
    $("#body").append("<div id='intmenu' style='background-color: cadetblue;font-size: 3em;top: 25%;left: 29%;width: 540px;height: 300px;position:fixed;display:none; border-radius:12px;' class='averagecalbod'>"+"</div>");
    $("#intmenu").append('<button style="left: 29%;top:25%;position:fixed;border-radius:12px;" onclick="CIM()">X</button>');
    $("#intmenu").append('<input type="button" id="intmenu1" style="left: 33%;top: 29%;position:fixed;border-radius:12px;font-size: 0.9em;" onclick="intmenu1()" value="Point-int to Slope-int">');
    $("#intmenu").append('<button type="button" id="intmenu2" style="left: 33%;top: 42%;position:fixed;border-radius:12px;font-size: 0.9em;" onclick="intmenu3()">Standard to Slope-int</button>');
    $("#intmenu").append('<button type="button" id="intmenu3" style="left: 33%;top: 55%;position:fixed;border-radius:12px;font-size: 0.9em;" onclick="intmenu2C()">Slope-int to Standard</button');
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

// Slope-int to Standard
function PSTS() {
    StandardForm = document.getElementById("PSTSR");
    B1 = document.getElementById("BInput").value;
    Mval = document.getElementById("MInput").value;

    if (Mval.indexOf("/") != -1) {
        M2 = Mval.indexOf(")")
        M3 = Mval.indexOf("/")+1
        M4 = Mval.slice(M3, M2)
        B2 = B1*(M4*"-1")
        M5 = Mval.indexOf("(")+1
        M6 = Mval.indexOf("/")
        M7 = Mval.slice(M5, M6)
        Mval2 = "-1"*M7*M4/M4
    }
    else {
        Mval2 = "-1"*Mval
        if (Mval2 > "0") {
            B2 = B1;
        }
        else {
            B2 = B1*"-1"
        }
    };
    if (Mval.indexOf("/") == -1) {
        if (Mval2 >= "0") {
            document.getElementById("PSTSR").value = eval(Mval2)+"X+Y="+B2;
        }
        else {
            document.getElementById("PSTSR").value = eval(Mval2*"-1")+"X-Y="+B2;
        };
    }
    else {
        if (M7.indexOf("-") != -1 && M4.indexOf("-") != -1) {
            console.log("-, -")
            M4 = M4*"-1"
            if (Mval.indexOf("/") != -1) {
                if (Mval2 >= "0") {
                    document.getElementById("PSTSR").value = eval(Mval2)+"X+"+M4+"Y="+B2;
                }
                else {
                    document.getElementById("PSTSR").value = eval(Mval2*"-1")+"X-"+M4+"Y="+B2;
                };
            }
            
        }
        else if (M7.indexOf("-") != -1 && M4.indexOf("-") >= -1) {
            console.log("-, +")
            if (Mval.indexOf("/") != -1) {
                if (Mval2 >= "0") {
                    document.getElementById("PSTSR").value = eval(Mval2)+"X-"+M4+"Y="+B2;
                }
                else {
                    document.getElementById("PSTSR").value = eval(Mval2*"-1")+"X+"+M4+"Y="+B2;
                };
            }
            else {
                if (Mval2 >= "0") {
                    document.getElementById("PSTSR").value = eval(Mval2)+"X-Y="+B2;
                }
                else {
                    document.getElementById("PSTSR").value = eval(Mval2*"-1")+"X+Y="+B2;
                };
            }
        }
        else if (M7.indexOf("-") >= -1 && M4.indexOf("-") != -1) {
            console.log("+, -")
            M4 = M4*"-1"
            if (Mval.indexOf("/") != -1) {
                if (Mval2 >= "0") {
                    document.getElementById("PSTSR").value = eval(Mval2)+"X-"+M4+"Y="+B2;
                }
                else {
                    document.getElementById("PSTSR").value = eval(Mval2*"-1")+"X+"+M4+"Y="+B2;
                };
            }
            else {
                if (Mval2 >= "0") {
                    document.getElementById("PSTSR").value = eval(Mval2)+"X-Y="+B2;
                }
                else {
                    document.getElementById("PSTSR").value = eval(Mval2*"-1")+"X+Y="+B2;
                };
            }
        }
        else {
            console.log("+, +")
            if (Mval.indexOf("/") != -1) {
                if (Mval2 >= "0") {
                    document.getElementById("PSTSR").value = eval(Mval2)+"X+"+M4+"Y="+B2;
                }
                else {
                    document.getElementById("PSTSR").value = eval(Mval2*"-1")+"X-"+M4+"Y="+B2;
                };
            }
        }
    }
}
function PSTSN() {
    alert("For the M, you have to put it in a fraction, or it won't work properly.\nIt should be formatted like the following; (1/2) or (-5/-5)\n(If it needs to be put in a fraction.)")
}

// Standard to Slope-int
function intmenu3() {
    $("#body").append("<div id='PISI' style='background-color: cadetblue;font-size: 3em;top: 32%;left: 25%;width: 560px;height: 300px;position:fixed;display:none; border-radius:12px;' class='averagecalbod'>"+"</div>");
    $("#PISI").append('<button style="left: 25%;top:32%;position:fixed;border-radius:12px;" onclick="CIM1()">X</button>');
    $("#PISI").append('<input id="MInput" type="numbers" style="font-size:0.6em;position:fixed;left: 45.4%;top: 46.4%;width: 90px;">');
    $("#PISI").append('<p style="font-size:0.8em;position:fixed;left: 32%;top: 40%;">X+</p>')
    $("#PISI").append('<p style="font-size:0.8em;position:fixed;left: 41.8%;top: 40%;">Y=</p>')
    $("#PISI").append('<button onclick="STPIN()" style="position:fixed;left:50%;top:32%;font-size:0.6em">Note</button>')
    $("#PISI").append('<input disabled="" id="STPIR" type="numbers" style="font-size:0.6em;position:fixed;left: 25.5%;top: 53%;width: 390px;">')
    $("#PISI").append('<button onclick="STPI()" style="position:fixed;left:52%;top:53%;font-size:0.6em">Calculate</button>')
    $("#PISI").append('<button onclick="navigator.clipboard.writeText(document.getElementById(\'STPIR\').value);" style="left: 25.5%;top: 62%;position: fixed;font-size: 0.5em;">Copy Result</button>')
    $("#PISI").append('<input id="BInput" type="numbers" style="font-size:0.6em;position:fixed;left: 25.3%;top: 46.4%;width: 90px;">')
    $("#PISI").append('<input id="YInput" type="numbers" style="font-size:0.6em;position:fixed;left: 35.3%;top: 46.4%;width: 90px;">')
    $("#intmenu").fadeOut();
    $("#PISI").fadeIn();
    document.getElementById("intmenu").remove();
    //alert("Oops. It seems like I haven\'t gotten to making the base menu.\nCome back later or download the latest files.")
}
function STPIN() {
    alert("Don\'t put a fraction of any kind because it won\'t work.\n\nIf X=1 or -1, put 1 or -1 respectively.\nThis also applies to the B input.")
}
function STPI() {
    let M10 = document.getElementById("BInput").value*"-1";
    let B10 = document.getElementById("MInput").value;
    let Y10 = document.getElementById("YInput").value;
    if (document.getElementById("MInput").value != "") {
        if (document.getElementById("BInput").value != "") {
            if (document.getElementById("YInput").value != "") {
                B11 = eval(B10+"/"+Y10);
                M11 = eval(M10+"/"+Y10);
                if (B11 >= "0") {
                    document.getElementById("STPIR").value = "Y="+M11+"X+"+B11;
                }
                else {
                    document.getElementById("STPIR").value = "Y="+M11+"X-"+B11;
                }
            }
            else {
                alert("Fill in the Y input.")
            }
        }
        else {
            alert("Fill in the B input.")
        }
    }
    else {
        alert("Fill in the M input.")
    }
}