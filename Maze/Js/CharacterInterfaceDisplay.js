





 function charInterfaceBtn1(){
  let Stats = document.getElementById("stats");
  let equipped = document.getElementById("equipped");
  let Journal = document.getElementById("journal");

  if(Stats.style.display === "flex"){
     Stats.style.display = "none"
  } else {
     Stats.style.display = "flex"
  }

  if (equipped.style.display === "flex"){
      equipped.style.display = "none";
  }

  if(Journal.style.display === "flex"){
     Journal.style.display = "none";
  }
 }

 function charInterfaceBtn2(){
   let Stats = document.getElementById("stats");
   let Equipped = document.getElementById("equipped");
   let Journal = document.getElementById("journal");

   if(Equipped.style.display === "flex"){
      Equipped.style.display = "none";
   } else {
      Equipped.style.display = "flex";
   }

   if(Stats.style.display === "flex"){
      Stats.style.display = "none";
   }

   if(Journal.style.display === "flex"){
      Journal.style.display = "none";
   }

 }

 function charInterfaceBtn3(){
   let Stats = document.getElementById("stats");
   let Equipped = document.getElementById("equipped");
   let Journal = document.getElementById("journal");
   if(Journal.style.display === "flex"){
      Journal.style.display = "none";
   } else {
      Journal.style.display = "flex";
   }

   if(Equipped.style.display === "flex"){
      Equipped.style.display = "none";
   }

   if(Stats.style.display === "flex"){
      Stats.style.display = "none"
   }

 }