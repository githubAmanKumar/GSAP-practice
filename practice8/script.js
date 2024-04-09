function locoTrigg() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoTrigg();

function loading() {
  var a = 0;
  setInterval(function () {

    if (a < 100) {
      a = a + Math.round(Math.random() * 15);
      document.querySelector("#loader").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader").innerHTML = a + "%";
      gsap.to("#loader", {
        top: "-100vh",
        delay: 0.5,
        duration: 0.5,
      })
    }

  }, 100)
}
loading();


// ---------------------firstAnimation---------------------
gsap.to("#page1 h1", {
  transform: "translateX(-100%)",
  fontWeight: 100,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top 0%",
    end: "top -200%",
    scrub: 5,
    pin: true
  }
})
//----------------LeftRight---------------
gsap.to("#page3 .lineRight h1", {
  x: "100%",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    scrub: 5,
    start: "top 60%",
    end: "top -900%",
  }

})
gsap.to("#page3 .lineLeft h1", {
  x: "-100%",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    scrub: 5,
    start: "top 80%",
    end: "top -900%",
  }

})

// ----------------------Homelander---------------

var page5 = document.querySelector("#page5");
var bubbles = `<div class="bubbles"></div>`;

for (let index = 0; index < 10; index++) {
  bubbles = bubbles + bubbles;
}
page5.innerHTML = bubbles;

if ('xr' in navigator && 'customElements' in window && 'ModelViewerElement' in window.customElements) {
  // Both WebXR and <model-viewer> are supported
  console.log('WebXR and <model-viewer> are supported.');
} else {
  // Either WebXR or <model-viewer> (or both) are not supported
  console.log('WebXR and/or <model-viewer> are not supported.');
}

