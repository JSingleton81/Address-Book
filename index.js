console.log("HelloWorld");

let people = [];
const listElement = document.getElementById("list");

fetch("https://randomuser.me/api/?results=20")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    people = data.results;
    displayPeople();
  });

const displayPeople = () => {
  people.map((person) => {
    const personElement = document.createElement("div");
    personElement.innerHTML = `
      <h1>${person.name.first} ${person.name.last}</h1>
      <img src="${person.picture.large}"/>
      <button id="${person.login.uuid}">show details</button>
      <div id="person${person.login.uuid}" class="hidden">
        <h2>${person.email}</h2>
        <h3>birthday: ${person.dob.date}</h3>
        <h3>${person.location.city}, ${person.location.state}</h3>
      </div>
      `;
    listElement.appendChild(personElement);
    const button = document.getElementById(person.login.uuid);
    button.addEventListener("click", () => {
      console.log("click", person.login.uuid);
      const personDetails = document.getElementById(
        `person${person.login.uuid}`
      );
      console.log(personDetails.classList[0]);
      if (personDetails.classList[0]) {
        personDetails.classList.remove("hidden");
      } else {
        personDetails.classList.add("hidden");
      }
      // personDetails.classList[0]
      //   ? personDetails.classList.remove("hidden")
      //   : personDetails.classList.add("hidden");
    });
  });
};
