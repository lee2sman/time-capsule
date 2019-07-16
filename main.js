//switcher - changes The Depth of Time title -> inverse color
// function hover(element) {
//   element.setAttribute('src', '/assets/title_inverse.png');
// }
//
// function unhover(element) {
//   element.setAttribute('src', '/assets/title.png');
// }
//

//PAGE SCRAMBLING

let width = window.innerWidth;
let height = window.innerHeight;
let x, y, rot;
let clockDiv;

let infoButtons = document.getElementsByClassName("infoButtons");
for(var i = 0; i < infoButtons.length; i++)
{
  x = Math.random() * width * 0.9;
  y = Math.random() * height * 0.9;
  rot = Math.random() * 360;
  infoButtons[i].style.left = x+'px';
  infoButtons[i].style.top = y+'px';
  infoButtons[i].style.transform = 'rotate('+rot+'deg)';
}

//COUNTDOWN
function displayTime(){
let today = new Date();
let revealDate = new Date("Apr 20, 2029 15:00:00");
let timeinmilisec = revealDate.getTime() - today.getTime() ;
let numOfDays =  Math.floor(timeinmilisec / (1000 * 60 * 60 * 24));
let partialDays = timeinmilisec / (1000 * 60 * 60 * 24) - numOfDays;
let remainingHrs = Math.floor(partialDays * 24);
if (remainingHrs<10){
	remainingHrs = "0"+String(remainingHrs);
}
let remainingMin = Math.floor((partialDays*24 - remainingHrs) * 60);
if (remainingMin<10){
	remainingMin = "0"+String(remainingMin);
}
let remainingSec = Math.floor((((partialDays*24 - remainingHrs) * 60) - remainingMin)*60);
if (remainingSec<10){
	remainingSec = "0"+String(remainingSec);
}

if (today >= revealDate){
  //then reveal time capsules
  //
} else {

  daysClock = document.getElementById('daysClock');
  daysClock.innerHTML = numOfDays+'</br> Days';

  hoursClock = document.getElementById('hoursClock');
  hoursClock.innerHTML = remainingHrs + ' : ' + remainingMin + ' : ' + remainingSec + '</br> Hours';
}
}

//runs once a sec
setInterval(displayTime, 1000);

//infinite scroll of text

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        var div = document.createElement('div')
        div.innerHTML = '</br></br></br>This is a website for storing the work of seven time capsules created in 2019 over five weeks by a group of twenty-seven students from New Media, Math & Computer Science, and Graphic Design at Purchase College of the State University of New York. All of the final work from <a class="capsuleLinks" href="" alt="Studio 1">Studio 1</a>, <a class="capsuleLinks" href="" alt="Studio 2">Studio 2</a>, <a class="capsuleLinks" href="" alt="Studio 3">Studio 3</a>, <a class="capsuleLinks" href="" alt="Studio 4">Studio 4</a>, <a class="capsuleLinks" href="" alt="Studio 5">Studio 5</a>, <a class="capsuleLinks" href="" alt="Studio 6">Studio 6</a>, <a class="capsuleLinks" href="" alt="Studio 7">Studio 7</a> will be fully published &amp; accessible via this portal on April 20, 2029 at 15:00 EST.'
        div.className = 'main';
        document.body.appendChild(div)
        console.log('hit bottom');
    }
}
