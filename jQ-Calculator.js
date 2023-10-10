function A() {
    var B = document.getElementById("calcinput");
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
    var C = document.getElementById("calcinput");
    $("#history").append(B + "=" + C)
};