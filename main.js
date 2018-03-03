var favAnimal = 
{
    name: "corey",
    animal: "giraffe"
};

console.log("favAnimal", favAnimal.animal);
console.log("faAnimal", favAnimal["animal"]);

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

console.log("instructorPets", instructorPets)

var divElement = document.getElementById("pet-names");
var instructorPetNames = "";
for (idx = 0; idx < instructorPets.length; idx++)
{
    instructorPetNames += instructorPets[idx].petName;
    divElement.innerHTML += "<h1>" + instructorPets[idx].petName + "</h1>"; 
    console.log(instructorPetNames)
}














