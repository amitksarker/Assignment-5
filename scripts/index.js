// function next(){
    // Remove Home page
 //   const homesection = document.getElementById('home-section');
 //   homesection.classList.add('hidden');
    // added success part
 //   const Successsection = document.getElementById('Success-section');
 //   Successsection.classList.remove('hidden');



 // next butten function
 
 function next(elementId){
   hideElementById('home-section');
   showElementById('Success-section');
}
// Sit Background Color function

function sit1(elementId){
   hideColorById('A1');
   showColorById('A1');
   // price count function
   showSitInfoById('Amount1');
    // Get the current values
  var decreaseNumberElement = document.getElementById("decrease-sit");
  var decreaseNumber = parseInt(decreaseNumberElement.textContent);
  
  var increaseNumberElement = document.getElementById("increase-sit");
  var increaseNumber = parseInt(increaseNumberElement.textContent);

  var additionalNumberElement = document.getElementById("total-price");
  var additionalNumber = parseInt(additionalNumberElement.textContent);

  // Decrease the decreaseNumber
  decreaseNumber--;

  // Increase the increaseNumber (limited to 4)
  if (increaseNumber < 4) {
      increaseNumber++;
  }

  // Add 550 to the additionalNumber
  additionalNumber += 550;

  // Update the display
  decreaseNumberElement.textContent = decreaseNumber;
  increaseNumberElement.textContent = increaseNumber;
  additionalNumberElement.textContent = additionalNumber;
}

function sit2(elementId){
  hideColorById('A2');
  showColorById('A2');
  // price count function
  showSitInfoById('Amount2');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}

function sit3(elementId){
  hideColorById('A3');
  showColorById('A3');
  // price count function
  showSitInfoById('Amount3');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}

function sit4(elementId){
  hideColorById('A4');
  showColorById('A4');
  // price count function
  showSitInfoById('Amount4');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}

function sit5(elementId){
  hideColorById('B1');
  showColorById('B1');
  // price count function
  showSitInfoById('Amount5');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}

