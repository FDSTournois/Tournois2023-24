document.addEventListener("DOMContentLoaded", 
      function (event){ 



          
           
        
              document.querySelector("#bell")
                      .addEventListener("click", function(event){

                           
           
(function(w, d) {
    w.PushEngage = w.PushEngage || [];
    w._peq = w._peq || [];

    // Check if the user is already subscribed
    if (Notification.permission === 'granted') {
        // User is already subscribed, show a message or take some other action
        console.log('You are already subscribed to notifications.');
        // You can show a message to the user or perform any other action here
    } else {
        // User is not subscribed, initialize PushEngage and display notification prompt
        PushEngage.push(['init', {
            appId: 'c4a2fd0e-b2bb-4edd-abb1-da49526d4b8a'
        }]);

        // Simulate click on notification button
        document.querySelector("#notifbutton2").click();
    }

    var e = d.createElement('script');
    if (e) {
        e.src = 'https://clientcdn.pushengage.com/sdks/pushengage-web-sdk.js';
        e.async = true;
        e.type = 'text/javascript';

        // Append PushEngage SDK script to the head of the document
        d.head.appendChild(e);
    }

    // Simulate click on close button (if needed)
    document.querySelector("#closebutton").click();
})(window, document);


                      

                          
                              
                              
                         
                          }); 

                            
                 
                              
       });
// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };
