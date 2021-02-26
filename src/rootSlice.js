import {createSlice} from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        contacts: {email: "", password: "", passwordConfirm: ''},
        address: {country: '', city: '', address:''},
        categories: {category1: 'art', category2: 'culture', category3: 'entertainment'},
        path: './'
    },
    reducers: {
        postContacts: (state, action) => {state.contacts = action.payload},
        postAddress: (state, action) => {state.address = action.payload},
        postCategories: (state, action) => {state.categories = action.payload},
    }
})

export const reducer = rootSlice.reducer;

export const {postContacts, postAddress, postCategories, setPath} = rootSlice.actions 