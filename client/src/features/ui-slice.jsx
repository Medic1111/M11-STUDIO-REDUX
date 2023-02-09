import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  isLoading: false,
  showAuth: false,
  showCart: false,
  showModal: false,
  showCheckout: false,
  showArtDetail: false,
  selectedArt: {},
  issue: new Date()
    .toLocaleString("default", {
      month: "long",
    })
    .toLowerCase(),
};

export const uiSlice = createSlice({
  name: "UI_SLICE",
  initialState: uiInitialState,
  reducers: {
    closeModal: (state, action) => {
      return (state = uiInitialState);
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setShowAuth: (state, action) => {
      state.showModal = true;
      state.showAuth = action.payload;
    },

    setShowCart: (state, action) => {
      state.showModal = true;
      state.showCart = true;
    },

    setShowCheckout: (state, action) => {
      state.showModal = true;
      state.showCheckout = true;
    },

    setShowArtDetail: (state, action) => {
      state.showModal = true;
      state.showArtDetail = action.payload;
    },

    setSelectedArt: (state, action) => {
      state.selectedArt = action.payload;
    },
    setIssue: (state, action) => {
      state.issue = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
