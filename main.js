const email = document.querySelector("#email");
const submit = document.querySelectorAll(".submit");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

submit.forEach((submit) => {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (email.value.trim() == "") {
      error(email, "Please provide a vaild email address");
    } else {
      success(email);
    }

    if (email.value.match(pattern)) {
      success(email);
    } else {
      error(email, "Please provide a vaild email address");
    }
  });
});

function error(element, msg) {
  element.style.border = "1px solid hsl(354, 100%, 66%)";
  const parent = element.parentElement;
  const p = parent.querySelector(".text");
  p.style.display = "block";
  p.innerHTML = msg;
  p.style.color = "hsl(354, 100%, 66%)";
}

function success(element) {
  element.style.border = "1px solid hsl(223, 87%, 63%)";
  const parent = element.parentElement;
  const p = parent.querySelector(".text");
  p.style.display = "none";
  p.innerHTML = "";
}
