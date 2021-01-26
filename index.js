
// $('.head_right').on('click',function(){
//     $('.switch_language').toggle()
// })
$('.english,.chinese').on('click',function(e){
    e.stopPropagation()
    $(this).css("background",'#F9FAFC')
    $(this).siblings().css("background",'#fff')
    // $('.switch_language').hide()
})
$('.unactive').on('click',function(){
    if(!$('.dialog').is(':hidden')){
        return
    }
    $('.dialog').show()
    setInterval(function(){
        $('.dialog').hide()
    },3000)
})
// $('.cont_1 .rect_click').on('click',function(e){
//     if($(this).context.className.baseVal.includes('unactive_1')){
//         $('.cont_1 .active_1').show()
//         $('.cont_1 .unactive_1').hide()
//         $('.cont_1 .unactive_2').show()
//         $('.cont_1 .active_2').hide()
//     } else if($(this).context.className.baseVal.includes('active_1')) {
//         $('.cont_1 .active_1').show()
//         $('.cont_1 .unactive_1').hide()
//         $('.cont_1 .unactive_2').show()
//         $('.cont_1 .active_2').hide()
//     }else if($(this).context.className.baseVal.includes('active_2')) {
//         $('.cont_1 .unactive_1').show()
//         $('.cont_1 .active_1').hide()
//         $('.cont_1 .active_2').show()
//         $('.cont_1 .unactive_2').hide()
//     }else if($(this).context.className.baseVal.includes('unactive_2')) {
//         $('.cont_1 .unactive_1').show()
//         $('.cont_1 .active_1').hide()
//         $('.cont_1 .active_2').show()
//         $('.cont_1 .unactive_2').hide()
//     }
// })