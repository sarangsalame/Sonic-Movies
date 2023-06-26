import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
filed:string
}
const initialState:InitialState = {
    filed:"movie"
}

const fieldSlice = createSlice({
    name:"api",
    initialState,
    reducers:{
        setFields(state=initialState, action:PayloadAction<string>){
            state.filed = action.payload
        }
    }
})
export const {setFields} = fieldSlice.actions;
export default fieldSlice.reducer