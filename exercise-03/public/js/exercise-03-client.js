window.addEventListener("load", function () {

    fetchPerson();

    // This function asynchronously fetches our person from our /gimmeJSON endpoint.
    async function fetchPerson() {
        const response = await fetch("./gimmeJSON");
        const json = await response.json();
        displayPerson(json);
    }

    // This function displays the given person in our HTML.
    function displayPerson(person) {
        document.querySelector("#person-name").innerHTML = person.name;
        document.querySelector("#person-address").innerHTML = person.address;
        document.querySelector("#person-city").innerHTML = person.city;
        document.querySelector("#person-country").innerHTML = person.country;
    }

});

async function fetchRandomNumber() {
    const response = await fetch("./randomNumber");
    const json = await response.json();
    displayRandomNumber(json);
}

function displayRandomNumber(randomNumberjson) {
    document.querySelector("#random-number").innerText = randomNumberjson.number;
}