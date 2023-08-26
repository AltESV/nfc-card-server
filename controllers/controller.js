const { query } = require('express');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const NFC = require('../models/dataModel')
dotenv.config()

const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });


exports.getNFCresource = async (req, res) => {
    try {
        const { type, reward, key } = req.query;
        const entry = await NFC.findOne({ type, reward: Number(reward), key});
        if (!entry) {
            return res.status(403).send('Access denied');
        }
        switch (reward) {
            case '1': 
            return res.redirect(entry.target);

            case '2': 
            const { from, to, subject, text, html } = entry.email;
            await transporter.sendMail({from, to, subject, text, html});
            return res.status(200).send('Email sent')
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};