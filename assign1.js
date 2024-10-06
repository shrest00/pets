// Data for the pets
const petsData = [
    {
        petName: "Stella",
        age: 7,
        breed: "Dalmatian",
        pic: "stella.png"
    },
    {
        petName: "Cody",
        age: 8,
        breed: "Corgi",
        pic: "cody.png"
    },
    {
        petName: "Mango",
        age: 2,
        breed: "Persian",
        pic: "mango.png"
    },
    {
        petName: "Lucy",
        age: 4,
        breed: "Ball Python",
        pic: "lucy.png"
    },
    {
        petName: "Buhmie",
        age: 1,
        breed: "Bulldog",
        pic: "buhmie.png"
    }
 ];
 
 
 // Function to display pet information
 const showInfo = () => {
    let petNumber = document.querySelector("#petNum").value;
    petNumber = parseInt(petNumber) - 1;
 
 
    // Validate pet number input
    if (isNaN(petNumber) || petNumber < 0 || petNumber >= petsData.length) {
        alert("Invalid pet number! Please select a number between 1 and " + petsData.length);
        return;
    }
 
 
    // Get the corresponding pet object
    let pet = petsData[petNumber];
 
 
    // Display pet information
    let selectedPetInfo = document.querySelector(".selectedPetInfo");
    selectedPetInfo.textContent = `${pet.petName} is a ${pet.breed} and is ${pet.age} years old.`;
 
 
    // Display pet image
    let petPic = document.querySelector(".selectedPetPic");
    petPic.src = pet.pic;
    petPic.style.display = "block";
 };
 
 
 // Get a handle to the petsInfo paragraph
 let petsInfo = document.querySelector(".petsInfo");
 petsInfo.textContent = `Welcome to our newest pet, ${petsData[petsData.length - 1].petName} the ${petsData[petsData.length - 1].breed}`;
 
 
 // Populate the pets list without duplicate numbering
 let petsList = document.querySelector(".petsList");
 let allPetsList = `<ol>`;
 
 
 // Iterate over petsData to create the list
 petsData.forEach(pet => {
    allPetsList += `<li>${pet.petName} the ${pet.breed}</li>`;
 });
 
 
 allPetsList += `</ol>`;
 petsList.innerHTML = allPetsList;
 
 
 
