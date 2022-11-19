const loginForm = document.querySelector(".login form");
const emailInp = document.querySelector("#email");
const passwordInp = document.querySelector("#password");

const msg = document.querySelector("#msg");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
        email: emailInp.value,
        password: passwordInp.value
    }
    console.log(formData)
    $.ajax({
        type: "POST",
        url: "./php/login.php",
        data: formData,
        dataType: "json",
        encode: true,
      })
        .done(function(data) {
          msg.innerText = data["message"];
          console.log(data);
          localStorage.setItem("auth_token", data["token"]);
          setTimeout(function () {
            window.location = "../profile.html";
          }, 2000);
        })
        .fail(function (data) {
            msg.innerText = data["responseText"];
        });
})