#!/usr/bin/env node
'use strict';


function main() {

console.log('fxn called');
   // Import filesystem
var fs = require('fs');

// Check if app directory exists, if not then create a new.
var app_dir = './app';
if (!fs.existsSync(app_dir)){
   fs.mkdirSync(app_dir);
} 


console.log(process.argv[2]);

if (process.argv[2] != null && process.argv[3] != null && process.argv[2] == 'make:controller' ) {
   require('./makeController');
}
else if(process.argv[2] != null  && process.argv[2] == 'make:auth' ){
   require('./makeAuthController');
}
else if(process.argv[2] != null  && (process.argv[2] == 'db:seed' || process.argv[2] == 'd:s' )){
   console.log('db seed called');
}
else if(process.argv[2] != null  && (process.argv[2] == 'route:list' || process.argv[2] == 'r:l' )){
   console.log('route list called');
}
else{
   if(process.argv[2] != "make:controller"){
      console.log('Please write correct command!');
   }
   if(process.argv[3] == null){
      console.log('Please enter Model/Contorller name at the end!');
   }
}
}

if (require.main === module) {
   main();
}
