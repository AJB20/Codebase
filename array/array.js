 //geeft een zin weer
console.info("opdracht array codebase 2022")
//const programmeertalen met een array (kan later niet verandert worden )
const programmeertalen = ['PHP','c#',"HTML","Javascript","Java","c++","c"]; 
programmeertalen.push("Python","swift"); //met push worden python en swift aan de array toegevoegt
//variable i word gemaakt met waarde 0 
//daarna word i vergeleken met const programmeertalen (aantal in array).
// als i kleiner is dan programmeer talen word er bij i 1 opgetelt
// zolang i kleiner is dan programmertalen laat programmeertalen zien.
for(let i = 0; i < programmeertalen.length; i++) {  
    console.log(programmeertalen[i]);
    
}
//lengte word berekent en weergeven (aantal in array)
console.log(programmeertalen.length);
//groep word aangemaakt
console.group("hallo (dit is een group)");
//tekst binnen groep word weergeven
console.log("welkom bij de console");
//tekst binnen groep word weergeven
console.log("dit is voor de opdracht array");
//einde van groep
console.groupEnd();
//tekst word weergegeven buiten groep.
console.log("en dit is buiten de group")
//waarschuwing word getoont met de tekst Jelle Bergsma 2021-2022 ikbenjelle.nl
console.warn("Jelle Bergsma 2021-2022 ikbenjelle.nl")