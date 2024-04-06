gsap.from("#page1 #box",{
    scale:0,
    rotate:360,
    duration:1,
    scrollTrigger:{
        trigger:"#page1 #box",
        scrroller:"body",
        // markers:true,
    }
}) 
gsap.from("#page2 #box",{
    scale:0,
    rotate:360,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #box",
        scrroller:"body",
        start:"top 60%",
        end:"top 70%",
        markers:true,
        scrub:5
    }
})
gsap.from("#page3 #box",{
    scale:0,
    rotate:360,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 #box",
        scrroller:"body",
        // markers:true,
    }
}) 