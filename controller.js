const { query } = require('express');
// const APIFeatures = require('../utils/apiFeatures')


//EXECUTE QUERY
exports.getNFCresource = async (req, res) => {
    
    const whitelist = ['1234', '4321']
    
    try {
        const user = req.query.user;

        if(whitelist.includes(user)) {
            return res.redirect('https://fanaverse.io')
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
