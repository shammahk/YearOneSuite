const left = document.getElementById('left');
const middle = document.getElementById('middle');
const right = document.getElementById('right');

var imgSrc = [
    "./assets/profile.jpeg", "./assets/load-page.jpg",
    "./assets/question-page.jpeg",
    "./assets/submit-prompt.jpeg",
]
var i = 0;

function carousel() {
    

    // changing the src attributes
    
    left.src = imgSrc[i];

    // add if statements to prevent underfined
    if (i == imgSrc.length - 2) {
        middle.src = imgSrc[0];
        right.src = imgSrc[1];
    } else if (i == imgSrc.length - 3) {
        middle.src = imgSrc[i + 1];
        right.src = imgSrc[i + 2];
    } 
   
   
    i++;

    if (i == imgSrc.length) {
        i = 0;
    }

    setTimeout(() => {
        carousel();
    }, 4000);


    console.log('works',imgSrc.length, i,  left.src, middle.src, right.src);
}

// carousel();

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
 
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

function startModal() {
    modal.style.display = "block";
    modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
    console.log('modal works', modalImg.src);
}