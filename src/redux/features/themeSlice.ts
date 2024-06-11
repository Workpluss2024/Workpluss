import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { stat } from 'fs'

import lightTheme from '../../assets/theme/lightTheme'
export interface CounterState {
    theme: any
}

const initialState: CounterState = {
    theme: lightTheme
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<any>) => {
            state.theme = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer