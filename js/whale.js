$(function(){
    //================================header===================================
    //opening - 첫페이지 =======================================================
    setTimeout(() => {
        $('.opening').fadeOut(function(){
            $('.login').show();
        });        
    }, 3000);    

    //login 페이지 =============================================================
    //로그인
    $('.loginForm .loginButton').click(function(){
        var id = $('#id').val();
        var password = $('#password').val();
        console.log(id, password);
        $('.message').remove();
      
      if(id==''){
          $('#id').after('<p class="message">이메일/닉네임을 입력하세요.</p>').focus();
      }else if(password==''){
          $('#password').after('<p class="message">비밀번호를 입력하세요.</p>').focus();
      }else{ 
                
        // 메뉴 닉네임 저장               
        var jsonId=JSON.stringify(id)
        localStorage.setItem('id', jsonId);
        location.href='main.html';  
        }
      })     

      $('#id, #password').keyup(function(){
        var textLength=$(this).val().length;
        if(textLength!=0){
            $(this).next('.message').remove();
        }      
      })
    
    //회원가입
    $('.loginBox .loginBtng a:first-child').click(function(){
        $('.login').fadeOut();       
        $('.loginPopup-area').fadeIn();
        $('.loginPopup-area .singUp').fadeIn();
    })
    //ID/PW찾기
    $('.loginBox .loginBtng a:last-child').click(function(){
        $('.login').fadeOut();
        $('.loginPopup-area .singUp').fadeOut();
        $('.loginPopup-area').fadeIn();
        $('.loginPopup-area .forgot-popup').fadeIn();
    })
    //공통닫기
    $('.loginPopup-area .fa-times').click(function(){
        $('.loginPopup-area').fadeOut();
        $('.login').fadeIn();
    })
    //ID/PW찾기 팝업
    //공통 팝업 없애기
    $('.popup-bg').click(function(){
        $('.loginsubPopup-area').fadeOut();
    })

    $('.forgot-popup .forgotId .bigButton').click(function(){
        //$(this).parents('.loginPopup-area').children('div').hide();
        $('.loginsubPopup-area').fadeIn();
        $('.loginsubPopup-area .forgotId-popup').fadeIn();
    })
    $('.forgotId-popup .midButton, .forgotPw-popup .midButton').click(function(){
        $('.loginsubPopup-area').fadeOut();
        $('.loginPopup-area').fadeOut();
        $('.login').fadeIn();
    })
    
    $('.forgot-popup .forgotdPw .bigButton').click(function(){
        //$(this).parents('.loginPopup-area').children('div').hide();
        $('.loginsubPopup-area').fadeIn();
        $('.loginsubPopup-area .forgotPw-popup').fadeIn();
    })

    //================================main===================================
    //nav ===================================================================
    // nav메뉴 보이기
    $('nav .mainMenu .fa-bars').click(function(){
        $('.nav-popup').fadeIn();
        $('.menu-popup').fadeIn();
        $('.nav-popupBg').fadeIn();
        var getId=localStorage.getItem('id');
        var objId=JSON.parse(getId);
        $('#nickName').text(objId); 
    })
    //nav메뉴 닫기
    $('.nav-popupBg').click(function(){
        $('.nav-popup').fadeOut();
    })    
    //서브메뉴 열고 닫기
    $('.menu-popup .menu .menuList a').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parent().next().slideUp();
        }else{           
            $('.menu-popup .menu .menuList a').removeClass();
            $('.menu-popup .menu .submenu').slideUp(); 
            $(this).addClass('active');
            $(this).parent().next().slideDown();
        };
    })
    //nav메뉴 안 팝업
    //공통 팝업 없애기
    $('.menu-subpopupBg').click(function(){
        $('.menu-subpopup .popup').fadeOut();
        $('.cameraPopup2').fadeOut();
        $('.code-popup').fadeOut();
        $(this).fadeOut();
    })
    
    //암호설정1
    $('.menu-popup .menu #codeSetting').click(function(){
        $('.code-popup').show();
        $('.codeSetting').show();
        $('.codeSetting-check').hide();

    })
    $('.codeSetting .fa-chevron-left').click(function(){
        $('.code-popup').hide();  
        $('.codeSetting').hide(); 
    })
    $('.codeSetting-check .fa-chevron-left').click(function(){       
        $('.code-popup').hide();
        $('.codeSetting-check').hide(); 
    })
   
    var numIndex1=-1;
    $('.codeSetting .btnNum button').click(function(){     
        if($(this).hasClass('delete')){           
            numIndex1--;
            //console.log(numIndex);            
            if(numIndex1 < -1){
                numIndex1=-1;
            }else{
                for(var i=3; i > numIndex1; i--){
                    $('.codeSetting .code li').eq(i).removeClass('active');                
                }
                $('.codeSetting .code li').eq(numIndex1).find('span').text(num).removeClass('active');
            }
        }else if($(this).hasClass('num')){
            var num = $(this).text();
            //console.log(num);            
            numIndex1++;            
            if(numIndex1 >= 4){
                numIndex1=3;
            }else{                
                for(var i=0; i <= numIndex1; i++){
                    $('.codeSetting .code li').eq(i).addClass('active');
                }               
                $('.codeSetting .code li').eq(numIndex1).find('span').text(num); 
                if(numIndex1==3){
                    $('.codeSetting .btnNum .confirm').text('확인');
                }else {
                    $('.codeSetting .btnNum .confirm').empty();
                }              
            }
        }else if($(this).hasClass('confirm') && numIndex1==3){
            var code1 =  $('.codeSetting .code li span').text();
            $('.codeSetting .code').val(code1)            
            $('.codeSetting').hide();
            $('.codeSetting-check').show();
        }
    });
    
    //암호설정2 (한번 더 입력) 
    var numIndex2=-1;
    $('.codeSetting-check .btnNum button').click(function(){     
        if($(this).hasClass('delete')){           
            numIndex2--;
            console.log(numIndex2);            
            if(numIndex2 < -1){
                numIndex2=-1;
            }else{
                for(var i=3; i > numIndex2; i--){
                    $('.codeSetting-check .code li').eq(i).removeClass('active');   
                }
                $('.codeSetting-check .code li').eq(numIndex2).find('span').text(num).removeClass('active');
            }
        }else if($(this).hasClass('num')){
            var num = $(this).text();
            console.log(num);            
            numIndex2++;            
            if(numIndex2 >= 4){
                numIndex2=3;
            }else{                
                for(var i=0; i <= numIndex2; i++){
                    $('.codeSetting-check .code li').eq(i).addClass('active');
                }               
                $('.codeSetting-check .code li').eq(numIndex2).find('span').text(num); 
                if(numIndex2==3){
                    $('.codeSetting-check .btnNum .confirm').text('확인');
                }else {
                    $('.codeSetting-check .btnNum .confirm').empty();
                }              
            }
        }else if($(this).hasClass('confirm') && numIndex2==3){
            var code2 = $('.codeSetting-check .code li span').text();  
            var code1 = $('.codeSetting .code').val()          
            console.log(code2, code1); 
            if(code2==code1){               
                $('.menu-subpopupBg').fadeIn();
                $('.codeCheckPopup').fadeIn();
            }else{
                $('.menu-subpopupBg').fadeIn();
                $('.codeCheckPopup2').fadeIn();          
            }           
        }
    });

    //암호설정 확인 팝업   
    $('.codeCheckPopup button').click(function(){        
        $('.menu-subpopup .popup').fadeOut();
        $('.menu-subpopupBg').fadeOut();
        $('.code-popup').fadeOut();
    })
 
    $('.codeCheckPopup2 button').click(function(){  
        $('.menu-subpopup .popup').fadeOut();
        $('.menu-subpopupBg').fadeOut();                
        location.reload();         
        // $('.nav-popup').show();
        // $('.menu-popup').show();
        // $('.nav-popupBg').show();
        //$('.code-popup').show();           
       //$('.codeSetting').fadeIn();      
    })

    //로그아웃
    $('.menu-popup .menu #logoutPop').click(function(){
        $('.menu-subpopupBg').fadeIn();
        $('.menu-subpopup .logoutPopup').fadeIn();
    })
    $('.menu-subpopup .logoutPopup button:first-child').click(function(){
        $('.menu-subpopupBg').fadeOut();
        $('.menu-subpopup .popup').fadeOut();
    })
    $('.menu-subpopup .logoutPopup button:last-child').click(function(){
        location.href='index.html';        
    })
    //카메라
    $('.menu-popup #camera').click(function(){
        $('.menu-subpopupBg').fadeIn();       
        $('.menu-subpopup .cameraPopup1').fadeIn();
    })
    $('.menu-subpopup .cameraPopup1 button:first-child').click(function(){
        $('.menu-subpopupBg').fadeOut();
        $('.menu-subpopup .popup').fadeOut();
    })
    $('.menu-subpopup .cameraPopup1 button:last-child').click(function(){
        $('.menu-subpopup .cameraPopup1').fadeOut();
        $('.cameraPopup2').fadeIn();
    })
    $('.cameraPopup2 button:last-child').click(function(){
        $('.menu-subpopupBg').fadeOut();
        $('.menu-subpopup .cameraPopup2').fadeOut();
    })

    //새 목표 추가 버튼 열기 // 새목표 페이지
    $('nav .mainMenu .fa-plus').click(function(){
        $('.nav-popup').fadeIn();
        $('.new-popup').fadeIn();
        $('.menu-popup').hide();
    })
    $('.new-popup .fa-chevron-left, .revision-popup .fa-chevron-left').click(function(){
        $('.nav-popup').fadeOut();
        $('.new-popup').fadeOut();
        $('.revision-popup').fadeOut();
    })
    $('.new-popup .tabArea .tab a').click(function(){
        $(this).parents('.tab').find('a').removeClass('on');
        $(this).addClass('on');

        var tabId=$(this).attr('href')
        $(tabId).parent().children('div').hide();
        $(tabId).show();
    })
    //슬라이더
    $('#widget').draggable();
    var handle = $( ".ui-slider-handle " );
        $( ".slider" ).slider({
            create: function() {
                handle.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                handle.text( ui.value );
            },
            min: 0,
            max: 50,
            value: 10,
            step: 5,
        });
    var text = $('.ui-slider-handle').text();
    //console.log(text);
        
    
    //새 목표 추가 버튼
        $('.new-popup .bigButton').click(function(){
            var goal = $('#goal').val();
            var reward = $('#reward').val();
            var rule1 = $('#rule1').val();
            var rule2 = $('#rule2').val();
            var rule3 = $('#rule3').val();
            var nickname = $('#nickName').text();
        
            var sliderStamp = Number($('.new-popup .ui-slider-handle').text());

            if($('.tabArea .tabA').hasClass('on')){
                swiper.appendSlide(`        
                    <div class="swiper-slide">
                        <div class="infoArea">
                            <div class="mainProgress">
                                <svg width="300" height="300">
                                    <circle class="bg" cx="50" cy="150" r="125" stroke-width="10" fill="#c0c0c0" opacity=".5" stroke-dasharray="0,300000" transform = " rotate(-90 100 100)"></circle>            
                                    <circle class="circle" cx="50" cy="150" r="110" stroke="#fdca6e" stroke-width="10" stroke-linecap="round" stroke-dasharray="0,300000" fill="#fff" transform = " rotate(-90 100 100)"/>
                                    <text x="150" y="170" text-anchor="middle" fill="#6d5ce8">
                                        <tspan class="rate">0</tspan>
                                        <tspan>%</tspan>
                                    </text>
                                </svg>
                            </div>
                            <div class="textBox">
                                <div class="wrap">
                                    <div class="title">
                                        <i class="icon icon-line"></i>  
                                        <p>목표</p> 
                                        <i class="icon icon-line"></i> 
                                    </div>
                                    <div class="infoGoal">
                                        <strong>${goal}</strong>
                                    </div>
                                </div>
                                <div class="wrap">
                                    <div class="title">
                                        <i class="icon icon-line"></i> 
                                        <p>보상</p> 
                                        <i class="icon icon-line"></i> 
                                    </div>
                                    <div class="infoGgoal">
                                        <strong>${reward}</strong>
                                    </div>
                                </div>
                                <div class="wrap">
                                    <div class="title">
                                        <i class="icon icon-line"></i>    
                                        <p>규칙</p> 
                                        <i class="icon icon-line"></i> 
                                    </div>
                                    <div class="infoGoal rule">
                                        <p>${rule1}</p>
                                        <p>${rule2}</p>
                                        <p>${rule3}</p>
                                    </div> 
                                </div>
                                <button><i class="fas fa-pen"><span class="blind">수정버튼</span></i></button>
                            </div>                
                        </div>   

                        <div class="menuArea">
                            <p><i class="icon icon-bigline"></i></p> 
                            <ul>
                                <li><button><i class="fas fa-share-alt"></i></button></li>
                                <li><button><i class="fas fa-user-plus"></i></button></li>
                                <li><button><i class="fas fa-bell-slash"></i></button></li>
                            </ul>
                            <p><i class="icon icon-bigline"></i></p> 
                        </div>        
                    
                        <ul class="personalProgress">
                            <li>
                                <a href="#">
                                    <i class="icon icon-img"><img src="" alt=""></i> 
                                    <h3 class="nickNmae">${nickname}</h3>
                                    <span class="result">0%</span>
                                    <div class="progress">
                                        <span class="bar"></span>
                                    </div>
                                    <p><i class="icon icon-bigline"></i></p> 
                                </a>
                                <div class="stampBox">
                                    <ul>                                    
                                    </ul>
                                    <p><i class="icon icon-bigline"></i></p> 
                                </div>
                            </li>                             
                        </ul>

                        <ul class="subMenu">
                            <li><a href="#" class="stampReset"><span>스템프 초기화</span><i class="fas fa-chevron-right"></i></a></li>
                            <li><a href="#" class="goalRemove"><span>목표 삭제</span><i class="fas fa-chevron-right"></i></a></li>
                        </ul> 

                    </div>`  
                )                

            }else{
                swiper.appendSlide(`        
                    <div class="swiper-slide">
                        <div class="infoArea">
                            <div class="mainProgress">
                                <svg width="300" height="300">
                                    <circle class="bg" cx="50" cy="150" r="125" stroke-width="10" fill="#c0c0c0" opacity=".5" stroke-dasharray="0,300000" transform = " rotate(-90 100 100)"></circle>            
                                    <circle class="circle" cx="50" cy="150" r="110" stroke="#fdca6e" stroke-width="10" stroke-linecap="round" stroke-dasharray="0,300000" fill="#fff" transform = " rotate(-90 100 100)"/>
                                    <text x="150" y="170" text-anchor="middle" fill="#6d5ce8">
                                        <tspan class="rate">0</tspan>
                                        <tspan>%</tspan>
                                    </text>
                                </svg>
                            </div>
                            <div class="textBox">
                                <div class="wrap">
                                    <div class="title">
                                        <i class="icon icon-line"></i>  
                                        <p>목표</p> 
                                        <i class="icon icon-line"></i> 
                                    </div>
                                    <div class="infoGoal">
                                        <strong>${goal}</strong>
                                    </div>
                                </div>
                                <div class="wrap">
                                    <div class="title">
                                        <i class="icon icon-line"></i> 
                                        <p>보상</p> 
                                        <i class="icon icon-line"></i> 
                                    </div>
                                    <div class="infoGgoal">
                                        <strong>${reward}</strong>
                                    </div>
                                </div>
                                <div class="wrap">
                                    <div class="title">
                                        <i class="icon icon-line"></i>    
                                        <p>규칙</p> 
                                        <i class="icon icon-line"></i> 
                                    </div>
                                    <div class="infoGoal rule">
                                        <p>${rule1}</p>
                                        <p>${rule2}</p>
                                        <p>${rule3}</p>
                                    </div> 
                                </div>
                                <button><i class="fas fa-pen"><span class="blind">수정버튼</span></i></button>
                            </div>                
                        </div>   

                        <div class="menuArea">
                            <p><i class="icon icon-bigline"></i></p> 
                            <ul>
                                <li><button><i class="fas fa-share-alt"></i></button></li>
                                <li><button><i class="fas fa-user-plus"></i></button></li>
                                <li><button><i class="fas fa-bell-slash"></i></button></li>
                            </ul>
                            <p><i class="icon icon-bigline"></i></p> 
                        </div>        

                        <ul class="subMenu">
                            <li><a href="#" class="stampReset"><span>스템프 초기화</span><i class="fas fa-chevron-right"></i></a></li>
                            <li><a href="#" class="goalRemove"><span>목표 삭제</span><i class="fas fa-chevron-right"></i></a></li>
                        </ul> 

                    </div>`  
                )                
            }   
             for (let index =0; index < sliderStamp; index++) {
                    $('.stampBox ul').append(
                    `<li><a href="#"><i class="icon icon-stamp"></i></a></li>`
                    )
                };
         
            $('.nav-popup').fadeOut()
            $('.new-popup').fadeOut();    
            // swiper.update()          
        })    
    //슬라이드 ====================================================================
    
    var swiper = new Swiper('.mainSwiper .swiper-container', {
        pagination: {
            el: '.mainSwiper .swiper-pagination',
            dynamicBullets: true,
          },
          loop: true,
          autoHeight: true,
    });
    swiper.on('slideChange',function(){    
        setTimeout(progress,500);                         
    })
 
    
    
    //메인 프로그래스 영역  
    function progress(){     
        var radius = $(".mainSwiper .swiper-slide-active").find(".circle").attr("r");
        var mainProgress_length;
        var circumference = (2*radius*22/7);
        $(".mainSwiper .swiper-slide-active").find(".circle").css("stroke-dasharray","0," + circumference);
        var percent=$(".mainSwiper .swiper-slide-active").find(".rate").text();
        $(".mainSwiper .swiper-slide-active").find(".rate").animate({
            Counter: percent
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                var rate = Math.ceil(now);
                mainProgress_length= parseInt(circumference * (rate/100));
                $(".mainSwiper .swiper-slide-active").find(".circle").css("stroke-dasharray",mainProgress_length+","+circumference);
                $(this).text(rate);   
                // console.log('퍼센트',$(this).text());                               
            }
        });
         
    } 
  
   
    // 스크롤 CSS변환
             
    $(window).scroll(function(){
        var scrollTop=$(this).scrollTop();
        if(scrollTop>50){
            $('.infoArea').addClass('scroll');
        }else{
            $('.infoArea').removeClass('scroll');
        }       
        // setTimeout(function(){
        //     var activeH=$('.swiper-slide-active').height();                     
        //     console.log(typeof activeH);            
        //     console.log(activeH, activeH+120);
        //     $('.swiper-wrapper').height(activeH+120);
        // },500)        
    });  
    $(window).scroll(function(){
        var scrollTop=$(this).scrollTop();
        //console.log(scrollTop);        
        $('.infoArea.scroll').css('top', scrollTop);
    }) ;

    //목표수정
    $('.textBox button').click(function(){
        $('.nav-popup').fadeIn();
        $('.revision-popup').fadeIn();

        var reGoal = $(this).parent().children().find('.goal strong').text();
        var reReward = $(this).parent().children().find('.reward strong').text();
        var reRule1 = $(this).parent().children().find('.rule p:nth-child(1)').text();
        var reRule2 = $(this).parent().children().find('.rule p:nth-child(2)').text();
        var reRule3 = $(this).parent().children().find('.rule p:nth-child(3)').text();
        var stamp = $(this).parents('.swiper-slide').find('.personalProgress li:first-child .stampBox li').length;
        var sliderWidth = (100*stamp)/50;
        
        $('.revision-popup .reGoal').val(reGoal);
        $('.revision-popup .reReward').val(reReward);
        $('.revision-popup .reRule1').val(reRule1);
        $('.revision-popup .reRule2').val(reRule2);
        $('.revision-popup .reRule3').val(reRule3);
        $('.revision-popup .ui-slider-handle').text(stamp);
        $('.revision-popup .ui-slider-handle').css('left',sliderWidth+'%')     
        
    })
 
    //첫페이지_새 목표 추가=========================================================
    $('.new a').click(function(){
        $('.nav-popup').fadeIn();
        $('.new-popup').fadeIn();
    })
    
    //프로그래스 영역================================================================
       
    //개인 프로그래스 바     
    function progressBar(){
        $('.personalProgress > li').each(function(){
            var stampOn = $(this).find('.on').length; 
            var stamp = $(this).find('.icon-stamp').length;
            var result = Math.round((100*stampOn)/stamp);
            $(this).find('.result').text(result+'%')           
            var persnalPercent = $(this).find('.result').text();            
                $(this).find('.progress .bar').stop(true).animate({           
                    width: persnalPercent                            
                },2000)
        })
    }
    progressBar();
    
    //스템프
    $('.stampBox li a').find('i').click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on');
        }     
        progressBar();
    })

    //스템프 보이기
    $('.personalProgress > li > a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideUp();
        }else{           
            $('.personalProgress li a').removeClass();
            $('.personalProgress .stampBox').slideUp(); 
            $(this).addClass('active');
            $(this).next().slideDown();
        };
        setTimeout(function(){
            var activeH=$('.swiper-slide-active').height();
            //console.log('wrapper높이', $('.swiper-wrapper').height());            
            //console.log('활성화된슬라이드높이',activeH);            
            $('.swiper-wrapper').height(activeH);
        },500)
    })  
    // 스템프 동적 생성
    // $('.personalProgress > li').on('click', 'a', function(e){
    //     e.preventDefault();
    //     if($(this).hasClass('active')){
    //         $(this).removeClass('active');
    //         $(this).next().slideUp();
    //     }else{           
    //         $('.personalProgress li a').removeClass();
    //         $('.personalProgress .stampBox').slideUp(); 
    //         $(this).addClass('active');
    //         $(this).next().slideDown();
    //     };
    // })


    // progress area popup =========================================================
    //페이지 안 중간 메뉴 팝업
    //공통 팝업 없애기
    $('.mainPopup-areaBg').click(function(){
        $('.mainPopup-area .popup').fadeOut();
        $(this).fadeOut();
    })
    //공유 팝업
    $('.menuArea .fa-share-alt').click(function(){
        $('.mainPopup-area .mainPopup-areaBg').fadeIn();
        $('.sharePopup').fadeIn()
        
    })
    //친구추가 팝업
    $('.menuArea .fa-user-plus').click(function(){
        $('.mainPopup-area .mainPopup-areaBg').fadeIn();
        $('.friendsAddPopup').fadeIn();
        $('.tab-info #tabS').fadeIn();
              
    })
    $('.friendsAddPopup .tabArea .tab a').click(function(){
        $(this).parents('.tab').find('a').removeClass('on');
        $(this).addClass('on');

        var friendsId=$(this).attr('href')

        $(friendsId).parent().children('div').hide();
        $(friendsId).show();
    })

    //알람 팝업
    $('.menuArea .fa-bell-slash').click(function(){
        $('.mainPopup-area .mainPopup-areaBg').fadeIn();
        $('.alramPopup').fadeIn();

        //시간 슬라이드       
        for (let  index = 1; index < 13; index++) {            
            if(index < 10){
                $('.hours .swiper-wrapper').append('<div class="swiper-slide"><p>'+ '0' + index +'</p></div>')
            }else{
                $('.hours .swiper-wrapper').append('<div class="swiper-slide"><p>'+ index +'</p></div>')
            }           
           // console.log(hours);            
        }
        
        for(let index = 1; index < 61; index++){           
            if(index < 10){
                $('.minutes .swiper-wrapper').append('<div class="swiper-slide"><p>'+ '0' + index +'</p></div>')
            }else{
                $('.minutes .swiper-wrapper').append('<div class="swiper-slide"><p>'+  index +'</p></div>')
            }           
            //console.log(minutes);
        }
       
        var swiper1 = new Swiper('.alramPopup .ampm .swiper-container', {
            direction: 'vertical',
            slidesPerView: 3,
            spaceBetween: 10, 
            centeredSlides:true, 
            slideToClickedSlide: true,
        });

        var swiper2 = new Swiper('.alramPopup .hours .swiper-container', {
            direction: 'vertical',
            loop: true,
            slidesPerView: 3,
            spaceBetween: 10, 
            centeredSlides:true, 
            slideToClickedSlide: true,
        });

        var swiper3 = new Swiper('.alramPopup .minutes .swiper-container', {
            direction: 'vertical',
            loop: true,
            slidesPerView: 3,
            spaceBetween: 10, 
            centeredSlides:true, 
            slideToClickedSlide: true,
        });

    })

    $('.alramPopup .week li').find('a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on');
        }
    })
    
    $('.alramPopup .alramSwitch input').change(function(e){
        e.preventDefault();      
          if($(this).prop('checked')){
            $('.menuArea ul li:last-child').find('i').removeClass('fa-bell-slash')
            $('.menuArea ul li:last-child').find('i').addClass('fa-bell')
            
          }else{
            $('.menuArea ul li:last-child').find('i').removeClass('fa-bell')
            $('.menuArea ul li:last-child').find('i').addClass('fa-bell-slash')
          };      
                 
      })
    
    //페이지 안 하단 (서브) 메뉴 팝업  
    //공통 팝업 없애기
    $('.personal-progressPopupBg').click(function(){
        $('.personal-progressPopup .popup').fadeOut();
        $(this).fadeOut();;
    })
    $('.personal-progressPopup .popupBtg button:last-child').click(function(){
        $('.personal-progressPopup .popup').fadeOut();
        $('.personal-progressPopupBg').fadeOut();

    })
    
     //스템프 초기화
    $('.subMenu .stampReset').click(function(e){  
        e.preventDefault();      
        $('.personal-progressPopupBg').fadeIn();
        $('.personal-progressPopup .reset').fadeIn();    
    })
   
    //목표삭제
    $('.subMenu .goalRemove').click(function(e){  
        e.preventDefault();             
        $('.personal-progressPopupBg').fadeIn();
        $('.personal-progressPopup .remove').fadeIn();
    })
    //목표 나가기  
    $('.subMenu .goalExit').click(function(e){
        e.preventDefault();
        $('.personal-progressPopupBg').fadeIn();
        $('.personal-progressPopup .eixt').fadeIn();        
    })




//=============================    
});