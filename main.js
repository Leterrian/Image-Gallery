const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg" , "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alt = {
    "pic1.jpg" : "Close up of eye",
    "pic2.jpg" : "ocean looking rock",
    "pic3.jpg" : "white and purple flowers",
    "pic4.jpg" : "pharoah painting",
    "pic5.jpg" : "moth on a leaf"

};




/* Looping through images */
for (const files in filenames)  {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${files}`);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage);
    
    } 
/* Wiring up the Darken/Lighten button */
