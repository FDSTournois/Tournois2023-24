

                           
           
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

        // Append PushEngage SDK script to the head of the document
        d.head.appendChild(e);
})(window, document);

(function() {

"use.strict"

    
angular.module("app",[])
    .controller("ctr", fctr);
fctr.$inject=["$scope"];
    


function fctr($scope){
    $scope.search =function (){
       

        if ( $scope.teamName===""){
         $scope.matches ="";
        }
        else{
             $scope.matches = matches;
            }

        
    };

    $scope.teamName="";
   
    
  

    

     matches=  [    {  
                       team1: "Inter FDS",
                       team2: "Los Galacticos",
                       date : " Jan 26 ",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                       phase:"Match 1"
                     
                       },
                    {  team1: "Ad Lucem",
                       team2: "TTF",
                       date : "Jan 26  ",
                       hours: "FT",
                       class1: "lost",
                       class2: "lost1",
                       goal1 : "0",
                       goal2 : "2",
                        phase:"Match 1"
                     
                       },
                      {  team1: "Barca",
                       team2: "Triad",
                       date : "Feb 02  ",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "1",
                       goal2 : "1",
                        phase:"Match 1"
                     
                       },
                       {  team1: "Starting Five",
                       team2: "Fc Excellence",
                       date : "Feb 02  ",
                       hours: "FT",
                       class1: "lost",
                       class2: "lost1",
                       goal1 : "0",
                       goal2 : "3",
                         phase:"Match 1"
                     
                       },
                {  team1: "Topo I",
                       team2: "Backup",
                       date : "Feb 02  ",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                         phase:"Match 1"
                     
                       },
                {  team1: "Black Boys",
                       team2: "Trip Nap Trip",
                       date : "Feb 02  ",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost",
                       goal1 : "3",
                       goal2 : "0",
                        phase:"Match 1"
                     
                       },
                 {  team1: "Los Galacticos",
                       team2: "Ad Lucem",
                       date : "Feb 03 ",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost",
                       goal1 : "7",
                       goal2 : "0",
                        phase:"Match 2"
                     
                       },
                
                 {  team1: "Triad",
                       team2: "Black Boys",
                       date : "Feb 16",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                        phase:"Match 2"
                     
                       },
                {  team1: "Roi du ballon",
                       team2: "Dan Bang",
                       date : "Feb 16",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "1",
                       goal2 : "1",
                       phase:"Match 1"
                     
                       },
                 {  team1: "Backup",
                       team2: "Starting Five",
                       date : "Feb 16",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost",
                       goal1 : "3",
                       goal2 : "1",
                        phase:"Match 2"
                     
                       },
                 {  team1: "Super Ainé",
                       team2: "FC Calma",
                       date : "Feb 20",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost",
                       goal1 : "2",
                       goal2 : "1",
                       phase:"Match 1"
                     
                       },
                 {   team1: "Barca",
                       team2: "Trip nap Trip",
                       date : "Feb 19",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "0",
                       goal2 : "0",
                        phase:"Match 2"
                     
                       },
                 {  team1: "TTF",
                       team2: "Inter FDS",
                       date : "Feb 17",
                       hours: "Forfait",
                       class1: "lost1",
                       class2: "lost",
                       goal1 : "3",
                       goal2 : "0",
                        phase:"Match 2"
                     
                       },
                 
                 {  team1: "Fc Excellence",
                       team2: "Topo I",
                       date : "Feb 23",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                   phase:"Match 2"
                     
                       },
               
                     
                 {   team1: "Roi du Ballon",
                       team2: "FC Calma",
                       date : "Feb 23",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost",
                       goal1 : "1",
                       goal2 : "0",
                        phase:"Match 2"
                     
                       },
                 
                 {  team1: "Ad Lucem",
                       team2: "Inter FDS",
                       date : "Feb 23",
                       hours: "Forfait",
                       class1: "lost",
                       class2: "lost1",
                       goal1 : "0",
                       goal2 : "3",
                        phase:"Match3"
                     
                       },
                 {   team1: "Dan Bang FC",
                       team2: "Super Ainé",
                       date : "Feb 23",
                       hours: "FT",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "1",
                       goal2 : "1",
                        phase:"Match 2"
                     
                       },
                
              
                
                 {   team1: "TTF",
                       team2: "Los Galacticos",
                       date : "Feb 26",
                       hours: "FT",
                       class1: "lost",
                       class2: "lost1",
                       goal1 : "0",
                       goal2 : "3",
                        phase:"Match 3"
                     
                       },
                 {      team1: "Backup",
                       team2: "Fc Excellence",
                       date : "March 1",
                       hours: "Reporté",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "",
                       goal2 : "",
                        phase:"Match 3"
                     
                       },
                 {   team1: "Black Boys",
                       team2: "Barca",
                       date : "March 1",
                       hours: "Reporté",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "",
                       goal2 : "",
                       phase:"Match 3"
                     
                       },
                    
                   
                 {   team1: "Topo I",
                       team2: "Starting Five",
                       date : "March 1",
                       hours: "Reporté",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "",
                       goal2 : "",
                         phase:"Match 3"
                     
                       },
                 {   team1: "Super Ainé",
                       team2: "Roi du ballon",
                       date : "March 5",
                       hours: "Reporté",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "",
                       goal2 : "",
                        phase:"Match 3"
                     
                       },
                
                {   team1: "Trip nap Trip",
                       team2: "Triad",
                       date : "March 1",
                       hours: "Reporté",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "",
                       goal2 : "",
                        phase:"Match 3"
                     
                       },
               
                  {   team1: "Fc Calma",
                       team2: "Dan bang FC",
                       date : "March 2",
                       hours: "Reporté",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "",
                       goal2 : "",
                        phase:"Match 3"
                     
                       },
                
                  { 
                       no:"24",
                       team1: "Los Galacticos",
                       team2: "2e Groupe B",
                       date : "",
                       hours: "",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "",
                       goal2 : "",
                        phase:"Match 4"
                     
                       },
                 { 
                       no:"25",
                       team1: "1er Groupe C",
                       team2: "2e Groupe D",
                       date : "",
                       hours: "",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "",
                       goal2 : "",
                        phase:"Match 4"
                     
                       },
                 { 
                       no:"26",
                       team1: "1er Groupe B",
                       team2: "INTER FDS",
                       date : "",
                       hours: "",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "",
                       goal2 : "",
                        phase:"Match 4"
                     
                       },
                 { 
                       no:"27",
                       team1: "1er Groupe D",
                       team2: "2e Groupe C",
                       date : "",
                       hours: "",
                       class1: "lost1",
                       class2: "lost1",
                       goal1 : "",
                       goal2 : "",
                        phase:"Match 4"
                     
                       }
                
                
                   
                   
                   
                   ];
                    

 $scope.matchesGroup = matches;


     $scope.buteurs = [

         { goal: "4",
            name: "Thanguy ST CYR",
            team: "Los GALACTICOS"},
          { goal: "3",
            name: "Emmanuel PIERRE",
            team: "Los GALACTICOS"},
          { goal: "2",
            name: "Berry Gerome",
            team: "Backup"},
         
         





         
     ];




    
}    







    
})();

