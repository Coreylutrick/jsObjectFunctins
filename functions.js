console.log("functions");

// function expressions
//var a = function(){
//    console.log("a", 3);
//}

//function declarations
//function b(){
//    console.log("b", 2);
//}

var num = 3;
function numPrinter(monkeyButt){
    //monkeyButt = num = 3
    console.log("My number: ", monkeyButt);
}

numPrinter(num);
numPrinter("turtle");

function cat(){
    //return "love them";
    numPrinter("love them");
    //div.innerHTML = "love them";
}
var message = cat();
console.log(message)

var instructorPets = 
[
    {
        instructorName: "Lauren",
        petName: "Frankie",
        animalType: "sweet dog",
        isFavorite: true
    },
    {
        instructorName: "Zoe",
        petName: "Whiskey",
        animalType: "cat",
        isFavorite: true
    },
    {
        instructorName: "Zoe",
        petName: "Biff",
        animalType: "evil cat",
        isFavorite: false
    }, 
    {
        instructorName: "Callan",
        petName: "Seymour",
        animalType: "one eyed dog",
        isFavorite: true
    },
    {
        instructorName: "Callan",
        petName: "Wiley",
        animalType: "destructive dog",
        isFavorite: false
    }      
];


function printToDom(stringToPrint, divId)
{
    //take string and innerHTML to the divId
    var divElement = document.getElementById(divId);
    divElement.innerHTML += stringToPrint;

}

function domStringMaker(animalArray)
//take pet names and create dom string
//call printToDOm function
{
    var animalString = ""
        for (var idx = 0; idx < animalArray.length; idx++)
    {
        if(animalArray[idx].isFavorite)
        {
            animalString = "<article class='favorite'><h1>" + animalArray[idx].petName + "</h1>" + "<h3>" + "Owner: " + animalArray[idx].instructorName + "<br/>" + "Favorite pet?: " + animalArray[idx].isFavorite + "</h3>" + "</article>";
        } else 
        {
            animalString = "<article><h1>" + animalArray[idx].petName + "</h1>" + "<h3>" + "Owner: " + animalArray[idx].instructorName + "<br/>" + "Favorite pet?: " + animalArray[idx].isFavorite + "</h3>" + "</article>";    
        }
        printToDom(animalString, "pet-names");
    }   
}

domStringMaker(instructorPets);