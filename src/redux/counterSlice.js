import { createSlice } from "@reduxjs/toolkit"; 

const counterSlice = createSlice({
    name : 'counterApp',
    initialState:{
        value:0
    },
    reducers : {
        increment : (state,action)=>{

            console.log("Increment Clicked")
            state.value = state.value + action.payload
        },

        decrement : (state,action)=>{
            state.value = state.value - action.payload     // here in the decrement function we are passing a value in the input field as an argument to the decrement function and this is recied as action.
                                                          //  this action value is taken by using the payload, action.payload.
        },

        reset : (state)=>{
            state.value = 0;
        }
    }
})



export const {increment,decrement,reset}  =  counterSlice.actions;    //  object destructuring this is same as counterSlice.reducers.increment

export default counterSlice.reducer