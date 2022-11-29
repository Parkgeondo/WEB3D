// let Constellations = [
//     {first:{x:30,y:30},second:{x:10,y:10},third:[50,30]},
//     {first:{x:260,y:160},second:{x:10,y:10},third:{x:10,y:10}},
//     {first:{x:260,y:400},second:{x:10,y:10},third:{x:10,y:10}}
// ]
let Constellations = [
    {first:[{x:40,y:60},{x:300,y:200},{x:290,y:400}]}
]


$(function () {
    $(document).on("click", function() {
        $('.preview').slideUp();
    })

    let designer = $('<div class="box"></div>');
    for(let i = 0; i < 3; ++i){
        designer.append('<div class = "star"/>')
        $('.Constellation').append(designer);
        $(`.star:nth-child(${i+1})`).css({'transform':`translate(${Constellations[0].first[i].x}px,${Constellations[0].first[i].y}px)`})
        // $('.Constellation').append(designer);
        // $('.star:nth-child(1)').css('transform','translate(50px,50px)')
    }
})
console.log(Constellations[0].first[0].x)



