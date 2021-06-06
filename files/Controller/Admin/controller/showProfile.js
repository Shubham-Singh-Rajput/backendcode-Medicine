import AllShoapkeper from './../../../Model/Schema/shopkeperProfile'
const profile={
    ShowProfile:async(req,resp)=>{
        let Shoapkeper= await AllShoapkeper.findOne({_id:req.ShoapkeperId})
        return resp.json({
            Shoapkeper
        })
    }
}
export default profile