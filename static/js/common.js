/*Swiper Banner*/
if($('.swiper-wrapper .swiper-slide').length<2){$('.swiper-pagination').hide()}
var mySwiper = new Swiper('.slider_banner',{
	effect: 'fade',
    speed: 1000,
	loop:true,
	autoplay: {
       delay: 3500,
       disableOnInteraction: false,
     },
	 pagination: {
       el: '.swiper-pagination',
       clickable: true,
    },
	navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
var swiper = new Swiper('.image-additional', {
		 slidesPerView: 3,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	  breakpoints: {
        768: {
          slidesPerView: 2
        },
        480: {
          slidesPerView: 1
        }
      }
    });
var swiper = new Swiper('.goods-may-like', {
	  slidesPerView: 4,
      spaceBetween:20,
	  breakpoints: {
        480: {
			slidesPerView:1,
			spaceBetween:0,
        },
        640: {
			slidesPerView:2,
        },
        768: {
			slidesPerView:3,
        }
      }
    });	
$('.head_nav li').each(function(){
		if($(this).find('ul').length>0){
		$(this).children('a').append("<b></b>")
	}
}) 
tabContainer('.tab-content-wrap','.tab-title','.tab-panel')
function hideMsgPop(){$('.inquiry-pop-bd').fadeOut('fast')}
	if($('body .inquiry-form-wrap').length>0){
		var webTop=$('body .inquiry-form-wrap').offset().top-80
		$('.product-btn-wrap .email,.company_subscribe .button,.side_content .side_list .email').click(function(){
			 $("html, body").animate({ scrollTop:webTop }, 1000);
			 $(".ad_prompt").show().delay(3000).hide(300);
			})
		}else{
			$('.product-btn-wrap .email,.company_subscribe .button,.side_content .side_list .email,.contact_email').click(function(){
				$('.inquiry-pop-bd').fadeIn('fast')
				})
			}
$('.inquiry-pop,.product-btn-wrap .email,.company_subscribe .button,.side_content .side_list .email,.contact_email').click(function(e) {e.stopPropagation();})
$(document).click(function() {hideMsgPop()})
function changeuRL(link){
	var curUrl=document.location.href; 
 	var oldUrl=window.location.host+'/';
 	var lgArr=['fr/','de/','pt/','es/','ru/','ko/','ar/','ga/','ja/','el/','tr/','it/','da/','ro/','id/','cs/','af/','sv/','pl/','eu/','ca/','eo/','hi/','lo/','sq/','am/','hy/','az/','be/','bn/','bs/','bg/','ceb/','ny/','co/','hr/','nl/','et/','tl/','fi/','fy/','gl/','ka/','gu/','ht/','ha/','haw/','iw/','hmn/','hu/','is/','ig/','jw/','kn/','kk/','km/','ku/','ky/','la/','lv/','lt/','lb/','mk/','mg/','ms/','ml/','mt/','mi/','mr/','mn/','my/','ne/','no/','ps/','fa/','pa/','sr/','st/','si/','sk/','sl/','so/','sm/','gd/','sn/','sd/','su/','sw/','tg/','ta/','te/','th/','uk/','ur/','uz/','vi/','cy/','xh/','yi/','yo/','zu/','zh-CN/','zh-TW/','zh/'];
	$.each(lgArr,function(i,lenItem){  
		var lgUrl=oldUrl.toString()+lenItem;
		if(curUrl.indexOf(lgUrl)!=-1){
			link.each(function(i){
				if(!$(this).parents().hasClass('language-flag')){
					var iLink;
					if($(this).prop('href')){
						iLink=$(this).prop('href');
					}
					if(String(iLink).indexOf(oldUrl)!=-1 &&  String(iLink).indexOf(lgUrl)==-1 && curUrl.indexOf(lgUrl)!=-1){
						var newLink=iLink.replace(oldUrl,lgUrl);
						$(this).attr('href',newLink);
					}
				}
			})
		}
	}); 
}
$(function(){
	changeuRL($('a'));
})
$(document).ready(function(){
		$('.change-language .change-language-cont').append("<div class='change-empty'>Untranslated</div>")
		$('.prisna-wp-translate-seo').append("<div class='lang-more'>More Language</div>")
		if($('body .prisna-wp-translate-seo').length>0 && $('.change-language .prisna-wp-translate-seo').length<1){
			$('.prisna-wp-translate-seo').appendTo('.change-language .change-language-cont')
			if($('.change-language .change-language-cont .prisna-wp-translate-seo li').length>0){
				$('.change-language .change-language-cont .change-empty').hide()
				$('.change-language .change-language-cont .prisna-wp-translate-seo li').each(function(index){
					if(index>35 ){
						$(this).addClass('lang-item lang-item-hide')
						$('.change-language-cont').find('.lang-more').fadeIn()
						}else{
							$('.change-language-cont').find('.lang-more').fadeOut()
							}
					})
					if($('.change-language-cont .lang-more').length>0){
						$('.change-language-cont .lang-more').click(function(){
							if($(this).parents('.change-language-cont').find('.prisna-wp-translate-seo li.lang-item').hasClass('lang-item-hide')){
								$(this).parents('.change-language-cont').find('.prisna-wp-translate-seo li.lang-item').removeClass('lang-item-hide')
								$(this).text('×')
								}else{
									$(this).parents('.change-language-cont').find('.prisna-wp-translate-seo li.lang-item').addClass('lang-item-hide')
									$(this).text('More Language')
									}
							})
						}
				}else{
					$('.change-language .change-language-cont .change-empty').fadeIn()
					}
			}
		})
var mHeadTop=$('.web_head').offset().top

    var $backToTopTxt="TOP", $backToTopEle = $('<span class="gotop"></span>').appendTo($("body"))

        .text($backToTopTxt).attr("title", $backToTopTxt).click(function() {

            $("html, body").animate({ scrollTop:0 }, 1000);
    }), $backToTopFun = function() {	

        var st = $(document).scrollTop(), winh = $(window).height();

        (st > mHeadTop)? $backToTopEle.fadeIn(): $backToTopEle.fadeOut();  		

        if (!window.XMLHttpRequest) {

            $backToTopEle.css("top", st + winh - 210); 
        }
    };
 $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun();});
  
