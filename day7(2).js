let x = Math.floor((Math.random() * 10) + 1);
guessesleft=2
for (i=3;i>=1;i--)

{
    user=prompt("enter the number to guess between 0 to 10")
if(x==user)
{
    alert("Match Found" + x + "-" +user )
    alert("Congratulations!! You Won ")


break;
}
else{
    alert("Match Not Found" + x +"-" +user)
    alert("Try Again!! Guesses Left " + guessesleft)

}
guessesleft--
}