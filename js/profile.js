const profileForm = document.querySelector(".profile form");
const nameInp = document.querySelector("#name");
const dobInp = document.querySelector("#dob");
const ageInp = document.querySelector("#age");
const mobilenumInp = document.querySelector("#mobile-number");


const msg = document.querySelector("#msg");

profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const token = localStorage.getItem("auth_token");
    console.log(token)
    const formData = {
        auth_token: token,
        name: nameInp.value,
        dob: dobInp.value,
        age: ageInp.value,
        phone: mobilenumInp.value
    }
    $.ajax({
        type: "POST",
        url: "./php/profile.php",
        data: formData,
        dataType: "json",
        encode: true,
      })
        .done(function(data) {
          msg.innerText = data.message;
        })
        .fail(function (data) {
            console.log(data["responseText"])
          msg.innerText = data["responseText"] 
          setTimeout(function () {
            window.location = "../login.html";
          }, 2000)
        });
})