//	var $nav = $('.web_head'), navTop = $nav.offset().top, navH = $nav.outerHeight(),winTop_1=0,winWidth=$(window).width(),winHeight=$(window).height(),spr=$('body').height()-$nav.height(), holder=jQuery('<div>');
//		$(window).on('scroll',function(){
//			var winTop_2 = $(window).scrollTop();
//			holder.css('height',navH);
//			
//			if(winTop_2>navTop && winWidth>980){
//				holder.show().insertBefore($nav);
//				$nav.addClass('fixed-nav');
//				$nav.parents('body').addClass('fixed-body');
//			}else{
//				holder.hide();
//				$nav.removeClass('fixed-nav');
//				$nav.parents('body').removeClass('fixed-body');
//			}
//			
//			if(winTop_2>winTop_1 && winWidth>980){
//				$nav.removeClass('fixed-nav-appear');
//			}else if(winTop_2<winTop_1){
//				$nav.addClass('fixed-nav-appear');
//			}
//			winTop_1 = $(window).scrollTop();
//		})   
$('.faq-item').each(function(index){
		var _this=$(this)
		var title=_this.find('.faq-title')
		var cont=_this.find('.faq-cont')
		if(index==0){
			title.addClass('show-title')
			}
		title.on('click',function(){
			if(cont.is(':hidden') && !$(this).hasClass('show-title')){
				cont.slideDown('fast')
				$(this).addClass('show-title')
				_this.siblings().find('.faq-title').removeClass('show-title')
				_this.siblings().find('.faq-cont').slideUp('fast')
				}
				else{
					cont.slideUp('fast')
					$(this).removeClass('show-title')
					}
			})
		}) 
    function mSizeChange()
    {
        if (window.innerWidth)
            winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
        if (window.innerHeight)
            winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
        if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
        {
            winHeight = document.documentElement.clientHeight;
            winWidth = document.documentElement.clientWidth;
        }
        if(winWidth<=950){
            if($('.mobile-head-items').length<1){
                var mobileService='<div class="mobile-head-items"><div class="mobile-head-item mobile-head-nav"><div class="title"></div><div class="main-content-wrap side-content-wrap"><div class="content-wrap"></div></div></div><div class="mobile-head-item mobile-head-language"><div class="title"></div><div class="main-content-wrap side-content-wrap"><div class="content-wrap"></div></div></div><div class="mobile-head-item mobile-head-search"><div class="title"></div><div class="main-content-wrap middle-content-wrap"><div class="content-wrap"></div></div></div>'
                $('body').append(mobileService)
                if($('body .aside').length>0){
                    $('.mobile-head-items').append('<div class="mobile-head-item mobile-head-aside"><div class="title"></div><div class="main-content-wrap side-content-wrap"><div class="content-wrap"></div></div></div>')
                }
                $('.mobile-head-item').each(function(){
                    $(this).find('.title').click(function(){
                        if($(this).parents('.mobile-head-item').find('.main-content-wrap').length>0){
                            var pItem=$(this).parents('.mobile-head-item')
                            if(!pItem.find('.main-content-wrap').hasClass('show-content-wrap')){
                                pItem.find('.main-content-wrap').addClass('show-content-wrap')
                                pItem.find('.side-content-wrap').stop().animate({'left':'0'},300)
                                pItem.find('.middle-content-wrap').addClass('middle-show-content-wrap')
                                pItem.find('.side-content-wrap').append("<b class='mobile-ico-close'></b>")
                                pItem.siblings('.mobile-head-item').find('.main-content-wrap').removeClass('show-content-wrap')
                                pItem.siblings('.mobile-head-item').find('.side-content-wrap').stop().animate({'left':'-70%'},300)
                                pItem.siblings('.mobile-head-item').find('.middle-content-wrap').removeClass('middle-show-content-wrap')
                                pItem.siblings('.mobile-head-item').find('.side-content-wrap .mobile-ico-close').remove()
                                if($('.mobile-head-items').find('.mobile-body-mask').length<1){
                                    $('.mobile-head-items').append('<div class="mobile-body-mask"></div>')
                                }
                            }
                            else{
                                pItem.find('.main-content-wrap').removeClass('show-content-wrap')
                                pItem.find('.side-content-wrap').stop().animate({'left':'-70%'},300)
                                pItem.find('.middle-content-wrap').removeClass('middle-show-content-wrap')
                                pItem.find('.side-content-wrap .mobile-ico-close').remove()
                            }
                            $('.mobile-body-mask').click(function(){
                                $('.mobile-body-mask').remove()
                                $('.mobile-head-item .main-content-wrap').removeClass('show-content-wrap')
                                $('.mobile-head-item .side-content-wrap').animate({'left':'-70%'},300)
                                $('.mobile-head-item .middle-content-wrap').removeClass('middle-show-content-wrap')
                                $('.mobile-head-item .side-content-wrap .mobile-ico-close').remove()
                            })
                            $('.mobile-ico-close').click(function(){
                                $('.mobile-body-mask').remove()
                                $('.mobile-head-item .main-content-wrap').removeClass('show-content-wrap')
                                $('.mobile-head-item .side-content-wrap').stop().animate({'left':'-70%'},300)
                                $('.mobile-head-item .middle-content-wrap').removeClass('middle-show-content-wrap')
                                $('.mobile-head-item .side-content-wrap .mobile-ico-close').remove()
                            })
                        }
                    })
                })
                $('.change-currency ').clone().appendTo('.mobile-head-item.mobile-head-currency .main-content-wrap .content-wrap')
                $('.change-language .change-language-cont').clone().appendTo('.mobile-head-item.mobile-head-language .main-content-wrap .content-wrap')
                $('.nav_wrap .head_nav').clone().appendTo('.mobile-head-item.mobile-head-nav .main-content-wrap .content-wrap')
                $('.head-search').clone().appendTo('.mobile-head-item.mobile-head-search .main-content-wrap .content-wrap')
				$('.head_sns').clone().appendTo('.mobile-head-item.mobile-head-social .main-content-wrap .content-wrap')
                $('.aside .aside-wrap').clone().appendTo('.mobile-head-item.mobile-head-aside .main-content-wrap .content-wrap')
            }
        }
        //mobile end
        else {
            $(document).ready(function(){
            $('.mobile-body-mask,.mobile-head-items,.mobile-head-items,.mobile-nav-items,.mobile-cart-items,.mobile-tab-items').remove()
            });
	 $(document).ready(function(){

	$('.items_content').each(function(){
		  if($(this).find('li').length>1){

		/* $(".items_content").jCarouselLite({
			 btnPrev: ".btn-prev",
			 btnNext: ".btn-next",
			 speed:100,
			 auto:false,
			 scroll:1,
			 visible:5,
			 vertical:true,
			 circular:false,
			 onMouse:true
		  });*/
		  }

   })
	})
        } 
    }