function sit6(elementId){
  hideColorById('B2');
  showColorById('B2');
  // price count function
  showSitInfoById('Amount6');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit7(elementId){
  hideColorById('B3');
  showColorById('B3');
  // price count function
  showSitInfoById('Amount7');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit8(elementId){
  hideColorById('B4');
  showColorById('B4'); 
  // price count function
  showSitInfoById('Amount8'); 
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit9(elementId){
  hideColorById('C1');
  showColorById('C1');
  // price count function
  showSitInfoById('Amount9');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit10(elementId){
  hideColorById('C2');
  showColorById('C2');
  // price count function
  showSitInfoById('Amount10');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit11(elementId){
  hideColorById('C3');
  showColorById('C3');
  // price count function
  showSitInfoById('Amount11');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit12(elementId){
  hideColorById('C4');
  showColorById('C4');
  // price count function
  showSitInfoById('Amount12');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit13(elementId){
  hideColorById('D1');
  showColorById('D1');
  // price count function
  showSitInfoById('Amount13');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit14(elementId){
  hideColorById('D2');
  showColorById('D2');
  // price count function
  showSitInfoById('Amount14');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit15(elementId){
  hideColorById('D3');
  showColorById('D3');
  // price count function
  showSitInfoById('Amount15');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit16(elementId){
  hideColorById('D4');
  showColorById('D4');
  // price count function
  showSitInfoById('Amount16');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit17(elementId){
  hideColorById('E1');
  showColorById('E1');
  // price count function
  showSitInfoById('Amount17');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit18(elementId){
  hideColorById('E2');
  showColorById('E2');
  // price count function
  showSitInfoById('Amount18');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit19(elementId){
  hideColorById('E3');
  showColorById('E3');
  // price count function
  showSitInfoById('Amount19');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit20(elementId){
  hideColorById('E4');
  showColorById('E4');
  // price count function
  showSitInfoById('Amount20');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit21(elementId){
  hideColorById('F1');
  showColorById('F1');
  // price count function
  showSitInfoById('Amount21');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit22(elementId){
  hideColorById('F2');
  showColorById('F2');
  // price count function
  showSitInfoById('Amount22');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit23(elementId){
  hideColorById('F3');
  showColorById('F3');
  // price count function
  showSitInfoById('Amount23');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit24(elementId){
  hideColorById('F4');
  showColorById('F4');
  // price count function
  showSitInfoById('Amount24');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit25(elementId){
  hideColorById('G1');
  showColorById('G1');
  // price count function
  showSitInfoById('Amount25');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit26(elementId){
  hideColorById('G2');
  showColorById('G2');
  // price count function
  showSitInfoById('Amount26');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit27(elementId){
  hideColorById('G3');
  showColorById('G3');
  // price count function
  showSitInfoById('Amount27');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit28(elementId){
  hideColorById('G4');
  showColorById('G4');
  // price count function
  showSitInfoById('Amount28');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit29(elementId){
  hideColorById('H1');
  showColorById('H1');
  // price count function
  showSitInfoById('Amount29');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit30(elementId){
  hideColorById('H2');
  showColorById('H2');
  // price count function
  showSitInfoById('Amount30');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit31(elementId){
  hideColorById('H3');
  showColorById('H3');
  // price count function
  showSitInfoById('Amount31');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit32(elementId){
  hideColorById('H4');
  showColorById('H4');
  // price count function
  showSitInfoById('Amount32');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit33(elementId){
  hideColorById('I1');
  showColorById('I1');
  // price count function
  showSitInfoById('Amount33');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit34(elementId){
  hideColorById('I2');
  showColorById('I2');
  // price count function
  showSitInfoById('Amount34');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit35(elementId){
  hideColorById('I3');
  showColorById('I3');
  // price count function
  showSitInfoById('Amount35');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit36(elementId){
  hideColorById('I4');
  showColorById('I4');
  // price count function
  showSitInfoById('Amount36');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit37(elementId){
  hideColorById('J1');
  showColorById('J1');
  // price count function
  showSitInfoById('Amount37');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit38(elementId){
  hideColorById('J2');
  showColorById('J2');
  // price count function
  showSitInfoById('Amount38');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
}
function sit39(elementId){
  hideColorById('J3');
  showColorById('J3');
  // price count function
  showSitInfoById('Amount39');
   // Get the current values
   var decreaseNumberElement = document.getElementById("decrease-sit");
   var decreaseNumber = parseInt(decreaseNumberElement.textContent);
   
   var increaseNumberElement = document.getElementById("increase-sit");
   var increaseNumber = parseInt(increaseNumberElement.textContent);
 
   var additionalNumberElement = document.getElementById("total-price");
   var additionalNumber = parseInt(additionalNumberElement.textContent);
 
   // Decrease the decreaseNumber
   decreaseNumber--;
 
   // Increase the increaseNumber (limited to 4)
   if (increaseNumber < 4) {
       increaseNumber++;
   }
 
   // Add 550 to the additionalNumber
   additionalNumber += 550;
 
   // Update the display
   decreaseNumberElement.textContent = decreaseNumber;
   increaseNumberElement.textContent = increaseNumber;
   additionalNumberElement.textContent = additionalNumber;
  
}
function sit40(elementId){
  hideColorById('J4');
  showColorById('J4');
  // price count function
  showSitInfoById('Amount40');

   // Get the current values
  var decreaseNumberElement = document.getElementById("decrease-sit");
  var decreaseNumber = parseInt(decreaseNumberElement.textContent);
  
  var increaseNumberElement = document.getElementById("increase-sit");
  var increaseNumber = parseInt(increaseNumberElement.textContent);

  var additionalNumberElement = document.getElementById("total-price");
  var additionalNumber = parseInt(additionalNumberElement.textContent);

  // Decrease the decreaseNumber
  decreaseNumber--;

  // Increase the increaseNumber (limited to 4)
  if (increaseNumber < 4) {
      increaseNumber++;
  }

  // Add 550 to the additionalNumber
  additionalNumber += 550;

  // Update the display
  decreaseNumberElement.textContent = decreaseNumber;
  increaseNumberElement.textContent = increaseNumber;
  additionalNumberElement.textContent = additionalNumber;
}







function A1() {
  
}