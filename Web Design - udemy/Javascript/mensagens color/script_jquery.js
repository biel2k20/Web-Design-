$(document).ready(function(){
    $('#blue').click(function(){
        $('p').css('color', '#35b8b0')
        $('#text')
            .text('Cor alterada!')
            .css({color: "green", border: '1px solid indigo'})
            .delay(3000)
            .addClass('indigo');
    });

    $('#red').click(function(){
        $('p')
            .css('color', 'red')
            .fadeOut(7000)
            .delay(2000)
            .fadeIn('fast');
        $('button').removeClass('red');
        
    })
});