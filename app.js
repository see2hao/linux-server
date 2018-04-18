const express = require( 'express' );
const path = require('path');

const app = express();

app.use( express.static(  __dirname+ '/public' ) );

console.log( path.resolve(__dirname, 'public') );

app.listen( 80,()=>{
    console.log( 'listening at 80 port' );
} );