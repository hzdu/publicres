$(document).ready(function(){
      if($(window).width()>768){
            //鼠标划过就展开子菜单
            $('ul.nav li.dropdown').hover(function() {
              $(this).find('.dropdown-menu').stop(true, true).slideDown();
            }, function() {
              $(this).find('.dropdown-menu').stop(true, true).slideUp();
            });
      }

      $("#search_btn").click(function(){
          $(".top_bg").slideToggle();
      });

      //scrollTop
      $(window).scroll(function(){
          var scrolls = $(window).scrollTop()
          if (scrolls > 160) {
            $("#top_nav").addClass("navbar-fixed-top")
          }else{
            $("#top_nav").removeClass("navbar-fixed-top")
          }
      });

      //菜单选中高亮
      var urlstr = location.href;  
      var urlstatus=false; 
      var urlnum = 1;
      $("#navbar a").each(function () {
        // console.log($(this).attr('href'));
        //  原来的代码没有判断是否为undefined，会导致浏览器报replace找不到的错误
        if($(this).attr('href')!=undefined){
            if ((urlstr + '/').indexOf($(this).attr('href').replace(/[\r\n ]/g,"")) > -1 && $(this).attr('href')!='' && urlnum != 1) {
              $(this).addClass('active'); urlstatus = true;
            }else {
              $(this).removeClass('active');
            }
        }
        urlnum++;
      });  
     if (!urlstatus) {$("#navbar a").eq(0).addClass('active'); }  

  
});