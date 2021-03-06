$(document).ready(function() {

    var calculatedScore = 0;
    var wins = 0;
    var losses = 0;
    var random = Math.floor(Math.random() * 120) + 19;
    var valueCrystalOne = Math.floor(Math.random() * 12) + 1;
    var valueCrystalTwo = Math.floor(Math.random() * 12) + 1;
    var valueCrystalThree = Math.floor(Math.random() * 12) + 1;
    var valueCrystalFour = Math.floor(Math.random() * 12) + 1;
    $("#random").html(random);


    console.log(valueCrystalOne);
    console.log(valueCrystalTwo);
    console.log(valueCrystalThree);
    console.log(valueCrystalFour);

    function reset() {
        var newRandomNumber = Math.floor(Math.random() * 120) + 19;
        $("#random").html(newRandomNumber);
        random = newRandomNumber;
        calculatedScore = 0;
        $("#newScore").html(calculatedScore);
        valueCrystalOne = Math.floor(Math.random() * 12) + 1;
        valueCrystalTwo = Math.floor(Math.random() * 12) + 1;
        valueCrystalThree = Math.floor(Math.random() * 12) + 1;
        valueCrystalFour = Math.floor(Math.random() * 12) + 1;


    } //closes reset function


    $("#crystalOne").on("click", function() {
        calculatedScore += valueCrystalOne;
        $("#newScore").html(calculatedScore);

        if (calculatedScore == random) {
            wins++;
            $("#wins").html("Wins: " + wins++);
            reset();
        } else if (calculatedScore > random) {
            losses++;
            $("#losses").html("Losses: " + losses++);
            reset();
        };


    }); //closes crystalOne.on click function

    $("#crystalTwo").on("click", function() {
        calculatedScore += valueCrystalTwo;
        $("#newScore").html(calculatedScore);

        if (calculatedScore == random) {
            wins++;
            $("#wins").html("Wins: " + wins++);
            reset();
        } else if (calculatedScore > random) {
            losses++;
            $("#losses").html("Losses: " + losses++);
            reset();
        };

    }); //closes crystalTwo.on click function

    $("#crystalThree").on("click", function() {
        calculatedScore += valueCrystalThree;
        $("#newScore").html(calculatedScore);

        if (calculatedScore == random) {
            wins++;
            $("#wins").html("Wins: " + wins++);
            reset();
        } else if (calculatedScore > random) {
            losses++;
            $("#losses").html("Losses: " + losses++);
            reset();
        };

    }); //closes crystalThree.on click function

    $("#crystalFour").on("click", function() {
        calculatedScore += valueCrystalFour;
        $("#newScore").html(calculatedScore);

        if (calculatedScore == random) {
            wins++;
            $("#wins").html("Wins: " + wins++);
            reset();
        } else if (calculatedScore > random) {
            losses++;
            $("#losses").html("Losses: " + losses++);
            reset();
        };


    }); //closes crystalFour.on click function


}); //closes document.ready