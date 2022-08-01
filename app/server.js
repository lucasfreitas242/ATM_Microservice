const { createServer } = require('@graphql-yoga/node');
const resolvers = require('../resolvers/resolver');
const schema = require('../schemas/schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_ATM', {
    useNewUrlParser: true,
});

const server = new createServer({
    schema: {
        typeDefs: schema,
        resolvers
    },
});

server.start();