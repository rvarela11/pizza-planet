// Express
const express = require('express');

// CORS
const cors = require('cors');

// GraphQL
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const PORT = process.env.PORT || 4000;

app.use('*', cors({
    credentials: true
}));
app.use('/graphql', graphqlHTTP({
    schema, graphiql: true
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
