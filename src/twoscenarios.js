var jsDiff = require("diff");
function myApi(){};
myApi.prototype = {
twoscenarios:function(drill,user){
       var str="";       
 
       this.missingwordscenariotest=function(){       
	var diff = jsDiff.diffWords(drill, user);      
            diff.forEach(function(part){
            if(part.removed){
                str+=part.value;
            }  
            });              
       return str;
    };

    this.addedwordscenariotest=function(){ 
        str="";       
	    var diff1 = jsDiff.diffWords(drill, user);
            diff1.forEach(function(part){
            if(part.added){
                str+=part.value;
            }  
            });              
       return str;
    };    
}        
}
module.exports=new myApi();