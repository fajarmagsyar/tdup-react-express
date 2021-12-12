import data_tdup from "../models/TdupModel.js";

export const getAllTdup = async (req, res)=>{
    try{
        const tdup = await data_tdup.findAll();
        res.json(tdup);
    } catch(error){
        res.json({message: error.message});
    }
}
export const getTdupById = async (req, res)=>{
    try{
        const tdup = await data_tdup.findAll({
            where: {
                "tdup_id" : req.params.id
            }
        });
        res.json(tdup[0]);
    } catch(error){
        res.json({message: error.message});
    }
}
export const createTdup = async (req, res)=>{
    try{
        await data_tdup.create(req.body);
        res.json({
            "message": "masuk"
        });
    } catch(error){
        res.json({message: error.message});
    }
}
export const updateTdup = async (req, res)=>{
    try{
        await data_tdup.update(req.body, {
            where: {
                "tdup_id": req.params.id
            }
        });
        res.json({
            "message": "updated"
        });
    } catch(error){
        res.json({message: error.message});
    }
}
export const deleteTdup = async (req, res)=>{
    try{
        await data_tdup.destroy({
            where: {
                "tdup_id": req.params.id
            }
        });
        res.json({
            "message": "dihapus"
        });
    } catch(error){
        res.json({message: error.message});
    }
}