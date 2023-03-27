import React, { useState } from "react";
import { deleteCardFromParentList } from "../../store/listSlice";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import TrelloCard from "../TrelloCard/TrelloCard";
import { getCard } from "../../store/listSlice.reducer";


const TrelloList = ({ list, listItem, id }) => {
   const dispatch = useDispatch();
   const [isFormVisible, setIsFormVisible] = useState(false);
   const [inputVal, setInputVal] = useState("");

   const [{ isOver }, drop] = useDrop(() => ({
      accept: 'card',
      drop: (item) => addCardToList(item),
      collect: (monitor) => {
         return ({
            isOver: monitor.isOver(),
         })
      },
   }));
   const submitHandler = (e) => {
      e.preventDefault()
      const title = e.target.inputCardId.value;
      dispatch(getCard({ title, parentId: id }));
      setIsFormVisible(false);
      setInputVal('');
   };
   const addCardToList = (item) => {
      console.log(item, '1 дія')
      const listOfCards = listItem.filter((card) => item.id === card.id)
      // отримуємо пустий масив
      // хоч і приходить обєкт у функцію
      console.log(listOfCards, '2 дія')
      dispatch(deleteCardFromParentList({
         ...item.card,
      }));
   }

   return (
      <>
         <div key={list.id} ref={drop}>
            <div className="list-element">
               <div>
                  {list.title}
                  {list?.children?.length > 0 && list.children.map((children) =>
                     <TrelloCard
                        key={children.id}
                        cardText={children}
                        id={children.id}
                     />
                  )}
                  <div>
                     <div className='add-new-item '>
                        <button onClick={() => setIsFormVisible(true)}>+ Add card</button>
                        {isFormVisible &&
                           <form onSubmit={submitHandler}>
                              <input value={inputVal} name='inputCardId' onChange={(e) => setInputVal(e.target.value)} />
                              <button onClick={() => setIsFormVisible(false)}>Cancel</button>
                              <button onSubmit={submitHandler}>Save</button>
                           </form>}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default TrelloList