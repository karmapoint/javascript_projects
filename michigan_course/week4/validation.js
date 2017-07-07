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

function nicknameFunction(){
  if (document.getElementById("yesNick").checked){
    document.getElementById("nick").style.display="inline";
    document.getElementById("nickname").setAttribute('required', true);
  }
  else {
    document.getElementById('nickname').removeAttribute("required");
    document.getElementById('nick').style.display="none";
  }
}
