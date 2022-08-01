module.exports = (`
type Account {
    id: ID!
    account_number: String!
    account_balance: Number!
    deposit: Number
    withdraw: Number
}

type Query {
    getBalance(account_number: String!): Account
}

type Mutation {
    createAccount(account_number: String!, account_balance: Number!): Account
    deposit(account_number: String!, deposit!): Account
    withdraw(account_number: String!, withdraw!): Account
} 
`);