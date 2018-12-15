$(document).ready(function(){
    
var red;
var purple;
var orange;
var green;
var wins = 0;
var losses = 0;
var yourTotal = 0;
var compTotal = 0;

var limitReachedFlag = true;
    
    //generate random number for crystals

    function crystalValueGenerator(){
        red = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        purple = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        orange = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        green = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        return red, orange, purple, green;
    }

    //generate random number for computer total
    function computerValueGenerator(){
        compTotal = 30 + Math.floor(Math.random() * (120 - 30 + 1) + 30);
        console.log(compTotal);
        $("#numberToMatch").text(compTotal);
    }

    function resetGame(){
        computerValueGenerator();
        crystalValueGenerator();
        limitReachedFlag = true;
        yourTotal = 0;
        $("#yourTotal").text(yourTotal);
    }

    computerValueGenerator();
    crystalValueGenerator();

    console.log(red);
    console.log(purple);
    console.log(orange);
    console.log(green);

    //recognize click
    $(".crystals").on("click", function(){
        if(limitReachedFlag === true){
        //determine which crystal is clicked
            if($(this).attr("value") === "red"){
                yourTotal = yourTotal + red;
                $("#yourTotal").text(yourTotal);
                console.log(yourTotal);
            }else if($(this).attr("value") === "purple"){
                yourTotal = yourTotal + purple;
                $("#yourTotal").text(yourTotal);
                console.log(yourTotal);
            }else if($(this).attr("value") === "orange"){
                yourTotal = yourTotal + orange;
                $("#yourTotal").text(yourTotal);
                console.log(yourTotal);
            }else if($(this).attr("value") === "green"){
                yourTotal = yourTotal + green;
                $("#yourTotal").text(yourTotal);
                console.log(yourTotal);
            }
            //Determine if the scores match - win or lose
            var youWon = false;
            var youLost = false;
            if(yourTotal === compTotal){
                wins++;
                $("#wins").text(wins);
                limitReachedFlag = false;
                youWon = true;
            }else if(yourTotal > compTotal){
                losses++;
                $("#losses").text(losses);
                limitReachedFlag = false;
                youLost = true;
            }
        }
        if(limitReachedFlag === false){
            if(youWon === true){
                confirm("You Won!! Do you want to play again?");
                resetGame();
            }else if(youLost === true){
                confirm("You Lost!!!!!! Do you want to play again?");
                resetGame();
            }
            
        }
    });

    

});