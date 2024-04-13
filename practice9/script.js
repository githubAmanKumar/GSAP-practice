// ---------------------SmoothScrolling---------------------

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

// ---------------------LoaderAnimation---------------------

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
gsap.to("#homepage h1", {
    transform: "translateX(-100%)",
    fontWeight: 100,
    scrollTrigger: {
        trigger: "#homepage",
        scroller: "#main",
        start: "top 0%",
        end: "top -200%",
        scrub: 5,
        pin: true
    }
})

// -----------------------Project--------------------------

gsap.from("#projects", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#projects",
        scroller: "#main",
        start: "top 75%",
        end: "top 80%",
        scrub: 5,
        pin: true
    }
})

gsap.from("#project1", {
    y: 10,
    scale: 0.8,
    scrollTrigger: {
        trigger: "#project1",
        scroller: "#main",
        start: "top 80%",
        end: "top 85%",
        scrub: 5,
        pin: true
    }
})

gsap.from("#project2", {
    y: 10,
    scale: 0.8,
    scrollTrigger: {
        trigger: "#project2",
        scroller: "#main",
        start: "top 80%",
        end: "top 90%",
        scrub: 5,
        pin: true
    }
})

gsap.from("#project3", {
    y: 10,
    scale: 0.8,
    scrollTrigger: {
        trigger: "#project3",
        scroller: "#main",
        start: "top 80%",
        end: "top 90%",
        scrub: 5,
        pin: true
    }
})

//----------------LeftRightAnimation---------------

gsap.to("#skills .lineRight h1", {
    x: "100%",
    scrollTrigger: {
        trigger: "#skills",
        scroller: "#main",
        scrub: 5,
        start: "top 60%",
        end: "top -900%",
    }

})

gsap.to("#skills .lineLeft h1", {
    x: "-100%",
    scrollTrigger: {
        trigger: "#skills",
        scroller: "#main",
        scrub: 5,
        start: "top 80%",
        end: "top -900%",
    }

})

// -----------------About------------------

gsap.from("#about img", {
    rotate: 30,
    scrollTrigger: {
        trigger: "#about img",
        scroller: "#main",
        start: "top 60%",
        end: "top 65%",
        scrub: 5,
        pin: true
    }
})
