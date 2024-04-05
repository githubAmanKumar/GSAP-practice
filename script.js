const aud = new Audio("homelander.mp3");
aud.volume = "0.15";
aud.play();

var tl = gsap.timeline();
tl.from(".headings >h1",{
    y:150,
    duration: 0.2,
    delay: 2.5,
    stagger:0.5
})
tl.from("img",{
    rotate:60,
    x: 600,
    y:600,
    duration: 0.5,
    
})

tl.to(".headings",{
    scale:1.1,
    repeat:-1,
    yoyo:true
})
tl.to("#main",{
    filter: "invert(0)",
    
})
tl.to("h1",{
    filter: "invert(1)",
    
})
tl.to("#main",{
    background: "black",
   
})

tl.to("img",{
    delay:1,
    filter: "contrast(6)",
    
})
tl.to(".headings",{
    background: "rgb(169, 13, 13)",
})
tl.to("h1",{
    filter: "invert(0)",
    color: "rgb(169, 13, 13)",
})
tl.to(".headings",{
    background: "black",
})
tl.to("#main",{
    delay:0.8,
    filter: "invert(1)", 
})
tl.to("#main",{
    filter: "invert(0)", 
})
