function fetchDogs() {
    fetch( "https://dog.ceo/api/breeds/image/random/4" )
    .then( resp => resp.json() )
    .then( json => renderDogs( json ) );
}

function renderDogs( dogs ) {
    const dogImageContainer = document.getElementById( "dog-image-container" );
    dogs.message.forEach( dog => {
      const dogImage = document.createElement( "img" );
      dogImage.src = dog;
      dogImageContainer.appendChild( dogImage );
    } );
}

function fetchBreeds( filter ) {
    fetch( "https://dog.ceo/api/breeds/list/all" )
    .then( resp => resp.json() )
    .then( json => renderBreeds( json, filter ) );
}

function renderBreeds( breeds, filter ) {
    const listOfBreeds = document.getElementById( "dog-breeds" );
    listOfBreeds.innerHTML = "";
    const filteredBreeds = filter === "all" ? Object.keys( breeds.message ) : Object.keys( breeds.message ).filter( breed => breed[0] === filter );
    filteredBreeds.forEach( breed => {
        const breedListItem = document.createElement( "li" );
        breedListItem.innerHTML = breed;
        listOfBreeds.appendChild( breedListItem );
        breedListItem.addEventListener( "click", () => breedListItem.style.color = "red" );
    } );
}

document.addEventListener( "DOMContentLoaded", function() {
    fetchDogs();
    fetchBreeds( "all" );
    const breedDropdown = document.getElementById( "breed-dropdown" )
    breedDropdown.addEventListener( "change", () => { fetchBreeds( breedDropdown.value ) } )
} );
