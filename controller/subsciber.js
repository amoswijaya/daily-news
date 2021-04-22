
const {Subscriber} = require('../models')


module.exports = class SubcriberControllers {
    static async addSubscriber(req, res) {
        try {
            const result =  await Subscriber.create({Email:req.body.email})
            res.status(201).json(result)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async checkEmail(req, res) {
        console.log(req.query);
        try {
            const result = await Subscriber.findOne({where:{Email:req.query.email}})
            if(result) {
                res.send({
                    result: "yes"
                })
            }else {
                res.send({
                    result:"no"
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    static async unSubs (req, res) {
        try {
            const result = await Subscriber.destroy({where:{Email: req.query.email}})
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}