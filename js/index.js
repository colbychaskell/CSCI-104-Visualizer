function showMenu() {
  var dropDown = document.getElementById("dropMenu");
  console.log(document.body);
  if(dropDown.style.display != "block") {
    dropDown.style.display = "block";
  }
  else {
    dropDown.style.display = "none";
  }
}
