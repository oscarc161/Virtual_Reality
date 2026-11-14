let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket_1, rockets=[], ufo_1, ufos=[], ufo_2, ufo_3;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

   rocket_1 = new Rocket(0,0,0.1);

   ufo_1 = new ufo(0,0);
   ufo_2 = new ufo(1,1);
   ufo_3 = new ufo(5,5);

// gave up on making 50 ufos because this crappy loop somehow doesent work

 //  for(x=0;x<50;x++){
 //   let x = 0;
  //  let z = rnd(-30,30);

  // line under me is whats apparently broken
  //  let ufo = new ufo(x,z);
  //  ufos.push(ufo); 
 //  }


   for(x=0;x<50;x++){
    //let x = rnd(-20,20);
     let x = 0;
    let z = rnd(-30,30);
    let dy_change =rnd(1,100)/1000;
    let rocket = new Rocket(x,z,dy_change);
    rockets.push(rocket);
    
   }




  loop();
})

function loop(){
  rocket_1.launch();
  ufo_1.fall();
  ufo_2.fall(); 
   ufo_3.fall();

  for(let rocket of rockets){
    rocket.launch();
  }




  
  window.requestAnimationFrame( loop );
}
