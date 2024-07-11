




let Gate1 = 1;
let Gate2 = 1;
 
 


  function storyButton1(){

   
    let GetmainStory = document.getElementById("storyTextBox");
    let Getbtn1 = document.getElementById("storyButton1");
    let Getbtn2 = document.getElementById("storyButton2");
    let GetChoice1 = document.getElementById("storyChoice1");
    let GetChoice2 = document.getElementById("storyChoice2");
    let Getshop = document.getElementById("shop");
    let GetstoryBoard = document.getElementById("storyBoard");
    let GetpotionSlot1 = document.getElementById("potionSlot1");

switch(Gate1){
    case 1:
    GetmainStory.innerHTML = "You find yourself on a winding road, the air thick with the scent of adventure. Suddenly, a voice calls out from behind, echoing through the quiet landscape."
    Getbtn1.innerHTML = "Select";
    Getbtn2.style.display = "flex";
    Getbtn2.innerHTML = "Select";

    //choices
    GetChoice1.innerHTML = "Turn around and see who it is."
    GetChoice2.innerHTML = "Ignore them and keep walking."
    Gate1 = 2;
    Gate2 = 2;

    console.log(`${Gate1} ${Gate2}`);
   
    break;

    case 2:
     GetmainStory.innerHTML = "You turn around and now you can see an old lady on a broom racing towards you. Potions for sale!!! she yells."
     GetChoice1.innerHTML = "See what she has for sale."
     GetChoice2.innerHTML = "Delcine the offer."
     Gate1 = 3;
     Gate2 = 3;
     console.log(`${Gate1} ${Gate2}`);

    break;

    case 3:
    
    GetstoryBoard.style.display = "none";
    Getshop.style.display = "flex";
    Gate2 = 4;
    console.log(`${Gate1} ${Gate2}`);

    
    break;    

    case 4:

    break;  
    
    case 5:

    break;

    case 6:
          
        GetmainStory.innerHTML = `You continue along the path and come to an old bridge.`
        Getbtn1.innerHTML = `Continue`;
        Getbtn2.style.display = "none";
        GetChoice1.style.display = "none";
        GetChoice2.style.display = "none";
        Gate1 = 8;
        Gate2 = 8;
        console.log(`${Gate1} ${Gate2}`);

    break;

    case 7:
          GetmainStory.innerHTML = "He pulls out a long blade and cuts your head clean off. You can see your body from the upside down view of your decapitated head. -Game Over-"
          console.log(`${Gate1} ${Gate2}`);

    break;

    case 8:
       GetmainStory.innerHTML = `It looks sturdy enough to cross.`
       Getbtn1.innerHTML = `Select`;
       Getbtn2.innerHTML = `Select`;
       GetChoice1.innerHTML = `Cross the bridge`;
       GetChoice2.innerHTML = `Go back the opposite way.`;
       Getbtn2.style.display = "flex";
       GetChoice1.style.display = "flex";
       GetChoice2.style.display = "flex";
       Gate1 = 9;
       Gate2 = 9;
       console.log(`${Gate1} ${Gate2}`);
    break;

    case 9:
         GetmainStory.innerHTML = `You carefully walk across the old bridge. You can see a town way down below through one of the holes in the bridge where a plank should be.`
         Getbtn1.innerHTML = "Continue";
         Getbtn2.style.display = "none";
         GetChoice1.innerHTML = "";
         GetChoice2.innerHTML = "";
         Gate1 = 10;
         Gate2 = 10;
         console.log(`${Gate1} ${Gate2}`);
    break;

    case 10:
        if (inventoryBoogeysDance >= 1){
          GetmainStory.innerHTML = `A man is staring at your waist as you pass by.`
          Gate1 = 11;
          Gate2 = 11;
          console.log(`${Gate1} ${Gate2}`);
        } else {
         GetmainStory.innerHTML = "A man waves at you as you pass by. Weird game! he yells to you."
         console.log(`${Gate1} ${Gate2}`);
         Gate1 = 17;
         Gate2 = 17;
        }
    break;

    case 11:
         GetmainStory.innerHTML = `Thats a Boogey Potion You idiot! Toss it off of the bridge! he yells.`
         Getbtn1.innerHTML = `Select`;
         Getbtn2.style.display = "flex";
         Getbtn2.innerHTML = "Select";
         GetChoice1.innerHTML = "Do as he says and toss the potion.";
         GetChoice2.innerHTML = "Keep the potion.";
         Gate1 = 12;
         Gate2 = 12;
         console.log(`${Gate1} ${Gate2}`);
    break;

    case 12:
        GetmainStory.innerHTML = `You decide its best to follow the mans suggestion and toss the potion.`
        Getbtn1.innerHTML = "Continue";
        Getbtn2.style.display = "none";
        GetChoice1.style.display = "none";
        GetChoice2.style.display = "none";
        inventoryBoogeysDance = inventoryBoogeysDance - 1;
        if (inventoryBoogeysDance <= 0){
          GetpotionSlot1.style.display = "none";
        }
        Gate1 = 17;
        Gate2 = 17;
        console.log(`BoogeyPotion ${inventoryBoogeysDance}`);
        console.log(`${Gate1} ${Gate2}`);
        
    break;

    case 13:

    break;

    case 14: 
     GetmainStory.innerHTML = "Have fun down in the well! he yells."
     console.log(`gate1 ${Gate1} gate2 ${Gate2} healthP ${inventoryHeathPotion} boogeyP ${inventoryBoogeysDance}`);
     Gate1 = 15;
     Gate2 = 15;
    break;

    case 15:
      GetmainStory.innerHTML = "The man grabs you by the collar and attempts to throw you into an empty water well next to him."
      Getbtn1.innerHTML = "Select";
      Getbtn2.innerHTML = "Select";
      Getbtn2.style.display = "flex";
      GetChoice1.style.display = "flex";
      GetChoice1.innerHTML = "Fight";
      GetChoice2.style.display = "flex";
      GetChoice2.innerHTML = "Run";
      Gate1 = 16;
      Gate2 = 16;
      console.log(`gate1 ${Gate1} gate2 ${Gate2} healthP ${inventoryHeathPotion} boogeyP ${inventoryBoogeysDance}`);
    break;

    case 16:
    alert("combat start");
    break;

    case 17:
    alert("switch 17 test");
    GetmainStory.innerHTML = "That dried up well you see up ahead is the only way forward. Bad game design if you ask me but what do i know? I'm just an NPC."
    Gate1 = 18;
    Gate2 = 18;
    console.log(`gate1 ${Gate1} gate2 ${Gate2} healthP ${inventoryHeathPotion} boogeyP ${inventoryBoogeysDance}`);
    break;

    case 18:
    GetmainStory.innerHTML ="As you approach the well you see that it is completely dried up and there is a ladder going down to the bottom."
    Gate1 = 19;
    Gate2 = 19;
    console.log(`gate1 ${Gate1} gate2 ${Gate2} healthP ${inventoryHeathPotion} boogeyP ${inventoryBoogeysDance}`);
    break;

    case 19:
     GetmainStory.innerHTML = "You climb down the ladder"
    break;

    case 20:
     alert("witch takes you below town-- well skip");
    break;
}
}


