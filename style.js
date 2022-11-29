let hover = false;
let click = false;

$(function () {
    show()
    let star1 = document.querySelector('#star');
    let light = document.querySelector('#light');
    let back = document.querySelector('.back');
      
    star1.addEventListener('mouseenter',function(){
        light.setAttribute("animation-mixer","clip:connection")
        light.setAttribute("animation-mixer","loop:once")
        star1.setAttribute("animation","dur:100000000")
        hover = true;
        show();
    })
    star1.addEventListener('mouseleave',function(){
        star1.setAttribute("animation","dur:250000;")
        hover = false;
        show();
    })
    star1.addEventListener('click',function(){
        click = true;
        modal();
    })
    back.addEventListener('click',function(){
        click = false;
        modal();
    })
})

function show(){
    if(hover){
        $('.preview').stop(true).delay(200).slideDown();
    }else{
        $('.preview').stop(true).slideUp();
    }
}

function modal(){
    if(click){
        $('.modal').fadeIn(100)
        $('.background').fadeIn(100)
    }else{
        $('.modal').fadeOut(100)
        $('.background').fadeOut(100)
    }
}