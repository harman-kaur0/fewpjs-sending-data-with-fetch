// Add your code here
let data = {
  name: "Steve",
  email: "steve@steve.com",
};

let config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),
};

function submitData(name, email) {
  return fetch("http://localhost:3000/users", config)
    .then((response) => 
      response.json()
    )
    .then((object) => {
      let p = document.createElement("p");
      p.innerHTML = object["id"];
      document.body.appendChild(p);
    })
    .catch((error) => {
      let p = document.createElement("p");
      p.innerHTML = "Unauthorized Access";
      document.body.appendChild(p);
    });
}

