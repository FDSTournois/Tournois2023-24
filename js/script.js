document.addEventListener("DOMContentLoaded", 
      function (event){ 
           
        
              document.querySelector("#btt")
                      .addEventListener("blur", function(event){
                          
        
                         
          
                      
                        let screenWidth = window.innerWidth;
                         
                     
                                  if(screenWidth<769 ){
                         
                                   document.querySelector("#btt") .click();
                                      
                                  
                                      
                                     
                                     
                                      }

                          
                              
                              
                         
                          }); 

                            
                 
                              
       });
// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };
