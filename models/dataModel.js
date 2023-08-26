const mongoose = require('mongoose');

const nfcSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'You must have a type set as either merchant or charity'],
        unique: true,
        trim: true
    },
    id: {
        type: Number,
        required: [true, 'Your merchant or charity must have a id']
    },
    reward: {
        type: Number,
        required: [true, 'You must define a reward type that triggers what gets sent to client']
    },
    key: {
        type: String,
        required: [true, 'You must have a key that will identify the request']
    },
    target: {
        type: String,
        default: 'https://www.fanaverse.io/'
    },
    coupon: {
        type: String,
        default: 'glory23%$'
    },
    email: {
        type: Object,
        default: {
            from: '"Name👻" <rewards@myfana.com>',
            to: "team@myfana.com",
            subject: "Fana Merchant reward",
            text: "Brace yourself",
            html: "<b>Get Staret<b>"
        } 
    }
});

const NFC = mongoose.model('NFC', nfcSchema);

module.exports = NFC;