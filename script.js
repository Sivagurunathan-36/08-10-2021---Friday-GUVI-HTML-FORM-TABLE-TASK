function senddata() {
    var firsName = document.getElementById("fname").value;
    // console.log(document.getElementById("fname"))
    var lastName = document.getElementById("lname").value;
    // console.log()
    var address = document.getElementById("Address").value;
    // console.log()

    var pincode = document.getElementById("PinCode").value;
    // console.log()
    var grndervalue = document.querySelector('input[name="gender"]:checked').value;
    var choiceoffood = document.querySelector('input[name="ChoiceOfFood"]:checked').value;
    var state = document.getElementById("State").value;
    var country = document.getElementById("Country").value;
    // document.querySelector("input").focus();
    // // console.log(document.activeElement.tagName);
    // // → INPUT
    // document.querySelector("input").blur();
    // // → BODY
    // var gender = document.getElementById("Gender").value;
    console.log(firsName)
    console.log(lastName)
    console.log(address)
    console.log(pincode)
    console.log(grndervalue)
    console.log(choiceoffood)
    console.log(state)
    console.log(country)
    document.getElementById("firstname").innerHTML = firsName
    document.getElementById("lastname").innerHTML = lastName
    document.getElementById("address").innerHTML = address
    document.getElementById("Pincodevalue").innerHTML = pincode
    document.getElementById("genderdisp").innerHTML = grndervalue
    document.getElementById("ChoiceOfFoodvalue").innerHTML = choiceoffood
    document.getElementById("Statevalue").innerHTML = state
    document.getElementById("Countryvalue").innerHTML = country
    document.getElementById("myForm").reset();



}
// var formData = new FormData();
// formData.append('lastname', 'value1');
// formData.append('key2', 'value2');

// // Display the values
// for (var value of formData.values()) {
//    console.log(value);
// }