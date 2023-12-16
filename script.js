function rolldice1()
   {
    
    const diceImage = document.querySelector('.dice');
    const scoreval = document.getElementById("score1");

    const result = Math.floor(Math.random() * 6)+1;
    diceImage.src = `./Images/point${result}.png`;

    scoreval.textContent = +scoreval.textContent + result;

    document.getElementById("myBtn1").disabled = true;
    document.getElementById("myBtn2").disabled = false;

    document.getElementById("player").innerHTML="Player2- to play";

    if( ( +scoreval.textContent) == 30 ||  ( +scoreval.textContent)>30)
    {
        document.getElementById("heading-text").innerHTML = "Player 1 Wins";
        document.getElementById("myBtn1").disabled = true;
        document.getElementById("myBtn2").disabled = true;
    }


   }
   function rolldice2()
   {
    const diceImage = document.querySelector('.dice');
    const scoreval = document.getElementById("score2");

    const result = Math.floor(Math.random() * 6)+1;
    diceImage.src = `./Images/point${result}.png`;

    scoreval.textContent = +scoreval.textContent + result;

    document.getElementById("myBtn2").disabled = true;
    document.getElementById("myBtn1").disabled = false;
    document.getElementById("player").innerHTML="Player1- to play"

    if( ( +scoreval.textContent) == 30 ||  ( +scoreval.textContent)>30)
    {
        document.getElementById("heading-text").innerHTML = "Player 2 Wins";
        document.getElementById("myBtn1").disabled = true;
        document.getElementById("myBtn2").disabled = true;
    }

   }
   function reset(){
    document.getElementById("myBtn1").disabled = false;
    document.getElementById("myBtn2").disabled = false;
    document.getElementById("score1").innerHTML =0;
    document.getElementById("score2").innerHTML =0;
    document.getElementById("heading-text").innerHTML="Let's Play Dice";

   }