let hover = false

$(function () {
let star1 = document.querySelector('#star');
      let light = document.querySelector('#light');
      
      star1.addEventListener('mouseenter',function(){
        light.setAttribute("animation-mixer","clip:connection")
        light.setAttribute("animation-mixer","loop:once")
        star1.setAttribute("animation","dur:100000000")
      })
      star1.addEventListener('mouseleave',function(){
        star1.setAttribute("animation","dur:250000;")
      })
})

function show(){
    if(hover){
        $('.preview').slideUp();
    }
}