
function loader(){
    var t1=gsap.timeline()
t1.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5,


})
t1.from("#line-part1,.line h2",{
    opacity:0,

})
t1.from("#line-part1 h5",{
    opacity:0,
    onStart:function(){
        var h5timer=document.querySelector("#line-part1 h5")
        var gorw=0;
       setInterval(function() {
           if(gorw<100){
               gorw++;
               h5timer.innerHTML=gorw++
       
           }else{
               h5timer.innerHTML=gorw
       
           }
          
           
       }, 33)

    }
})
t1.to(".line h2",{
    animationName:"anime",
    opacity:1

})
t1.to("#loader",{
    opacity:0,
    duraton:0.2,
    delay:2
})
t1.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:"power4",
    duraton:0.5,

})
t1.from("#nav",{
    opacity:0
})
t1.from("#hero1 h1,#hero2 h1,#hero3 h2 ,#hero4 h1",{
    y:120,
    stagger:0.2,
})



}
function cursoranimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cur",{
            x:dets.x,
            y:dets.y,
        })
    })
    Shery.makeMagnet("#nav_part2 h4", {});
}
loader()
cursoranimation()


 




