const nam = document.querySelector("#name");
const pass = document.querySelector("#password");

function validateForm() {
  flag = 1;
  if (nam.value.length < 3) {
    document.querySelector("#err-name").innerHTML = "Need at least 3 char";
    flag = 0;
  } else {
    document.querySelector("#err-name").innerHTML = "";
    if (pass.value.length < 5) {
      document.querySelector("#err-pass").innerHTML = "Need at least 5 char";
      flag = 0;
    } else {
      document.querySelector("#err-name").innerHTML = "";
      flag = 1;
    }
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
