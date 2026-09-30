let userName = document.querySelector("#exampleInputName");
let userAge = document.querySelector("#exampleInputAge");
let userJob = document.querySelector("#exampleInputJob");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (userName.value === "" || userAge.value === "" || userJob.value === "") {
    alert("Please fill all fields");
  } else {
    if (Number(userAge.value) < 18) {
      alert("You are under age");
    } else {
      let user = {
        Name: userName.value,
        Age: Number(userAge.value),
        Job: userJob.value,
      };
      alert("Registration Completed");
      console.log(user);
    }
  }
});
