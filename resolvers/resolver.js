const atm = require('../database/atm');

module.exports = {
    Query: {
        getBalance: (_, { id }) => atm.findById(id),
    },

    Mutation: {
        createAccount: (_, {account_number, account_balance}) => atm.create({ account_number, account_balance }),

        deposit: (_, {account_number, deposit}) => {
            atm.findOneAndUpdate(
                {"account_number": account_number},
                {"$inc": {account_balance: deposit}}
            ).exec((err, res) => {
                console.log('account', res)
            })
        },

        withdraw: (_, {account_number, withdraw}) => {
            atm.findOneAndUpdate(
                {"account_number": account_number},
                {"$inc": {account_balance: -withdraw}}
            ).exec((err, res) => {
                console.log('account', res)
            })
        }
    }
};