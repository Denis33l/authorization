import { Comment } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { commentsApi } from "../../app/services/comment";
import { RootState } from "../../app/store";

interface InitialState {
  comments: Comment[] | null;
}

const initialState: InitialState = {
  comments: null,
};

const slice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(commentsApi.endpoints.getAllComments.matchFulfilled, (state, action) => {
        state.comments = action.payload;
      })
  },
});

export default slice.reducer;

export const selectEmployees = (state: RootState) => state.comments;