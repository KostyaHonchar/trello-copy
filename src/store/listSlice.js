// import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuid } from "uuid";


// const listSlice = createSlice({
//   name: "listSlice",
//   initialState: {
//     list: [
//       {
//         id: uuid(),
//         title: "Test List1",
//         children: [
//           {
//             id: uuid(),
//             title: "test card",
//           },
//           {
//             id: uuid(),
//             title: "test card2",
//           },
//         ],
//       },
//     ],
//   },
//   reducers: {
//     addList: (state, action) => {
//       state.list = [...state.list, action.payload];
//     },
//     addCard: (state, action) => {
//       state.list.forEach((item) => {
//         if (item.id === action.payload.parentId) {
//           if (Object.hasOwn(item, "children")) {
//             item.children.push(action.payload);
//           } else {
//             item.children = [];
//             item.children.push(action.payload);
//           }
//         }
//       });
//     },
//     deleteCardFromParentList: (state, {payload}) => {
//       console.log(action,'3 дія')
//       const chosenList = state.list.filter(
//         (list) => list.id === payload.parentId
//       );
//       // const newList = chosenList[0].children.filter(
//       //   (card) => card.id !== payload.id
//       // );
//       // chosenList[0].children = [...newList];
//     },
//     addCardToChosenList: (state, action) => {
//       const chosenList = state.list.filter(
//         (list) => list.id === action.payload.id
//       );
//       state.list = [...state.list, chosenList];
//     },
//     // editCard: (state, action) => {
//     //   return state.list.map((card) => {
//     //     console.log("action called", action);
//     //     if (card.id === action.payload.id) {
//     //       return {...card,title: action.payload.title};
//     //     } else {
//     //       return card;
//     //     }
//     //   });
//     // },
//     // edit
//     // deleteCard: (state, action) => {
//     //   const id = action.payload;
//     //   state.cards = state.cards.filter((card) => card.id !== id);
//     // },
//     // deleteList: (state, action) => {
//     //   const id = action.payload;
//     //   state.cards = state.cards.filter((card) => card.listId !== id);
//     // },
//   },
// });

// export const {addList, addCard, addCardToChosenList, deleteCardFromParentList} =
//   listSlice.actions;
// export default listSlice.reducer;
