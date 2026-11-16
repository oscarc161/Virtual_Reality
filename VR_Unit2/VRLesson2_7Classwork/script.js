let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dude, dudes=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");
  dude_1 = new Dude(0,1,0);

  for(let i = 0; i < 50; i++){
    let x = rnd(-25,25);
    let dude = new Dude(x,1,0);
    dudes.push(dude);
  }

  //Challenge 4: Create an array of dudes at random locations.
  
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  dude_1.jump();

  for(dude of dudes){
    dude.jump();
  }
  
  window.requestAnimationFrame( loop );
}