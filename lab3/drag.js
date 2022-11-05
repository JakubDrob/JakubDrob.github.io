let element;
let elementId;
let elementList;
let elementIndex;
let dropIndex;
let height = 4;
let width = 8;
let array;
let color;


 function initializeGrid(event) {
	let platform = document.getElementById('platform');
	array = new Array(height);
	for (var i = 0; i < height; i++) {
	 array[i] = new Array(width);
	 let newTr = document.createElement("tr");
	 platform.appendChild(newTr);
	 for (var j = 0; j < width; j++) {
		array[i][j] = false;
		let newTd = document.createElement("td");
		newTd.id = i + "_" + j;
		newTd.className = "cell";
		newTr.appendChild(newTd);
	 }
    }
   }
   
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
 function setRandomColor() {
	color = getRandomColor();
	document.getElementById('box').style.background = color;
  }

document.addEventListener("dragstart", ({target}) => {
       
  });

  document.addEventListener("dragover", (event) => {
      event.preventDefault();
  });

  document.addEventListener("dragstart", ({target}) => {
      if (target.className == "dropelement") {
		  element = target;
	  } else if (target.className == "dropinput") {
		  element = target.parentNode;
	  }
      elementId = element.id;
      elementList = element.parentNode.children;
      for(let i = 0; i < elementList.length; i++) {
      	if(elementList[i] === element){
          elementIndex = i;
        }
      }
  });

  document.addEventListener("dragover", (event) => {
      event.preventDefault();
  });

  document.addEventListener("drop", ({target}) => {
   let draggedElement;
   if(target.className == "dropelement") {
	   draggedElement = target;
   } else if (target.className == "dropinput") {
	  draggedElement = target.parentNode;
   } else {
	   return;
   }
   
   if(draggedElement.id !== elementId) {
	  element.remove(element);
	  for(let i = 0; i < elementList.length; i++) {
		if(elementList[i] === draggedElement){
		  dropIndex = i;
		}
	  }
	  if(elementIndex > dropIndex) {
		draggedElement.before(element);
		return;
	  } 
	  draggedElement.after(element);
	 }
  });