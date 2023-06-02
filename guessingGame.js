


let maximum = parseInt(prompt("enter your maximum number, to start guessing")); // player has to provide a maximum number, parseInt parses the users input as an inter(number)
while (!maximum) // while the number is wrong this loop will play
{
    maximum = parseInt(prompt("enter a valid number")); // the parseInt will return invalid input if the player inputs any value thats not a Number (NaN) ot that cant be converted into a number 
}
    

const targetNum = Math.floor(Math.random() * maximum) + 1; // this variable 'targetNum' = to a random number that multiplied by the players maximum number input, the random number is from 0 to up to  the maximum number, +1 that includes the maximum number


// console.log(targetNum);


// ----- this is a bug as it will allow 'q' to be read as valid input on the first guess----> let guess = parseInt(prompt("enter your first guess")); // after the player made a maximum number input we ask the player to enter input their guess, we have to parseInt the prompt to take any string and turn it into a number
let guess = prompt("enter your first guess (Type 'q' to quite the game)"); // this is better as now q will be a NaN which will be a invalid 

let attempts = 1;

while (parseInt(guess) !== targetNum) // while the player guesses and their guess is not = the targetNum this loops runs, we also parseInt any quesses so that all input get converted
{   
    if (guess === 'q') break; // within the loop we can accept "q" to quite, that will immidiately break if input, i.e stop the loop and quite the game
    
    guess = parseInt(guess); // this allows 'q' to quite on first guess prompt, instead of saying it's too low
    
    if (guess > targetNum) // this if statement checks if the guess is bigger then the targetNum
    {
        guess = prompt("Too high! Enter a new guess: "); // if the the guess is bigger then the targetNum the player is alerted and prompted to re-input
        attempts++; // this allows the logging of attempts, as we previously made attempts variable and set its default to 1, every time an attempt is made it logs in and returns it once the player wins
    }
    else if (guess < targetNum)
    {
        guess = prompt("Too low! Enter a new guess: "); // else if the guess is lower the player is alerted and prompted to re-input
        attempts++; // this allows the logging of attempts, as we previously made attempts variable and set its default to 1, every time an attempt is made it logs in and returns it once the player wins
    }
    else 
    {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quite");
    }
}
// if the guess is correct or the player wants to quite the following returns
if (guess === 'q') // we check it the player inputs 'q' in the guess prompt, if so the game will quite
{
    console.log("OK, QUITING!!")    
}
else // else if the player is neither high nor low, the number is = the targetNum and the get a console.log with the statement of success and the # of attempts
{
    console.log(`You got it, it took you ${attempts} attempts`);   
};



