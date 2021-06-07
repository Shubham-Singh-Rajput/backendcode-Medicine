import {TOKEN} from './../../actionTypes'
const VALIDATION={
    createToken:(data)=>(dispatch)=>{
        dispatch({
            type:TOKEN.createdToken,
            payload:data
        })
        return 
    },
    removeToken:()=>(dispatch)=>{
        dispatch({
            type:TOKEN.removeToke
        })
        return 
    }
}
export default VALIDATION