

document.getElementById("input").addEventListener("keyup", function(event) {

if (event.getModifierState("CapsLock")) {
warning.style.display = "block";    
} else {
warning.style.display = "none";
}
     

  });

 /*  const etienne = document.getElementById('etienne');
  const button = document.getElementById('button');
  console.log(etienne);
  let count = 0;
button.addEventListener('click',function(){
    
    if (count == 0) {
        etienne.style.display = "none";
        count = 1;    
    }else {
        etienne.style.display = "block";
        count = 0;
    }
}) */
  