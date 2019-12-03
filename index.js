'use strict';
function retrieveImages() {
    const userValue = $('#breed-entry').val().toLowerCase();
    $('#breed-entry').val('');
        fetch(`https://dog.ceo/api/breed/${userValue}/images/random`)
        .then(response => response.json())
        .then(responseJson => logDogs(responseJson))
        .catch(error => alert('An error occured. Try again later'));
}

function logDogs(responseJson) {
    console.log(responseJson);
    if (responseJson.status !== "success") {
        alert('Could not find this breed. Try Again');
    } else (responseJson.status === "success") {
        $('#dog-display').append(`<img src="${responseJson.message}" class="img-results">`);
    }
} 

function submitForm() {
    $('form').submit(event => {
        event.preventDefault(); 
        let dogBreed = document.getElementById('breed-entry').value;
        retrieveImages(dogBreed);
    });
}

$(submitForm);

