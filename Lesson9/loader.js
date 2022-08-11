var myVar;
myFunction();
window.onscroll = addPostIfTheyShouldBeAdded;
var end= document.getElementById("ending");
function addPostIfTheyShouldBeAdded() {
  if (end.offsetTop < window.pageYOffset + window.innerHeight) {
    myFunction();
   
  }
}
function myFunction() {
  myApiImage();
  myApiText();
  myVar = setTimeout(showPage, 100);
}

/*
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
*/
function showPage() {
  document.getElementById("post-invisible").style.display = "none";
  document.getElementById("post2-invisible").style.display = "none";
  document.getElementById("post-visible").style.display = "block";
  document.getElementById("post2-visible").style.display = "block";
}

