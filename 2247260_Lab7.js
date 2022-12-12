angular.module("Del",[])
.filter('strUpp',function(){
    return function( str ) {
      var revStr = str.split(' ');
      return revStr.map(function(wrd){return wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase();}).join(' ');
    }
 })

.controller("Delctrl",function($scope)
{
    var delivery_schedule=[
        {id:1,sender:'Lalitha', reciever :"Lalitha's Mom", distance:"14", content: 'Household Items',intructions:'Caution: Really Hot'},
        {id:2,sender:'Lolitha', reciever :"Lolitha's Sister", distance:"46",content: 'Other', intructions:'Fragile: Handle with care'},
        {id:3,sender:'Lilitha', reciever :"Lilitha's Dad", distance:'27',content: 'Medicines' ,intructions:'Do not expose to sun light'}
    ];
    
    $scope.fd=delivery_schedule;
    $scope.rowlimit=3;
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
      $scope.customStyle = {};
      
      $scope.fid = " ";  

      $scope.changeColorFilter = function (item){
       
         if (item.distance > 40) {
           item.class = 'High';
       }
       else if (item.distance < 20) {
           item.class = 'Low';
       }
       else {
           item.class = 'Medium';
       }
     
       return true;
        
      };
    });
