$(window).on('load',function(){
    $('.beranda').addClass('active');
    $('.tampung').addClass('arah');
    $('.hilang').click(function(){
        $('.depan').addClass('active')
    })

    $('#go').click(function(){
        $('.kedua').toggleClass('active')
    })
})

$(window).scroll(function(){
    const scroll = $(this).scrollTop();

    if(scroll > $('#objek').offset().top -80){
     $('.maju').addClass('active');
    } else{
        $('.maju').removeClass('active');
    }

    if(scroll > $('#go').offset().top -100){
        $('.kedua.active .card').each(function(i){
            setTimeout(function(){
                $('.kedua.active .card').eq(i).addClass('aktive')
            }, 500 * (i+1));
        });
    } else {
        $('.kedua.active .card').removeClass('aktive')
    }

    if(scroll > $('.section').offset().top -250){
        $('.judul h2').addClass('k1');
       } else {
        $('.judul h2').remoceClass('k1');
       }

       if(scroll > $('.section').offset().top -200){
        $('.atas .kiri').addClass('k2');
       } else {
        $('.atas .kiri').removeClass('k2');
       }

       if(scroll > $('.section').offset().top -200){
        $('.atas .kanan').addClass('k3');
       } else {
        $('.atas .kanan').removeClass('k3');
       }

       if(scroll > $('.section').offset().top -50){
        $('.bawah .kiri').addClass('k4');
       } else {
        $('.bawah .kiri').removeClass('k4');
       }

       if(scroll > $('.section').offset().top -50){
        $('.bawah .kanan').addClass('k5');
       } else {
        $('.bawah .kanan').removeClass('k5');
       }

       if(scroll > $('.sarana').offset().top -300){
        $('.judul-sarana').addClass('k6');
       } else {
        $('.judul-sarana').removeClass('k6');
       }


       if(scroll > $('.section-wawasan').offset().top -320){
        $('.judul h2').addClass('k40');
       } else {
        $('.judul h2').removeClass('k40');
       }

       if(scroll > $('.section-wawasan').offset().top -250){
        $('.wawasan-kiri').addClass('k41');
       } else {
        $('.wawasan-kiri').removeClass('k41');
       }


       if(scroll > $('.section-wawasan').offset().top -250){
        $('.wawasan-kanan').addClass('k42');
       } else {
        $('.wawasan-kanan').removeClass('k42');
       }

       if(scroll > $('.wawasan-kiri-bawah').offset().top -250){
        $('.wawasan-kiri-bawah').addClass('k43');
       } else {
        $('.wawasan-kiri-bawah').removeClass('k43');
       }


       if(scroll > $('.wawasan-kiri-bawah').offset().top -250){
        $('.wawasan-kanan-bawah').addClass('k44');
       } else {
        $('.wawasan-kanan-bawah').removeClass('k44');
       }

       if(scroll > $('section .contact-kiri').offset().top -250){
        $('section .contact-kiri').addClass('k45');
       } else {
        $('section .contact-kiri').removeClass('k45');
       }

       if(scroll > $('section .contact-kiri').offset().top -250){
        $('section .contact-kanan').addClass('k46');
       } else {
        $('section .contact-kanan').removeClass('k46');
       }


       if(scroll > $('.ni').offset().top -250){
           $('.ni .card').each(function(i){
               setTimeout(function(){
                   $('.ni .card').eq(i).addClass('k7')
               }, 500 * (i+1));
           });
       } else {
        $('.ni .card').removeClass('k7')
       }

       if(scroll > $('.kunjungan').offset().top -300){
        $('.judul-kunjungan').addClass('k8');
       } else {
        $('.judul-kunjungan').removeClass('k8');
       }

       if(scroll > $('.kunjungan').offset().top -150){
        $('.kunjungan .progress').each(function(i){
            setTimeout(function(){
                $('.kunjungan .progress').eq(i).addClass('k9')
            }, 300 * (i+1));
        });
    } else {
        $('.kunjungan .progress').removeClass('k9')
    }

    if(scroll > $('.hubungi').offset().top -300){
        $('.judul-bungi').addClass('k10');
       } else {
        $('.judul-bungi').removeClass('k10');
       }

       if(scroll > $('.hubungi').offset().top -250){
        $('.hubungi form').addClass('k11');
       } else {
        $('.hubungi form').removeClass('k11');
       }


})