import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { stat } from 'fs'

export interface CounterState {
    userDetails: any

}

const initialState: CounterState = {
    userDetails: {}
}

export const themeSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<any>) => {
            state.userDetails = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = themeSlice.actions

export default themeSlice.reducer