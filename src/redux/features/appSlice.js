import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { stat } from 'fs'


const initialState = {
    userDetails: {}
}

export const appSlice = createSlice( {
    name: 'app',
    initialState,
    reducers: {
        setUserDetails: ( state, action ) => {
            state.userDetails = action.payload
        },
    },
} )

// Action creators are generated for each case reducer function
export const { setUserDetails } = appSlice.actions

export default appSlice.reducer