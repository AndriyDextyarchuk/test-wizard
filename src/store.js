import {configureStore} from '@reduxjs/toolkit'
import {reducer} from './rootSlice.js'

export const store = configureStore({
    reducer
})