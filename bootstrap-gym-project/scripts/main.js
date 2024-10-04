$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
})


$(window).scroll(function(){
    let position = $(this).scroll();
    console.log(position)
    if(position >= 200){
        $('.nav-menu').addClass('custom-navbar')
    }else{
        $('.nav-menu').removeClass('custom-navbar')
    }
})


$(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position)

    if(position >= 700 ){
        $('.award-img').addClass('fromRight')
        $('.award-text').addClass('fromLeft')
    }else{
        $('.award-img').removeClass('fromRight')
        $('.award-text').removeClass('fromLeft')
    }
})

$('.gallery-list-item').click(function(){
    let value = $(this).attr('data-filter');
    $(this).addClass('active-item').siblings().removeClass('active-item')
    if(value === 'all'){
        $('.filter').show(300)
    }else{
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);

    }
})


$(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position);
    if(position >= 4400 ){
        $('.card-3').addClass('movefromRight')
        $('.card-2').addClass('movefrombottom')
        $('.card-1').addClass('movefromLeft')
    }else{
        $('.card-3').removeClass('movefromRight')
        $('.card-2').removeClass('movefrombottom')
        $('.card-1').removeClass('movefromLeft')
    }
})