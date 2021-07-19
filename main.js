var sections = gsap.utils.toArray("section");

sections.forEach((elem, i) => {

  var trigger = elem.querySelector("h2");
  var headlines = elem.querySelectorAll("h2, h3");
  
  const tl = gsap.timeline( { 

     scrollTrigger: {
       trigger: trigger,
       start: "+=133 80%",
       end: "+=1000 10%",
       scrub: true,
       markers: true, /* turns gsap markers on or off */
       toggleActions: "play reverse play reverse",
     }
    
  });


   tl
     .to(headlines, { opacity: 1, duration: 0.2, stagger: 0.1 })
     .to(headlines, { opacity: 0, duration: 0.2, stagger: 0.1 }, 0.8 )
   ;
  
  
});
