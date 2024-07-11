

 
 // Boogey Potion Variables
let storeBoogeysDance = 2;
let confirmBoogeysDance = 0;
 let inventoryBoogeysDance = 0;
 
// Health Potion Variables
let storeHealthPotion = 5;
let confirmHealthPotion = 0;
let inventoryHeathPotion = 0;


let playerGold = 60;
let confirmGold = 0;


function Buy1(){
     
     if (storeBoogeysDance == 0){
        alert("The shop is out of stock");
     }else {
     let gitshopItem1 = document.getElementById("shopItem1");
     let gitconfirmInvItem1 = document.getElementById("confirmInvItem1");
     let gittotalCost = document.getElementById("totalCost");
     storeBoogeysDance = storeBoogeysDance - 1;
     confirmBoogeysDance = confirmBoogeysDance +1;
     confirmGold = confirmGold + 50;
     gitshopItem1.innerHTML = `Boogeys Dance (50g) (${storeBoogeysDance})`;
     gitconfirmInvItem1.innerHTML = `Boogeys Dance (50g) (${confirmBoogeysDance})`;
     gittotalCost.innerHTML = `Total Cost: ${confirmGold}`;
     }
}

function Buy2(){
    if (storeHealthPotion == 0){
        alert("the sop is out of stock");
    }else {
        let gitshopItem2 = document.getElementById("shopItem2");
        let gitconfirmInvItem2 = document.getElementById("confirmInvItem2");
        let gittotalCost = document.getElementById("totalCost");

        storeHealthPotion = storeHealthPotion - 1;
        confirmHealthPotion = confirmHealthPotion +1;
        confirmGold = confirmGold + 10;

        gitshopItem2.innerHTML = `Health Potion (10g) (${storeHealthPotion})`;
        gitconfirmInvItem2.innerHTML = `Health Potion (10g) (${confirmHealthPotion})`;
        gittotalCost.innerHTML = `Total Cost: ${confirmGold}`;
    }
}


function shopExit(){
    let gitshop = document.getElementById("shop");
    let gitstoryBoard = document.getElementById("storyBoard");
    let gitstoryTextBox = document.getElementById("storyTextBox");
    let gitstoryChoice1 = document.getElementById("storyChoice1");
    let gitstoryChoice2 = document.getElementById("storyChoice2");

    
    gitstoryChoice1.innerHTML = `Go Back to the shop`
    gitstoryChoice2.innerHTML = `Continue`
    gitshop.style.display = "none";
    gitstoryBoard.style.display = "flex";
    gitstoryTextBox.innerHTML = `Will that be all deary?`;
    gate2 = 2;

    
}

function shopClearBtn(){
    let gitconfirmInvItem1 = document.getElementById("confirmInvItem1");
    let gitconfirmInvItem2 = document.getElementById("confirmInvItem2");
    let gitshopItem1 = document.getElementById("shopItem1");
    let gitshopItem2 = document.getElementById("shopItem2");
    let gittotalCost = document.getElementById("totalCost");
    storeBoogeysDance = storeBoogeysDance + confirmBoogeysDance;
    storeHealthPotion = storeHealthPotion + confirmHealthPotion;
    confirmBoogeysDance = 0;
    confirmGold = 0;
    confirmHealthPotion = 0;
    gitshopItem1.innerHTML = `Boogeys Dance (50g) (${storeBoogeysDance})`;
    gitshopItem2.innerHTML = `Health Potion (10g) (${storeHealthPotion})`;
    gittotalCost.innerHTML =`Total Cost: ${confirmGold}`;
    gitconfirmInvItem1.innerHTML = ``;
    gitconfirmInvItem2.innerHTML = ``;
}


 function confirmBtn(){

if(playerGold >= confirmGold){


    if (confirmBoogeysDance >= 1){
        let gitconfirmInvItem1 = document.getElementById("confirmInvItem1");
        let gitpotionSlot1 = document.getElementById("potionSlot1");
        inventoryBoogeysDance = inventoryBoogeysDance + confirmBoogeysDance;
        gitpotionSlot1.innerHTML = `Boogeys Dance (${inventoryBoogeysDance})`;
        gitpotionSlot1.style.display = "flex";
        gitconfirmInvItem1.innerHTML = ``;
        confirmBoogeysDance = 0;
     }

     if (confirmHealthPotion >=1){
        let gitconfirmInvItem2 = document.getElementById("confirmInvItem2");
        let gitpotionSlot2 = document.getElementById("potionSlot2");
        inventoryHeathPotion = inventoryHeathPotion + confirmHealthPotion;
        gitpotionSlot2.innerHTML = `Health Potion (${inventoryHeathPotion})`;
        gitpotionSlot2.style.display = "flex";

        gitconfirmInvItem2.innerHTML = ``;
        confirmHealthPotion = 0;
     }
     let gittotalGold = document.getElementById("totalCost");
     playerGold = playerGold - confirmGold;
     let gitgoldStat = document.getElementById("goldStat");
     gitgoldStat.innerHTML = `Gold: ${playerGold}`;
     confirmGold = 0;

     gittotalGold.innerHTML = `Total Cost: ${confirmGold}`
    


}else{
    alert("You do not have enough Gold for the purchase.");
}
 
}
