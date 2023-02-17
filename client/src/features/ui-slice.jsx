import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  isLoading: false,
  showAuth: false,
  showCart: false,
  showModal: false,
  showCheckout: false,
  showArtDetail: false,
  showOtherExpo: false,
  showAccount: false,
  selectedArt: {},
  showPrevious: false,
  showSpoiler: false,
  showChangePassword: false,
  showDeleteAccount: false,
  showSupport: false,
  roomId: null,
  issueToShow: new Date()
    .toLocaleString("default", {
      month: "long",
    })
    .toLowerCase(),
  issue: new Date()
    .toLocaleString("default", {
      month: "long",
    })
    .toLowerCase(),
};

// RERENDER:

export const uiSlice = createSlice({
  name: "UI_SLICE",
  initialState: uiInitialState,
  reducers: {
    closeModal: (state, action) => {
      return (state = uiInitialState);
    },
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setShowPrevious: (state, action) => {
      state.showPrevious = true;
    },
    setShowSpoiler: (state, action) => {
      state.showSpoiler = true;
    },
    setShowOtherExpo: (state, action) => {
      state.showModal = true;
      state.showOtherExpo = action.payload;
    },
    setShowAccount: (state, action) => {
      state.showModal = true;
      state.showAccount = action.payload;
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
      state.showCart = false;
      state.showCheckout = true;
    },

    setShowArtDetail: (state, action) => {
      state.showModal = true;
      state.showArtDetail = action.payload;
    },

    setSelectedArt: (state, action) => {
      state.selectedArt = action.payload;
    },
    setIssueToShow: (state, action) => {
      state.issueToShow = action.payload;
    },
    setShowDeleteAccount: (state, action) => {
      state.showSupport = false;
      state.showChangePassword = false;
      state.showDeleteAccount = true;
    },
    setShowChangePassword: (state, action) => {
      state.showSupport = false;
      state.showDeleteAccount = false;
      state.showChangePassword = true;
    },
    setShowSupport: (state) => {
      state.showDeleteAccount = false;
      state.showChangePassword = false;
      state.showSupport = true;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
