let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target_1");
  target.a = 0;
  target.da = 2;

  loop();
})

function loop(){
  target.a += target.da;

  if(target.a > 90){
    target.da = 0;
  }


  target.setAttribute("rotation",{x:target.a, y:0, z: 0});

  window.requestAnimationFrame( loop );
}