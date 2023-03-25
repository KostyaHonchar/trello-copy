import {createSlice} from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [
      {
        title: "Test List",
        id: "test id ",
        children: [
          {
            id: "test card id",
            title: "test card",
            parentId: "test id ",
          },
          {
            id: "test card id2",
            title: "test card2",
            parentId: "test id ",
          },
        ],
      },
    ],
  },
  reducers: {
    addList: (state, action) => {
      state.list = [...state.list,action.payload];
    },
    addCard: (state, action) => {
      state.list.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
    },
    addCardToChosenList: (state, action) => {
      const chosenList = state.list.filter((list) => list.id === action.payload.id);
      state.list = [...state.list, chosenList];
    },
    // editCard: (state, action) => {
    //   return state.list.map((card) => {
    //     console.log("action called", action);
    //     if (card.id === action.payload.id) {
    //       return {...card,title: action.payload.title};
    //     } else {
    //       return card;
    //     }
    //   });
    // },
    // edit
    // deleteCard: (state, action) => {
    //   const id = action.payload;
    //   state.cards = state.cards.filter((card) => card.id !== id);
    // },
    // deleteList: (state, action) => {
    //   const id = action.payload;
    //   state.cards = state.cards.filter((card) => card.listId !== id);
    // },
  },
});

export const {addList, addCard, addCardToChosenList} =
  listSlice.actions;
export default listSlice.reducer;
