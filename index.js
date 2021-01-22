
$('.head_right').on('click',function(){
    $('.switch_language').toggle()
})
$('.english,.chinese').on('click',function(e){
    e.stopPropagation()
    $(this).css("background",'#F9FAFC')
    $(this).siblings().css("background",'#fff')
    $('.switch_language').hide()
})