# Look-Up

[![npm](https://img.shields.io/npm/v/look_up_dictionary.svg)]()

A Node.js module that allows you to store alias:name values.

Use Node FS module to create a JSON Dictionary file in you project.

## Installation  

`npm i look_up_dictionary`

You will then need to create your dictionary file, this will hold all your alias:name data

In you project folder in the root directory (where your app.js file lives) run

`touch look_up_dictionary.json`

## Usage  

Require the module in the usual Node way.

`var lookup = require('look_up_dictionary');`

You can then add entries to the dictionary.

`lookup.set('Liverpool football club','Liverpool)`

You can query the dictionary.

`lookup.find('Liverpool football club')`

Which will return the string 'Liverpool'.