$(function(){mSizeChange();})
$(window).resize(function() {mSizeChange()});

//jCarouselLite
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,onMouse: false,auto:null,speed:500,easing:null,vertical:false,circular:true,visible:4,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;var TimeID=0;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"",float:o.vertical?"none":"left"});ul.css({position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.outerHeight()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if (o.auto)		TimeID=setInterval(function(){	go(curr + o.scroll);},o.auto+o.speed);if(o.onMouse){ul.bind("mouseover",function(){if(o.auto){clearInterval(TimeID);}}),ul.bind("mouseout",function(){if(o.auto){TimeID=setInterval(function(){go(curr+o.scroll);},o.auto+o.speed);}})}function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
/*side*/
$(function(){
$('.side-widget .side-cate li').each(function(){
		if($(this).find('ul').length>0){
			$(this).append("<span class='icon-cate icon-cate-down'></span>")
			$(this).children('.icon-cate').click(function(e){
							if($(this).parent('li').children('ul').is(':hidden')){
								$(this).parent('li').children('ul').slideDown(100);
									$(this).removeClass('icon-cate-down').addClass('icon-cate-up');
								}else{
									$(this).parent('li').children('ul').slideUp(100);
									$(this).removeClass('icon-cate-up').addClass('icon-cate-down');
									}
									e.stopPropagation();
							})
			}
		})
	
		if($('.side-widget .side-cate .nav-current').parents('ul').length>0 && $('.side-widget .side-cate .nav-current').find('ul').length>0) {
		$('.side-widget .side-cate .nav-current').parents('ul').show()
		$('.side-widget .side-cate .nav-current').parents('li').addClass("show_li")
		$('.side-widget .side-cate .nav-current').parents('li.show_li').children('.icon-cate').removeClass('icon-cate-down').addClass('icon-cate-up')
		$('.side-widget .side-cate .nav-current').children('ul').show()
		$('.side-widget .side-cate .nav-current ').children('.icon-cate').removeClass('icon-cate-down').addClass('icon-cate-up');
		}
		 else if($('.side-widget .side-cate .nav-current').parents('ul').length>0 && $('.side-widget .side-cate .nav-current').find('ul').length<1){
			 $('.side-widget .side-cate .nav-current').parents('ul').show()
			 $('.side-widget .side-cate .nav-current').parents('li').addClass("show_li")
			 $('.side-widget .side-cate .nav-current').parents('li.show_li').children('.icon-cate').removeClass('icon-cate-down').addClass('icon-cate-up')
			}
		 else if($('.side-widget .side-cate .nav-current').parents('ul').length<1 && $('.side-widget .side-cate .nav-current').find('ul').length>0){
			$('.side-widget .side-cate .nav-current').children('ul').show()
			$('.side-widget .side-cate .nav-current').children('.icon-cate').removeClass('icon-cate-down').addClass('icon-cate-up');
			}
})
/*tabContainer*/
function tabContainer(container,title,panel){$(container).each(function(){$(this).find(title).each(function(){if($(this).hasClass('current')){j=$(this).index();$(this).parents(container).find(panel).eq(j).removeClass('disabled')}$(this).click(function(){i=$(this).index();$(this).addClass('current').siblings().removeClass('current');$(this).parents(container).find(panel).eq(i).show();$(this).parents(container).find(panel).not($(this).parents(container).find(panel).eq(i)).hide();})})})}
/*--------------------head-search---------------------*/
$(function(){
	
$('.search-toggle').on('click',function(){
	var HdSearch = $(this).parents(".head-search");
	if(HdSearch.hasClass('head-search-show')){
		HdSearch.removeClass('head-search-show');
		$(this).prop('title','点击');
	}
		else{
		HdSearch.addClass('head-search-show');	
		$(this).prop('title','关闭');
			}
	})
$('.head-search').on('click',function(e){
 								 		e.stopPropagation();
 							 	})
		 	$(document).on('click',function(){
								 			$('.head-search').removeClass('head-search-show');
								 			$('.head-search .search-toggle').prop('title','');
					})
	
	})

$(function() { $("#scrollsidebar").fix({float : 'right',durationTime : 400 });}); 
$('.business_right .events li').on('click',function(){
	$(this).addClass('current').siblings("li").removeClass('current')
	var i=$(this).index()
	$(this).parents('.index_business').find('.business_middle .tab_content').eq(i).addClass('current').siblings(".tab_content").removeClass('current')
})
$('table').each(function(){
		 if(!$(this).parent().hasClass('table_wrap')){
			 	$(this).wrap("<div class='table_wrap'><//div>")
			 }
		 })
		 
		 
 
	
 