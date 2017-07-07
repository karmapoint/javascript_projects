function checkEmail() {
  var email1 = document.getElementById('email_addr');
  var email2 = document.getElementById('email_repeat');
  if ( email1.value !== email2.value) {
    alert("The two emails must match!");
    email2.value = "";
    email2.focus();
    return false;
  }
}
