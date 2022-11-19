const registerForm = document.querySelector(".register form");
const emailInp = document.querySelector("#email");
const usernameInp = document.querySelector("#username");
const passwordInp = document.querySelector("#password");

const msg = document.querySelector("#msg");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // window.location = '/guvi/index.html'
    const formData = {
        email: emailInp.value,
        username: usernameInp.value,
        password: passwordInp.value
    }
    $.ajax({
        type: "POST",
        url: "./php/register.php",
        data: formData,
        dataType: "json",
        encode: true,
      })
        .done(function(data) {
          msg.innerText = data.message;
          setTimeout(function () {
            window.location = "../login.html";
          }, 2000);
        })
        .fail(function (data) {
            console.log(data["responseText"])
          msg.innerText = data["responseText"] 
        });
})