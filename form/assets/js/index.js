const submitAction = document.getElementById("submit");
const form = document.getElementById("form");

submitAction.addEventListener("click", (e) => {
  e.preventDefault();
  const gender = extraValidate();
  const isFormComplete = validateForm(gender);
  if (!isFormComplete) {
    return;
  }

  let n = 1;
  let x = 0;

  let newRow = document.getElementById("table");
  let inserRown = newRow.insertRow(n);

  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const city = document.getElementById("city").value;

  const cel1 = inserRown.insertCell(0);
  const cel2 = inserRown.insertCell(1);
  const cel3 = inserRown.insertCell(2);
  const cel4 = inserRown.insertCell(3);
  const cel5 = inserRown.insertCell(4);
  const cel6 = inserRown.insertCell(5);

  cel1.innerHTML = name;
  cel2.innerHTML = contact;
  cel3.innerHTML = email;
  cel4.innerHTML = password;
  cel5.innerHTML = city;
  cel6.innerHTML = gender;

  n++;
  x++;
});

function validateForm(gender) {
  const name = document.getElementById("name");
  const contact = document.getElementById("contact");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!name.value) {
    name.style.border = "5px solid red";
    document.getElementById("msg").textContent = "please Enter Name";
  } else {
    name.style.border = "none";
    document.getElementById("msg").textContent = "";
  }
  if (!contact.value) {
    contact.style.border = "5px solid red";
    document.getElementById("msg1").textContent = "please Enter Name";
  } else if (contact.value.length > 10 || contact.value.length < 10) {
    document.getElementById("msg1").textContent =
      "please enter only 10 Digit number only";
    // return false;
  } else {
    contact.style.border = "none";
    document.getElementById("msg1").textContent = "";
  }
  if (!email.value) {
    email.style.border = "5px solid red";
    document.getElementById("msg2").textContent = "please Enter Name";
  } else {
    email.style.border = "";
    document.getElementById("msg2").textContent = "";
  }
  if (!password.value) {
    password.style.border = "5px solid red";
    document.getElementById("msg3").textContent = "please Enter Name";
  } else if (password.value.length < 8 || password.value.length > 15) {
    document.getElementById("msg3").textContent =
      "please Enter password length between 8 to 15";
    // return false;
  } else {
    password.style.border = "none";
    document.getElementById("msg3").textContent = "";
  }
  if (!gender) {
    document.getElementById("msg4").textContent = "please select one option";
  } else {
    document.getElementById("msg4").textContent = "";
  }
  if (
    !name.value ||
    !contact.value ||
    !email.value ||
    !password.value ||
    !gender
    //  ||
    // !(password.value.length < 8 || password.value.length > 15) ||
    // !(contact.value.length > 10 || contact.value.length < 10)
  ) {
    return false;
  } else {
    return true;
  }
}

function extraValidate() {
  const gender = document.querySelectorAll('input[name="gender"]');
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      return gender[i].value;
    }
  }
  return "";
}
