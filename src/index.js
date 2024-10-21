console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'; //Gets 4 random dog images
let imagesContainer = document.getElementById('dog-image-container');
fetch(imgUrl)
  .then((response) => response.json())
  .then((data) => {
    imagesArray = data.message;
    imagesArray.forEach((image) => {
      let imageElement = document.createElement('img');
      imagesContainer.appendChild(imageElement);
      imageElement.setAttribute('src', image);
    });
  });

//Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breedsContainer = document.getElementById('dog-breeds');
fetch(breedUrl)
  .then((response) => response.json())
  .then((data) => {
    breeds = data.message;
    for (let breed in breeds) {
      let breedName = document.createElement('li');
      breedName.innerText = breed;
      breedsContainer.appendChild(breedName);
      //Challenge 3
      breedName.addEventListener('click', () => {
        breedName.style.color = 'red';
      });
    }
  });
//Challenge 4
let firstLetterDropDown = document.querySelector('#breed-dropdown');
firstLetterDropDown.addEventListener('change', () => {
  const selectedLetter = firstLetterDropDown.value;
  Array.from(breedsContainer.getElementsByTagName('li')).forEach((breed) => {
    breed.style.display = breed.textContent.startsWith(selectedLetter)
      ? 'list-item'
      : 'none';
  });
});