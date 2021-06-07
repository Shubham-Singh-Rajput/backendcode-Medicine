import { TYPE } from './../../actionTypes/index';

const TYPECHECK={
    getType:(data)=>(dispatch)=>{
        dispatch({
            type:TYPE.getType,
            payload:data
        })
        return 
    },
    removeType:()=>(dispatch)=>{
        dispatch({
            type:TYPE.removeType
        })
    }
}
export default TYPECHECK