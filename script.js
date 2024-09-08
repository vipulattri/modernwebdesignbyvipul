const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videoconAnimation(){
    var playbtn = document.querySelector("#play")
var videocon = document.querySelector("#video-container");
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-25,
        top: dets.y-80
    })
})
}
videoconAnimation();
function loadingAnimation() {
    
gsap.from("#page1 h1",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})

gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity:0,
    delay:1.5,
    duration:0.9,
})
}
loadingAnimation();

document.addEventListener("mousemove",function(dets){

    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})
document.querySelector("#child1").addEventListener("mousemove",function(){

    gsap.to("#cursor",{
        transform: 'translate(-50%, -50%) scale(1)'
    })
})
document.querySelector("#child2").addEventListener("mouseleave",function(){

    gsap.to("#cursor",{
        transform: 'translate(-50%, -50%) scale(0)'
    })
})
