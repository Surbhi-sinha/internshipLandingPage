document.getElementById("current_year").innerHTML = new Date().getFullYear();
document.getElementById("loginsubmit").onclick=function(){
    alert("alert logged in");
}
document.getElementById("signupsubmit").onclick=function(){
    alert("alert signed in");
}

//chatbot-----------------------------------------------
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  document.getElementById("sendbutton").onclick = function(){
    alert("lLe Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. ");
  }