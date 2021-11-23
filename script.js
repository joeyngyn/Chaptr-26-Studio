// TODO: add code here

window.addEventListener("load", function () {
  this.fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then((response) => {
    response.json().then((json) => {
      const container = document.getElementById("container");
      let innerHTML = ""; 
      for (a of json) {
        innerHTML += `
            <div class = "astronaut">
            <div class = "bio"> 
                <h3>${a.firstName} ${a.lastName}</h3>
                <ul>
                    <li>Hours in space: ${a.hoursInSpace}</li>
                    <li>Active: ${a.active}</li>
                    <li>Skills: ${a.skills.join(", ")}</li>
                </ul>
                </div>
                <img class = "avatar" src = ${a.picture}>
            </div>
            `;
      }
      container.innerHTML = innerHTML;
    });
  });
});
