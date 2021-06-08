import { SINGLEADMINMEDICINE } from "../../actionTypes"

const SingleAdminMedicine={
    AddMedicines:(data)=>(dispatch)=>{
        return dispatch({
            type:SINGLEADMINMEDICINE.updatemedicine,
            payload:data
        })
    },
    deletemedicine:()=>(dispatch)=>{
        return dispatch({
            type:SINGLEADMINMEDICINE.removemedicine
        })
    }
}
export default SingleAdminMedicine