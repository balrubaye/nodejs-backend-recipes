const express =require('express');
const graphQLHTTP = require('express-graphql');
const schema =require('./schema');

const app= express();

app.use(graphQLHTTP({
    schema,
    graphiql:true
}));

let port= 4445
app.listen(port, ()=>{
    console.log(`listenning ...${port}`);
})