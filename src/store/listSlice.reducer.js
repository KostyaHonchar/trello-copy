import {v4 as uuid} from "uuid";
import {createAsyncThunk, createSlice, createAction} from "@reduxjs/toolkit";

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
      const data = {id: uuid(), title, parentId, lastEdited: Date.now()};
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const getEditCard = createAsyncThunk(
  "listSlice/getEditCard",
  async ({id, title}) => {
    try {
      const data = {id, title, lastEdited: Date.now()};
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const getDeleteAllCards = createAction("listSlice/getDeleteAllCards");

export const dragAndDrop = createAsyncThunk("listSlice/dragAndDrop", ({listId,cardId}) => {
  const data = {listId, cardId};
  console.log(listId,'listId in action ');
  console.log(cardId,'cardId in action ');
  return data;
});

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
      currentList.children = [...currentList.children, payload];
    },
    [getEditCard.fulfilled]: (state, {payload}) => {
      const {id, title} = payload;
      state.list.forEach((list) => {
        list.children.forEach((card) => {
          if (card.id === id) {
            card.title = title;
          }
        });
      });
      // створити мепом новий масив, і переносити його в стейт як новий масив
      // TODO перенести в екшин!!!
    },
    [getDeleteAllCards]: (state, action) => {
      const {listId} = action.payload;
      const list = state.list.find((list) => list.id === listId);
      list.children = [];
    },
  },
});

export default listSlicer.reducer;
