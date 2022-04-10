
    


    function myFunction() {
        var x = document.getElementsByClassName("icons");
        if (x.className === "icons") {
          x.className = "active";
          console.log(x.className)
        } else {
          x.className = "icons";

          console.log(x.className)
        }
      }


function functions(){
  var element = document.body;
  element.classList.toggle("dark-mode");
  let x = document.getElementById("bg")
  if(x.className === "bg"){
    x.className = "mg"
  }
  else{
    x.className = "bg"
  }
}
  