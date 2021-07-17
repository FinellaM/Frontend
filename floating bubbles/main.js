
gsap.from('.dot', { y: 1000, duration: 2}); /* from this spot on y-axis*/

var tl = gsap.timeline({repeat: 30, repeatDelay: 1});

//add 3 tweens that will play in direct succession.
 tl.to(".numberone", {duration: 3, opacity: 2, x: 0, y: -1000, scale: 3});
tl.to(".numbertwo", {duration: 0.1,  opacity: 1, x: 0, scale: 0.2, y: -1000});
tl.to(".numberthree", {duration: 0.1,  opacity: 1, x: 0, scale: 2, y: -1000});


