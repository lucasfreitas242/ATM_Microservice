const { createServer } = require('@graphql-yoga/node');
const resolvers = require('./resolvers');
const schema = require('./schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_ATM', {
    useNewUrlParser: true,
})