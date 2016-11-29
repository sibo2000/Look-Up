var fs = require('fs'),
    lookUp = {};

(function(){

    var data = JSON.parse(fs.readFileSync('look_up_dictionary.json', 'utf-8')),
        read = function(){
            return data;
        };

    lookUp.set = function(alias, name) {
        var dataUpdate;
        data[alias] = name;
        dataUpdate = JSON.stringify(data);
        fs.writeFileSync('look_up_dictionary.json', dataUpdate, 'utf-8');
        return 'Successfull added ' + name;
    };

    lookUp.find = function(alias) {
        return data[alias] || 'Cant find am ' + alias;
    };

    lookUp.all = function() {
        return read();
    };

}());
