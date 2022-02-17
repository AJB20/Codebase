//variabele inputarray (kan gewijzigt worden dus geen const of let)
var inputarray= [];
//variabele size (kan gewijzigt worden dus geen const of let)
var size = 5;

//for loop:
//nieuwe variabele i met waarde 0
//als i minder is dan 5 tel er +1 bij op
//daarna word de gebruiker input gevraagt door informatie in te voeren
//de user input word opgeslagen in inputarray en daarna word de array getoont 
for (var i=0; i<size; i++) {
    inputarray[i] = prompt("voer naam in:");
    console.log(inputarray[i])
}
