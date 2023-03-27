import {v4 as uuid} from "uuid";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: uuid(),
      title: "Test List1",
      children: [
        {
          id: uuid(),
          title: "test card",
        },
        {
          id: uuid(),
          title: "test card2",
        },
      ],
    },
  ],
};

export const getList = createAsyncThunk(
  "listSlice/getList",
  async ({title}) => {
    try {
      const data = {id: uuid(), title, children: []};
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const getCard = createAsyncThunk(
  "listSlice/getCard",
  async ({title, parentId}) => {
    try {
      const data = {id: uuid(), title, parentId};
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const listSlicer = createSlice({
  name: "listSlice",
  initialState,
  extraReducers: {
    [getList.fulfilled]: (state, {payload}) => {
      state.list = [...state.list, payload];
    },
    [getCard.fulfilled]: (state, {payload}) => {
      const currentList = state.list.find(
        (list) => list.id === payload.parentId
      );
      console.log(currentList.children);
      currentList.children = [...currentList.children, payload];
    },
  },
});

// export const {errorsSummarizeCleaner} = analyticsSlice.actions;

export default listSlicer.reducer;
