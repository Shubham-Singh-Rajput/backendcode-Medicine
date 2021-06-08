import { ALLMEDICINE } from "../actionTypes"


const initialState=[]
const Allmedicine=(state,action)=>{
    state=state||initialState
    switch(action.type){
        case ALLMEDICINE.addallMedicineHome:
            return [...action.payload]
        case ALLMEDICINE.removeAllMedicineHome:
            return []
        default:
            return state
    }
}
export default Allmedicine