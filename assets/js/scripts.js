var blockProcess=true;jQuery(window).on('load',function(){"use strict";setTimeout(function(){$("#page-loader").addClass("hide-this");$('#cycle').cycle("goto","0");setTimeout(function(){$(".hero .background-content.page-enter-animated").addClass("show");setTimeout(function(){$(".hero .front-content.page-enter-animated").addClass("show");setTimeout(function(){blockProcess=false;$(".grcs_bullet_nav").addClass("init")},1000)},600);$(".social-icons li a").tooltip({container:'body',delay:{"show":150,"hide":0}})},200)},600)});$(document).ready(function(){"use strict";function overlaySystem(sectionContainerPT,sectionsPT,frontpagePT,frontpageContainerPT){var sectionContainer=$(sectionContainerPT),sections=$(sectionContainerPT+">"+sectionsPT),clickedSectionIndex=0,bulletNavEvent=false,upBtn=$(".go-up"),downBtn=$(".go-down"),frontpage=$(frontpagePT),frontpageContainer=$(frontpageContainerPT),amountOfSections=sections.length,currentSection=0,currentSectionSelector;function hideFrontPage(){frontpageContainer.children().css("transition","all 1000ms 500ms");frontpage.addClass("overlay-active");frontpage.removeClass("show");frontpage.find("div.controls").removeClass("show");$('#cycle').cycle('pause')}function showFrontPage(){frontpageContainer.children().css("transition","all 800ms 200ms");frontpage.removeClass("overlay-active");frontpage.addClass("show");if(option_hero_background_mode==="youtube"){setTimeout(function(){frontpage.find("div.controls").addClass("show")},200)}setTimeout(function(){$('#cycle').cycle('resume')},1400)}function nextOverlay(){if(currentSection==amountOfSections||blockProcess===true){return false}blockProcess=true;if(currentSection===0){hideFrontPage();setTimeout(function(){sectionContainer.addClass("open")},200)}if(bulletNavEvent==false){currentSection=currentSection+1}else{currentSection=clickedSectionIndex;bulletNavEvent=false}sections.removeClass("active");currentSectionSelector=sections.eq((currentSection-1));$(".social-icons li a").tooltip('hide');setTimeout(function(){currentSectionSelector.addClass("active");updateBulletNav();setTimeout(function(){upBtn.addClass("active");setTimeout(function(){blockProcess=false},800)},400)},1000)}function prevOverlay(){if(currentSection===0||blockProcess===true){return false}blockProcess=true;if(bulletNavEvent==false){currentSection=currentSection-1}else{currentSection=clickedSectionIndex;bulletNavEvent=false}sections.removeClass("active");currentSectionSelector=sections.eq((currentSection-1));setTimeout(function(){currentSectionSelector.addClass("active");updateBulletNav();setTimeout(function(){blockProcess=false},800)},800);if(currentSection===0){upBtn.removeClass("active");setTimeout(function(){showFrontPage();sectionContainer.removeClass("open")},800)}}function updateBulletNav(){if(option_overlay_bullet_navigation==="on"&&!$(".hero").hasClass("error-404")){$(".grcs_bullet_nav .nav_dots").removeClass("active");$(".grcs_bullet_nav .nav_dots").eq(currentSection).addClass("active")}}function clickBulletNav(){$('.grcs_bullet_nav .nav_dots').click(function(){clickedSectionIndex=$('.grcs_bullet_nav .nav_dots').index(this);if(clickedSectionIndex!=currentSection){if(clickedSectionIndex<currentSection){bulletNavEvent=true;prevOverlay()}else{bulletNavEvent=true;nextOverlay()}}})}function createBulletNav(){$("body").append('<div class="grcs_bullet_nav"></div>');for(var i=0;i<(amountOfSections+1);i+=1){$(".grcs_bullet_nav").append('<div class="nav_dots"></div>')}updateBulletNav();clickBulletNav()}if(option_overlay_bullet_navigation==="on"&&!$(".hero").hasClass("error-404")){createBulletNav()}downBtn.click(function(){nextOverlay()});upBtn.click(function(){prevOverlay()});$('html').on('DOMMouseScroll mousewheel',function(e){var theEvent=e.originalEvent.wheelDelta||e.originalEvent.detail*-1;if(theEvent/120<0){nextOverlay()}});$('html').on('DOMMouseScroll mousewheel',function(e){var theEvent=e.originalEvent.wheelDelta||e.originalEvent.detail*-1;if(theEvent/120>0){prevOverlay()}});$(document).keydown(function(e){switch(e.which){case 37:break;case 38:prevOverlay();break;case 39:break;case 40:nextOverlay();break;default:return;}e.preventDefault()});if(option_overlay_skin=="white"){$("body").addClass("white")}switch(option_overlay_animation){case 'fade':sectionContainer.addClass("fade-In");break;case 'slide':sectionContainer.addClass("slide-from-bottom");break;default:sectionContainer.addClass("fade-In");break}switch(option_overlay_content_animation){case 'fade':sections.addClass("fade-In");break;case 'slide':sections.addClass("slide-from-bottom");break;default:sections.addClass("slide-from-bottom");break}}overlaySystem("#overlay","section.overlay","#hero .front-content","#hero .front-content .container-mid")});if(option_analytics_tracking=="on"){var _gaq=_gaq||[];function loadtracking(){window._gaq.push(['_setAccount',option_analytics_tracking_id]);window._gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s)})()}loadtracking()}