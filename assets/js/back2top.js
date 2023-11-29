$(document).ready(function(){ 
   $(window).scroll(function(){ 
       if ($(this).scrollTop() > 100) { 
           $('#back2top').fadeIn(); 
       } else { 
           $('#back2top').fadeOut(); 
       } 
   }); 
   $('#back2top').click(function(){ 
       $("html, body").animate({ scrollTop: 0 }, 600); 
       return false; 
   }); 
});