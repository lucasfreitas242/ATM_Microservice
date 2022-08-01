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
                console.log('test', res)
            })
        }
    }
};