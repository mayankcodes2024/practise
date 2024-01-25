<!-- # practise

 const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender = extraValidate();
  const city = getCity();

  // const selectData = td.parentElement.parentElement; // You need to define selectData

  // Update the data in the selected row
  if (selectData) {
    selectData.cells[0].innerHTML = name;
    selectData.cells[1].innerHTML = contact;
    selectData.cells[2].innerHTML = email;
    selectData.cells[3].innerHTML = password;
    selectData.cells[4].innerHTML = gender;
    selectData.cells[5].innerHTML = city;
  }

  // Update the data in local storage
  const updatedData = {
    name: name,
    contact: contact,
    email: email,
    password: password,
    gender: gender,
    city: city,
  };

  localStorage.setItem("userData", JSON.stringify(updatedData));

  // Reset selectData to null after updating
  selectData = null;
} -->
