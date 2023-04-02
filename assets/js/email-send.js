function emailSend() {
  let email = document.getElementById("email").value;

  if (email == "") {
    return alert("Please input your email address!");
  }

  let emailReciever = "adrianreka71@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReciever};from=${email}`;
  a.click();
}
