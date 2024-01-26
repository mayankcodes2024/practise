const submitAction = document.getElementById("submit");
const form = document.getElementById("form");
let one;

submitAction.addEventListener("click", (e) => {
  e.preventDefault();
  if (one == null) {
    addData(validateForm);
  } else {
    updateRecords(addData);
  }
  one = null;
});

function addData() {
  const gender = extraValidate();
  const citiiie = getCity();
  const isFormComplete = validateForm(gender, citiiie);
  localStorage.setItem("userDara", isFormComplete);
  if (!isFormComplete) {
    return;
  }

  let n = 0;
  let newRow = document.getElementById("table_body");
  let inserRown = newRow.insertRow(n);

  const name = document.getElementById("name");
  const contact = document.getElementById("contact");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const cel1 = inserRown.insertCell(0);
  const cel2 = inserRown.insertCell(1);
  const cel3 = inserRown.insertCell(2);
  const cel4 = inserRown.insertCell(3);
  const cel5 = inserRown.insertCell(4);
  const cel6 = inserRown.insertCell(5);
  const cel7 = inserRown.insertCell(6);

  cel1.innerHTML = name.value;
  cel2.innerHTML = contact.value;
  cel3.innerHTML = email.value;
  cel4.innerHTML = password.value;
  cel5.innerHTML = gender;
  cel6.innerHTML = citiiie;
  cel7.innerHTML = `<button class="btn-action" onclick="editData(this)"><i class="fa-regular fa-pen-to-square"></i></button> 
  <button onclick="deleteData(this)" class="btn-action"><i class="fa-solid fa-trash"></i></button>`;
  localStorage.setItem(
    "userData",
    JSON.stringify({
      name: name.value,
      contact: contact.value,
      email: email.value,
      password: email.value,
      gender: gender,
      city: citiiie,
    })
  );

  n++;
  resetAllData();
}

function validateForm(gender, citiiie) {
  const name = document.getElementById("name");
  const contact = document.getElementById("contact");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!name.value) {
    name.style.border = "5px solid red";
    document.getElementById("msg").textContent = "please Enter Name";
  } else {
    name.style.border = "green";
    document.getElementById("msg").textContent = "";
  }
  if (!contact.value) {
    contact.style.border = "5px solid red";
    document.getElementById("msg1").textContent =
      "please Enter valid contact number";
  } else if (contact.value.length > 10 || contact.value.length < 10) {
    document.getElementById("msg1").textContent =
      "please enter only 10 Digit number only";
  } else {
    contact.style.border = "none";
    document.getElementById("msg1").textContent = "";
  }
  if (!email.value) {
    email.style.border = "5px solid red";
    document.getElementById("msg2").textContent =
      "please Enter valid Emial address";
  } else {
    email.style.border = "";
    document.getElementById("msg2").textContent = "";
  }
  if (!password.value) {
    password.style.border = "5px solid red";
    document.getElementById("msg3").textContent = "please Enter valid password";
  } else if (password.value.length < 8 || password.value.length > 15) {
    document.getElementById("msg3").textContent =
      "please Enter password length between 8 to 15";
  } else {
    password.style.border = "none";
    document.getElementById("msg3").textContent = "";
  }
  if (!gender) {
    document.getElementById("msg4").textContent = "please select one option";
  } else {
    document.getElementById("msg4").textContent = "";
  }
  if (!citiiie) {
    document.getElementById("msg5").textContent =
      "please select one option of city";
  } else {
    document.getElementById("msg5").textContent = "";
  }
  if (
    !name.value ||
    !contact.value ||
    !email.value ||
    !password.value ||
    !gender ||
    !citiiie
  ) {
    return false;
  } else {
    return true;
  }
}

function extraValidate() {
  const gender = document.querySelectorAll('input[name="gender"]');
  for (let i = 0; i < gender.length; i++) {
    if ((gender[i].checked = true)) {
      return gender[i].value;
    }
  }
  return "";
}

function getCity() {
  const city = document.getElementById("city");
  for (let i = 0; i < city.length; i++) {
    if (city[i].selected) {
      return city[i].value;
    }
  }
  return;
}

function deleteData() {
  if (confirm("Are you sure, You want to delete this data")) {
    const text = document.querySelector("#table_body tr");
    text.remove();
  }
}
function resetAllData() {
  let gender = extraValidate();
  document.getElementById("name").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  gender.checked = false;
  city.value = "";
}
function editData(td) {
  one = td.parentElement.parentElement;
  document.getElementById("name").value = one.cells[0].innerHTML;
  document.getElementById("contact").value = one.cells[1].innerHTML;
  document.getElementById("email").value = one.cells[2].innerHTML;
  document.getElementById("password").value = one.cells[3].innerHTML;
  document.querySelector('input[name="gender"]:checked').value =
    one.cells[4].innerHTML;
  document.getElementById("city").value = one.cells[5].innerHTML;
  localStorage.setItem("userData", JSON.stringify(addData));
}

function updateRecords() {
  let newRow = document.getElementById("table_body");
  const name = document.getElementById("name");
  console.log(one);
  one.cells[0].innerHTML = document.getElementById("name").value;
  one.cells[1].innerHTML = document.getElementById("contact").value;
  one.cells[2].innerHTML = document.getElementById("email").value;
  one.cells[3].innerHTML = document.getElementById("password").value;
  one.cells[4].innerHTML = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  one.cells[5].innerHTML = document.getElementById("city").value;
  resetAllData();
}
