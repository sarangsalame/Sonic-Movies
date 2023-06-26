import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieSchema } from "../../interfaces/apiInterface";

interface InitialState {
  movieList: MovieSchema[];
}

const initialState: InitialState = {
  movieList: [],
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setMovieList(state, action: PayloadAction<MovieSchema[]>) {
      state.movieList = action.payload;
    },
  },
});

export const { setMovieList } = apiSlice.actions;
export default apiSlice.reducer;
