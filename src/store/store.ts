import {configureStore} from '@reduxjs/toolkit'
import inputSlice  from './slices/input'
import toggleSlice from './slices/toggle'
import apiSlice from './slices/apiSlice'
import fieldSlice from './slices/fieldSlice'

const store =configureStore({
    reducer:{
        searchInput:inputSlice,
        toggle:toggleSlice,
        movies:apiSlice,
        fields:fieldSlice
    }
})

export type RootStates = ReturnType<typeof store.getState>;
export default store