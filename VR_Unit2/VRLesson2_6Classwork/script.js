let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");

  mech_2 = mech.cloneNode(true);
  mech_2.setAttribute("position","0 13 10");
  mech_2.setAttribute("rotation","0 180 0");
  scene.append(mech_2);
 
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
