import AllUser from './../../../Model/Schema/userProfile'
const profile={
    ShowProfile:async(req,resp)=>{
        let currentUser= await AllUser.findOne({_id:req.userId})
        return resp.json({
            currentUser
        })
    }
}
export default profile