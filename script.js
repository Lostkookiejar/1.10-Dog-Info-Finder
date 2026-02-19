/*
Write an async function called findDog() that:
Gets the dog ID from the input field.
Validates that an ID is entered (show an error if it is blank).
Uses fetch() to call the API: https://dog-vidi.vercel.app/dogs/{id}
If the response is successful, displays the dog's name, breed, and age in the #dogInfo div using template literals.
If the response is not ok (invalid ID), displays "Dog not found!".
Use try...catch to handle errors and show "Dog not found!" if the API call fails.
Style the dog's age dynamically:
Age ≤ 3 → text color should be green
Age > 3 → text color should be blue
Use an inline onclick attribute on the button in index.html instead of addEventListener to call findDog().
*/



async function findDog(){
  const dogId = document.getElementById("dogId").value;
  const dogInfo = document.getElementById("dogInfo");

  try{
    const response = await fetch(`https://dog-vidi.vercel.app/dogs/${dogId}`)
    if (response.ok){
      const data = await response.json();
      if (data.age > 3){
        dogInfo.innerHTML = `
          <div>
            Name: ${data.name}
          </div>
          <div>
            Breed: ${data.breed}
          </div>
          <div>
            <span style = "color: blue">Age: ${data.age}</span>
          </div>
        `;
      } else { 
        dogInfo.innerHTML = `
          <div>
            Name: ${data.name}
          </div>
          <div>
            Breed: ${data.breed}
          </div>
          <div>
            <span style = "color: green">Age: ${data.age}</span>
          </div>
        `;
      } 
    } else {
      dogInfo.innerHTML = 'Dog not found!';
    }
  }
  catch (error){
    console.error('RUIXINCHONG: There was an error with the operation', error);
  }
}
