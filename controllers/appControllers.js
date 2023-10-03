const CricketInfo = require('../models/appMpdels')

const getInfo = async (req, res, next) => {
    try{
        const findInfo = await CricketInfo.find
    }
    catch(err){
        console.log(err)
    }
}

const postInfo = async (req, res, next) => {
    try{
        const data = await CricketInfo.craete(req.body)
        res.status(201).json({cricketerInfos : data})
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getInfo, postInfo}