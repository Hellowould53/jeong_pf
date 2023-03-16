$(document).ready(function(){


/*=====  header_ham_btn ===== */

    $('#ham_btn').click(function(){

        $('#ham_ck_wrap').css({
            display : 'block',
        });

        $('#ham_ck_con').animate({
            right : '0px',
        },200);
    });



/*=====  x_box ===== */

    $('#x_box').click(function(){

        $('#ham_ck_wrap').css({
            display : 'none',
        });
    });




/*==== sec02 #s2_img01 click ====*/

$('#s2_img01').click(function(){

    $('.s02_in_img_con:nth-child(1)').css({
        display : 'block',
    });

    $('.s02_in_img_con:nth-child(2),.s02_in_img_con:nth-child(3)').css({
        display : 'none',
    });
});


$('#s2_img02').click(function(){

    $('.s02_in_img_con:nth-child(2)').css({
        display : 'block',
    });

    $('.s02_in_img_con:nth-child(1),.s02_in_img_con:nth-child(3)').css({
        display : 'none',
    });
});


$('#s2_img03').click(function(){

    $('.s02_in_img_con:nth-child(3)').css({
        display : 'block',
    });

    $('.s02_in_img_con:nth-child(1),.s02_in_img_con:nth-child(2)').css({
        display : 'none',
    });
});





/* sec03 */

var s = 0;
var s03_ww = $('.s3_img_con').width();


/* 밑에 것이 안되서 대신에 적은 것 해결되면 삭제하기 */
$('#s3_left').click(function(){

    s--;

    if( s < 0 ){
      s = 2;
    }

    $('#s03_img_box').animate({
        left : -s03_ww * s,
    },2000);

});


/* ======== sec03번의 왼쪽 버튼을 클릭하면 제일 마지막에 있는 뚜레쥬르와 자연스럽게 연결하고 싶은데 이상하게 나옵니다. =============================================================================================== */

/* $('#s3_left').click(function(){
    $('#s03_img_box').animate({
        left : 0,

    },1000,function(){
        $('#s03_img_box').css({
            left : -s03_ww,
        }).find('.s3_img_con').last().appendTo('#s03_img_box');
    });
});
 */





$('#s3_right').click(function(){
    $('#s03_img_box').animate({
        left : -s03_ww,

    },1000,function(){
        $('#s03_img_box').css({
            left : 0 ,
        }).find('.s3_img_con').first().appendTo('#s03_img_box');
    });
});


function time(){

    si = setInterval(function(){
        $('#s3_right').trigger('click');
    },3000); 
}

time();


$('.s3_img_con, .s03_lr_btn').hover(function(){
    clearInterval(si);

},function(){
    time();
});




/* sec04 */

$('.s04_img li:nth-child(1)').click(function(){

    $('#s04_bg_img ,#s4_img1').css({
        display : 'block',
    });

    $('#s4_img2, #s4_img3, #s4_img4, #s4_img5, #s4_img6, #s4_img7').css({
        display : 'none',
    });
    

});


$('.s04_img li:nth-child(2)').click(function(){

    $('#s04_bg_img ,#s4_img2').css({
        display : 'block',
    });

    $('#s4_img1, #s4_img3, #s4_img4, #s4_img5, #s4_img6, #s4_img7').css({
        display : 'none',
    });
    

});


$('.s04_img li:nth-child(3)').click(function(){

    $('#s04_bg_img ,#s4_img3').css({
        display : 'block',
    });

    $('#s4_img1, #s4_img2, #s4_img4, #s4_img5, #s4_img6, #s4_img7').css({
        display : 'none',
    });
    

});



$('.s04_img li:nth-child(4)').click(function(){

    $('#s04_bg_img ,#s4_img4').css({
        display : 'block',
    });

    $('#s4_img1, #s4_img2, #s4_img3, #s4_img5, #s4_img6, #s4_img7').css({
        display : 'none',
    });
    

});


$('.s04_img li:nth-child(5)').click(function(){

    $('#s04_bg_img ,#s4_img5').css({
        display : 'block',
    });

    $('#s4_img1, #s4_img2, #s4_img3, #s4_img4, #s4_img6, #s4_img7').css({
        display : 'none',
    });
    

});


$('.s04_img li:nth-child(6)').click(function(){

    $('#s04_bg_img ,#s4_img6').css({
        display : 'block',
    });

    $('#s4_img1, #s4_img2, #s4_img3, #s4_img4, #s4_img5, #s4_img7').css({
        display : 'none',
    });
    

});


$('.s04_img li:nth-child(7)').click(function(){

    $('#s04_bg_img ,#s4_img7').css({
        display : 'block',
    });

    $('#s4_img1, #s4_img2, #s4_img3, #s4_img4, #s4_img5, #s4_img6').css({
        display : 'none',
    });
    

});



$('#s04_bg_xbox').click(function(){

    $('#s04_bg_img').css({
        display : 'none',
    });

});








/*===== #fixed_btn scroll===== */

var wh = $(' #ham_ck_wrap').height();


$('#fixed_btn li').each(function(index){

    $(this).attr('data-index',index);

}).click(function(){

    i = $(this).attr('data-index');

    $('html,body').animate({
        scrollTop : wh * i,
    },500);

});


$(window).scroll(function(){

    sct = $(window).scrollTop();

    if( sct >= 0 && sct < wh ){
        $('#fixed_btn li').removeClass('fi_color');
        $('#fixed_btn li').eq(0).addClass('fi_color');
    }else if( sct >= wh && sct < wh * 2 ){
        $('#fixed_btn li').removeClass('fi_color');
        $('#fixed_btn li').eq(1).addClass('fi_color');
    }else if( sct >= wh * 2 && sct < wh * 3 ){
        $('#fixed_btn li').removeClass('fi_color');
        $('#fixed_btn li').eq(2).addClass('fi_color');
    }else if( sct >= wh * 3 ){
        $('#fixed_btn li').removeClass('fi_color');
        $('#fixed_btn li').eq(3).addClass('fi_color');
    }

});


$(window).scroll(function(){

    sct = $(window).scrollTop();

    if( sct > 2800 ){

        $('#top_btn').css('display','block');
        $('#fixed_btn').css('display','none');

    }else{

        $('#top_btn').css('display','none');
        $('#fixed_btn').css('display','block');

    }

});



/* top_btn  */


$('#top_btn').click(function(){

    $('html,body').animate({
        scrollTop : 0,
    },1000);

});








































});//end