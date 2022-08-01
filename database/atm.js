const mongoose = require('mongoose');

const ATMSchema = new mongoose.Schema({
    account_number: String,
    account_balance: Number
});

module.exports = mongoose.model("Accounts", ATMSchema);