import { ALLMEDICINE } from "../../actionTypes"

const AllMedicines={
    showMedicine:(data)=>(dispatch)=>{
        dispatch({
            type:ALLMEDICINE.addallMedicineHome,
            payload:data
        })
    },
    removeMedicine:()=>(dispatch)=>{
        dispatch({
            type:ALLMEDICINE.removeAllMedicineHome
        })
    }
}
export default AllMedicines