var fs = require('fs'),
    teamLookup = {};

(function(){

    var results;

    // read is still using this
    // Jasmine tests        

    results = {
      'El Entag Fc': "El Entag El Harby",      
      'Arsenal FC': "Arsenal",
      'Chel': "Chelsea"
    };

    teamLookup.setTeam = function(teamAlias, teamName) {

        results[teamAlias] = teamName;             
        
        fs.writeFile('data.js', data, function(err){
            if (err) {
                return console.log(err)
            } else {
                return 'Successfull added ' + teamName;
            }
        });              
        return 'Successfull added ' + teamName;
    };

    teamLookup.findTeam = function(teamAlias) {    
        fs.readFile('data.js', 'utf-8', function read(err, data){
            if (err) {
                return console.log(err)
            } else {
                console.log(data);
                // return true;
            }
        })  
        // return true  
        return results[teamAlias] || 'Cant find am ' + teamAlias;        
    };

    teamLookup.all = function() {        
        return results;        
    };

}());

console.log(teamLookup.findTeam('Chel'));

