$(function(){

    $('.down_menu01>ul li').mouseover(function(){
        $('.down_menu01>ul li').removeClass('on01')
        $(this).addClass('on01')

        index = $(this).index() 

        $('.down_menu01 .menu_tab > div').removeClass('sheet_on01')
        $('.down_menu01 .menu_tab > div').eq(index).addClass('sheet_on01')
    }) //down_menu01_hover_event 

    $('.down_menu02>ul li').mouseover(function(){
        $('.down_menu02>ul li').removeClass('on02')
        $(this).addClass('on02')
    
        index = $(this).index() 
    
        $('.down_menu02 .menu_tab > div').removeClass('sheet_on02')
        $('.down_menu02 .menu_tab > div').eq(index).addClass('sheet_on02')
    }) //down_menu02_hover_event 

    $('.down_menu03>ul li').mouseover(function(){
        $('.down_menu03>ul li').removeClass('on03')
        $(this).addClass('on03')
    
        index = $(this).index() 
    
        $('.down_menu03 .menu_tab > div').removeClass('sheet_on03')
        $('.down_menu03 .menu_tab > div').eq(index).addClass('sheet_on03')
    }) //down_menu03_hover_event   
    
    $('.down_menu04>ul li').mouseover(function(){
        $('.down_menu04>ul li').removeClass('on04')
        $(this).addClass('on04')
    
        index = $(this).index() 
    
        $('.down_menu04 .menu_tab > div').removeClass('sheet_on04')
        $('.down_menu04 .menu_tab > div').eq(index).addClass('sheet_on04')
    }) //down_menu04_hover_event 

    $('.down_menu05>ul li').mouseover(function(){
        $('.down_menu05>ul li').removeClass('on05')
        $(this).addClass('on05')
    
        index = $(this).index() 
    
        $('.down_menu05 .menu_tab > div').removeClass('sheet_on05')
        $('.down_menu05 .menu_tab > div').eq(index).addClass('sheet_on05')
    }) //down_menu05_hover_event 

        $('.down_menu06>ul li').mouseover(function(){
        $('.down_menu06>ul li').removeClass('on06')
        $(this).addClass('on06')
    
        index = $(this).index() 
    
        $('.down_menu06 .menu_tab > div').removeClass('sheet_on06')
        $('.down_menu06 .menu_tab > div').eq(index).addClass('sheet_on06')
    }) //down_menu06_hover_event 

    $('.down_menu07>ul li').mouseover(function(){
        $('.down_menu07>ul li').removeClass('on07')
        $(this).addClass('on07')
    
        index = $(this).index() 
    
        $('.down_menu07 .menu_tab > div').removeClass('sheet_on07')
        $('.down_menu07 .menu_tab > div').eq(index).addClass('sheet_on07')
    }) //down_menu07_hover_event 
    

    $('.quick_menu').css('top', $(window).height()/2 - $('.quick_menu').height()/2)

            $(window).scroll(function(){

                let point = $(this).scrollTop() + ($(window).height()/2 -$('.quick_menu').height()/2)

                $('.quick_menu').stop().animate({
                    top: point
                },500)

    }) //window_scroll_event

    
    const btnOpen = $('.web_ham .btn_open')
    const btnClose = $('.web_ham .btn_close')
    const listMenu = $('.web_ham .list_menu')

            btnOpen.click(function(){
                listMenu.css('display', 'block','border', '1px solid #ccc') 
                btnOpen.css('display', 'none');
                btnClose.css('display', 'block');
            }) //btnOpen_click_event

            btnClose.click(function(){
                listMenu.css('display','none')
                listMenu.css('border', 'none')

                btnClose.css('display', 'none');
                btnOpen.css('display', 'block');
            }) //btnClose_click_event

    
    const topBtn = $('.top_btn_box_web a');

    topBtn.click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 700);
    }) //topBtn_click_event

    const hamOpen = $('.ham_menuT .ham_menuT_btn .ham_menuT_open')
    const hamClose = $('.ham_menuT .ham_menuT_btn .ham_menuT_close')
    const hamMenu = $('.ham_menuT .ham_menu_wrap')

        hamOpen.click(function(){
            hamMenu.css('display', 'block')
            hamMenu.css('border', '1px solid #ccc')
            hamOpen.css('display', 'none');
            hamClose.css('display', 'block');
        }) //hamOpen_click_event

        hamClose.click(function(){
            hamMenu.css('display','none')
            hamMenu.css('border', 'none')

            hamClose.css('display', 'none');
            hamOpen.css('display', 'block');
        }) //hamClose_click_event


    $('.ham_menu_wrap>ul li').click(function(){
        $('.ham_menu_wrap>ul li').removeClass('on')
        $(this).addClass('on')

        index = $(this).index() 

        $('.ham_menu_wrap .tab_menuT > div').removeClass('menu_on')
        $('.ham_menu_wrap .tab_menuT > div').eq(index).addClass('menu_on')
    }) //tab_menuT_click_event 

    })//jQuery