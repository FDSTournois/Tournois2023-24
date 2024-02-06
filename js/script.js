document.addEventListener("DOMContentLoaded", 
      function (event){ 
           
        
              document.querySelector("#bell")
                      .addEventListener("click", function(event){

                          


                          if (Notification.permission ==="denied"){

                               document.querySelector("#notifbutton").click();


                              }
                                else if (Notification.permission ==="granted"){

                               document.querySelector("#notifbutton2").click();


                              }
                          else{
                              
        
           
(function(w, d) {
  w.PushEngage = w.PushEngage || [];
  w._peq = w._peq || [];
  PushEngage.push(['init', {
      appId: 'c4a2fd0e-b2bb-4edd-abb1-da49526d4b8a'
  }]);

  var e = d.createElement('script');

  e.src = 'https://clientcdn.pushengage.com/sdks/pushengage-web-sdk.js';
  e.async = true;
  e.type = 'text/javascript';
  d.head.appendChild(e);
})(window, document);

                      
}
                          
                              
                              
                         
                          }); 

                            
                 
                              
       });
// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };
