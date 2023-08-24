const { query } = require('express');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config()


const whitelist = ['1234', '4321']

    
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    
    const main = async () => {
        const info = await transporter.sendMail({
            from: '"Daniel 👻" <daniel@myfana.com>',
            to: "robin@myfana.com",
            subject: "Fana NFC Activation",
            text: "Brace yourself",
            html: "<b>Get Staret<b>"
        });
    
        console.log("Message sent: %s", info.messageId);
    }

//EXECUTE QUERY
exports.getNFCresource = async (req, res) => {
    
    try {
        const user = req.query.user;

        if(whitelist.includes(user)) {
            await main();
            return res.status(200).send('Email sent')
        } else {
            return res.status(403).send('Access restricted')
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};
