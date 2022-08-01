module.exports = (`
type Account {
    id: ID!
    account_number: String!
    account_balance: Int!
    deposit: Int
    withdraw: Int
}

type Query {
    getBalance(id: ID!): Account
}

type Mutation {
    createAccount(account_number: String!, account_balance: Int!): Account
    deposit(account_number: String!, deposit: Int!): Account
    withdraw(account_number: String!, withdraw: Int!): Account
} 
`);