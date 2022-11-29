let Constellations = [
    {first:{x:10,y:10},second:{x:10,y:10},third:[50,30]},
    {first:{x:10,y:10},second:{x:10,y:10},third:{x:10,y:10}},
    {first:{x:10,y:10},second:{x:10,y:10},third:{x:10,y:10}}
]


$(function () {
    $(document).on("click", function() {
    $('.preview').slideUp();
    })

    let designer = $('<div class="box"></div>');
    for(let i = 0; i < 3; ++i){
        console.log("as")
        designer.append('<div class = "star"/>')
        $('.Constellation').append(designer);
        $(`.star:nth-child(${i+1})`).css({'transform':'translate(50px,50px)'})
        // $('.Constellation').append(designer);
        // $('.star:nth-child(1)').css('transform','translate(50px,50px)')
        console.log(Constellations[i].first.x)
    }
})



