const model = require('../Model/model')

post_data = async(req, res) => {

    try {
        const Cource = {
            name:req.body.name,
            company:req.body.company,
            countery:req.body.countery,
            Avalilability:req.body.Avalilability,
            Description:req.body.Description
        }
        console.log(Cource);

        const insertData = await model.Lounchpad_detail.insertMany(Cource)
        res.json({
            message: 'New post Added',
            data: insertData
        })
    } catch (err) {
        console.log(err);
        res.json({
            message: 'post is not inserted sucessfully',
            error: err

        })
    }
}


getAllpost = async(req, res) => {
    try {
        const AllCourse = await model.Lounchpad_detail.find({})
        res.send({
            message: 'All post!',
            user: AllCourse
        })
    } catch (err) {
        res.send({
            message: 'post Data Not Found!',
            error: err
        })
    }
}


const getById=async(req,res)=>{
    try{
        const id=req.params.id
        const result =await model.Lounchpad_detail.findById(id)
        res.send(result)
    }catch(err){
        res.send(err)
    }

}

module.exports = { post_data ,getAllpost,getById}