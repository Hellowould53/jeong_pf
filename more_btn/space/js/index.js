$(document).ready(function(){

    var sec02_h = $('#sec02_img_wrap img').height();
    
    $('#top').click(function(){
        $('#sec02_img_wrap').animate({
            top : -sec02_h,

        },1000,function(){
            $('#sec02_img_wrap').css({
                top : 0,
            }).find('img').first().appendTo('#sec02_img_wrap');
        });
    });

    function time(){

        si = setInterval(function(){
            $('#top').trigger('click');
        },3000);

    }

    time();


    $('#ham_header').click(function(){
        $('#side_wrap').css({
            width : '50%',
        });
    });

    $('#x_box').click(function(){
        $('#side_wrap').css({
            width : 0,
        });
    });




  


    var a = 0;

    $('#ham_header').hover(function(){

        if( a == 0 ){
            $('#ham_header img').attr({
                src : 'img/ham_hover.png',
            });
            a++;
        }else if( a == 1 ){
            $('img',this).attr({
                src : 'img/ham.png',
            });
            a--;
        }
    });





});//end