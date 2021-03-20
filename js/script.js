$("#vypocet").click(function() {
    var resultDiv = $(".result .title");

    function calcBMI() {
        var weight = $("#weight").val();
        var height = $("#height").val();
        var bmi = weight / (height * height);
        return bmi.toFixed(2);
    }

    function bmiState() {
        if (calcBMI() < 16.5) {
            return "podvýživa";
        }
        if (calcBMI() > 16.6 && calcBMI() < 18.4) {
            return "podváha";
        }
        if (calcBMI() > 18.5 && calcBMI() < 24.9) {
            return "ideální váha";
        }
        if (calcBMI() > 25 && calcBMI() < 29.9) {
            return "nadváha";
        }
        if (calcBMI() > 30 && calcBMI() < 34.9) {
            return "mírná obezita";
        }
        if (calcBMI() > 35) {
            return "obezita";
        }
    }

    resultDiv.html("Tvoje BMI je " + calcBMI() + " -> " + bmiState() + ".");
});