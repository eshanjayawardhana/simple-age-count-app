function f1() {
  var result = document.getElementById("result");

  var birthdate = Number.parseInt(document.getElementById("birthdate").value);

  const currentyear = Number.parseInt(new Date().getFullYear());

  var age = currentyear - birthdate;
  result.style.background = "white";
  result.style.borderRadius = "10px";
  result.style.fontSize = "40px";
  result.style.fontWeight = "600px";

  result.innerHTML = `Your Age is: ` + age;

  // console.log(x.getFullYear());test 1
}
