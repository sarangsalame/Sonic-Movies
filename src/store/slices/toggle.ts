import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
search:boolean
}
const initialState:InitialState = {
    search:false
}

const toggleSlice = createSlice({
    name:"toggle",
    initialState,
    reducers:{
        setSearch(state=initialState, action:PayloadAction<string>){
            if(action.payload!==""){
                state.search = !state.search
            }
        }
    }
})
export const {setSearch} = toggleSlice.actions;
export default toggleSlice.reducer