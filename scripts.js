let myButton = document.createElement("button");
let buttonContainer = document.createElement("div");
let squareHolder = document.createElement("div");

//create div, create button
//appendChild put button in div
myButton.id = "button1";
myButton.textContent = "Make a Square!"; //make sure the button is in a different div than the boxes


buttonContainer.id = "buttonContainer";
buttonContainer.className = "d-flex justify-content-start"
squareHolder.id = "squareHolder"
squareHolder.className = "d-flex justify-content-start flex-wrap"

//make container and row divs for the squares to go into do they can wrap after overflowing


 let i = 1 ;

document.body.appendChild(buttonContainer);
document.body.appendChild(squareHolder);
//document.body.appendChild(squareRow);
buttonContainer.appendChild(myButton);

myButton.addEventListener('click', function(){
    let square = document.createElement("div");
   
    square.classList.add("border")
    square.classList.add("text-light")
    square.style.background = `black`
    square.classList.add("badySquare")
    square.textContent = ("beans")
    square.id = i
    square.setAttribute('title', i)
    
     square.onmouseover = function() {
         square.textContent = (square.id)
     };
    
     square.onmouseleave = function() {
         square.textContent = ("beans restored")
     }

    // when the mouseOver and mouseLeave run they display 'i' as total number of elements created, how to keep 'i' the same as when its created
    
    square.addEventListener('click', function(){

        square.style.background = randomColor();
            //*! randomColor function returning too much recursion error
    })
    
    square.addEventListener('contextmenu', function(evt) {
        evt.preventDefault();

       if  (square.id % 2 === 0){
           if  (square.nextElementSibling){
               
               square.nextElementSibling.remove();
            
            } else{
                
                alert("no more beans after this");
            }
          //*! return alert if next element === null
       } else {
           if (square.previousElementSibling){
               
               square.previousElementSibling .remove();
            } else {
                alert("The first bean")
            }

            //*! return alert if previous element === null
       }



       //this.nextElementSibling.remove();
        return false;
    }, false);

    //i % 2 === 0 || i % 2 !== 0



    squareHolder.appendChild(square)
    i++
})


function randomColor(){
    let r = Math.floor(Math.random() * 256);
    
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
    
}





 