function storyButton2(){
     let GetmainStory = document.getElementById("storyTextBox");
     let gitstoryChoice1 = document.getElementById("storyChoice1");
     let gitstoryChoice2 = document.getElementById("storyChoice2");
     let gitstoryButton2 = document.getElementById("storyButton2");
     let gitstoryButton1 = document.getElementById("storyButton1");
     switch(Gate2){
        case 1:
            GetmainStory.innerHTML = "She zips Past you."
            gitstoryChoice1.style.display = "none";
            gitstoryChoice2.style.display = "none";
            gitstoryButton2.style.display = "none";
            gitstoryButton1.innerHTML = `Continue`;
            Gate1 = 4;
            Gate2 = 2;
            console.log(`${Gate1} ${Gate2}`);

        break;
        
        case 2:
               alert("you continue along the pathr");
               console.log(`${Gate1} ${Gate2}`);

        break;

        case 3:
            alert("you continue along the pathr");
            console.log(`${Gate1} ${Gate2}`);

              GetmainStory.innerHTML = `She zooms past you and you watch as she disapears into the foggy night.`
        break;

        case 4:     
             Gate1 = 6;
             Gate2 = 6;
             GetmainStory.innerHTML = `She thanks you, gives you a wink and races off on her broom down the foggy path.`
             gitstoryChoice1.innerHTML = "Continue along the path."
             gitstoryChoice2.innerHTML = `Sit down and take a break.`
             console.log(`${Gate1} ${Gate2}`);

        break;

        case 5:

        break;

        case 6:
              GetmainStory.innerHTML = "You find a nice spot to sit down and take a break when suddenly a man on a horse appears out of nowhere.";
              gitstoryButton1.innerHTML = `Continue`;
              gitstoryButton2.style.display = `none`;
              gitstoryChoice1.innerHTML = ``;
              gitstoryChoice2.innerHTML = ``;
              Gate1 = 7;
              Gate2 = 7;
              console.log(`${Gate1} ${Gate2}`);

        break;

        case 7:

        break;

        case 8:

        break;

        case 9:
              GetmainStory.innerHTML = `You decide after looking at the bridge more carefully that it might be safer to go back the way that you came and see what is at the opposite end of the road.`;
              gitstoryButton1.innerHTML = "Continue";
              gitstoryButton2.style.display = "none";
              gitstoryChoice1.innerHTML = "";
              gitstoryChoice2.innerHTML = "";
              Gate1 = 20;
              Gate2 = 20;
              console.log(`gate1 ${Gate1} gate2 ${Gate2} healthP ${inventoryHeathPotion} boogeyP ${inventoryBoogeysDance}`);
        break;

        case 10:

        break;

        case 11:

        break;

        case 12:
         alert("case 12 test");
         GetmainStory.innerHTML = "Suit yourself stranger! You wont be having it by me though!"
         gitstoryButton1.innerHTML = "Continue";
         gitstoryButton2.style.display = "none";
         gitstoryChoice1.innerHTML = "";
         gitstoryChoice2.innerHTML = "";
         Gate1 = 14;
         Gate2 = 14;
         console.log(`gate1 ${Gate1} gate2 ${Gate2} healthP ${inventoryHeathPotion} boogeyP ${inventoryBoogeysDance}`);
         
        break;
     }
     
}
