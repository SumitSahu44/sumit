function init()
{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}



init()


var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
main.addEventListener("mousemove",function(dets)
{
  crsr.style.visibility = "visible"; // Ensure cursor is visible
  crsr.style.transform = `translate(${dets.x}px, ${dets.y}px) translate(-50%, -50%)`;

 
})









var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 25%",
        end:"top 0",
        scrub:3
    }
 
})
tl.to(".page1 h1",{
    x:-100,
   
}, "anim")

tl.to(".page1 h2",{
    x:100,
   
},"anim")

tl.to(".page1 video",{
   width:"90%"
   
},"anim")



// page 2 animation js 
tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page3",
    scroller:".main",
    start:"top -35%",
    end:"top -130%",
    markers:true,
    pin:true,
    scrub:3
  }
})

tl2.to(".bg",{
  // backgroundColor:"#FADFD8"
  backgroundColor:"#FFF"
}, "sametimeworking")
tl2.to(".page3 h2",{
     color:"#000"
}, "sametimeworking")

tl2.to(".card",{
   transform:"translateX(-300%)"
    // ease: "power4.out",
   
},"sametimeworking")








// page 2 js

var boxes = document.querySelectorAll(".box")
boxes.forEach((box)=>{
   box.addEventListener("mouseenter", function(){
     var att =  box.getAttribute("data-image")
     crsr.style.width = "300px"
     crsr.style.height = "250px"
     crsr.style.borderRadius = "0"
     crsr.style.backgroundImage = `url(${att})`

     })
   box.addEventListener("mouseleave", function(){
    box.style.backgroundColor="transparent"
    crsr.style.width = "20px"
    crsr.style.height = "20px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = `none`
 })
})