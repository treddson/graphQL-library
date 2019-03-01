const express = require("express");
const app = express();
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const PORT = 4000;

mongoose.connect('mongodb+srv://treddshort:Thomy522!!@cluster0-ptrro.mongodb.net/test?retryWrites=true');
mongoose.connection.once('open', () => {
    console.log('Connected to database');
}).on('error', function(error) {
    console.log('Connection error', error);
});



app.use('/graphql', graphqlHTTP({   
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`now listening for requests on port ${PORT}`);
});