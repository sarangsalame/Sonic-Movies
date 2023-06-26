import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
value:string
}
const initialState:InitialState = {
    value:""
}

const inputSlice = createSlice({
    name:"input",
    initialState,
    reducers:{
        setInput(state=initialState, action:PayloadAction<string>){
            state.value = action.payload
        }
    }
})
export const {setInput} = inputSlice.actions;
export default inputSlice.reducer