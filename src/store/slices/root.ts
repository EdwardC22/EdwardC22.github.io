import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type SectionName = "about-me" | "home" | "projects";
interface AppState {
  scrolled: boolean;
  activeSection: SectionName;
  appearance: "light" | "dark" | "system";
}

const initialState: AppState = {
  activeSection: "home",
  scrolled: false,
  appearance: "system"
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setActiveSectionName: (state, action: PayloadAction<SectionName>) => {
      state.activeSection = action.payload;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.scrolled = action.payload;
    },
    setAppearance: (
      state,
      action: PayloadAction<"light" | "dark" | "system">
    ) => {
      state.appearance = action.payload;
    }
  }
});

export const {
  setActiveSectionName,
  setScrolled,
  setAppearance
} = rootSlice.actions;

export default rootSlice.reducer;
