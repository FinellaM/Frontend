
gsap.to(".dot", {x: 0}); /* moves to this position on x-axis */

gsap.from('.dot', { y: 750 }); /* from this spot on y-axis*/



var tl = gsap.timeline({repeat: 30, repeatDelay: 1});

//add 3 tweens that will play in direct succession.
tl.to(".numberone", {duration: 0.2, opacity: 0, x: 0, y: 20});
tl.to(".numbertwo", {duration: 0.2,  opacity: 0, x: 0, scale: 0.2, y: 20});
tl.to(".numberthree", {duration: 0.5,  opacity: 0, x: 0, scale: 2, y: 20});
