import { createSlice } from "@reduxjs/toolkit"
import { ICartInitialState } from "./cart.types"

const  initialState: ICartInitialState ={
    items: []
}
// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers:{
//         addToCart:(state,action)=>{
//             const isExist = state.items.some(
//                 item => item.size == action.payload.size
//             )
//             if(!isExist)
//             state.items.push({...action.payload,id:state.items.length})
//         },
//         removeFromCart:(state,action <{
//             id:number
//         }>) =>{
//             state.items = state.items.fil
//         }
        
//     }
// })