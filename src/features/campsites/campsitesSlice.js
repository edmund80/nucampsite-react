import { createSlice } from '@reduxjs/toolkit'
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = {
    campsiteArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsitesSlice.reducer


export const selectALLCampsites = (state) => {
    return state.campsites.campsiteArray
}

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsiteArray.find(
        (campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsiteArray.find((campsite) => campsite.featured);
}