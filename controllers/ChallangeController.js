const ChallangeModel = require('../models/Challange')

class ChallangleController {
    static async create (req, cb) {
        try {
            const challange = await new ChallangeModel(req);
            cb.json(challange)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ChallangleController;