var fs = require('fs'),
    teamLookup = {},
    data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

(function(){

    var read = function(){        
        return data;        
    }

    teamLookup.setTeam = function(teamAlias, teamName) {
        var dataUpdate;
        data[teamAlias] = teamName;
        dataUpdate = JSON.stringify(data);
        fs.writeFileSync('data.json', dataUpdate, 'utf-8');
        return 'Successfull added ' + teamName;
    };

    teamLookup.findTeam = function(teamAlias) {            
        return data[teamAlias] || 'Cant find am ' + teamAlias;        
    };
    
    teamLookup.all = function() {        
        return read();    
    };

}());

console.log(teamLookup.all());
console.log(teamLookup.findTeam('West Ham United'));
console.log(teamLookup.setTeam('A', 'Bc'));
