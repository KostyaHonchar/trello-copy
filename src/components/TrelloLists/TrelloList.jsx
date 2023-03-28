import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import TrelloCard from "../TrelloCard/TrelloCard";
import { getCard } from "../../store/listSlice.reducer";
import { getDeleteAllCards } from "../../store/listSlice.reducer";
import { dragAndDrop } from "../../store/listSlice.reducer";
import DeleteIcon from '@mui/icons-material/Delete';


const TrelloList = ({ list, listItem, id }) => {
   const dispatch = useDispatch();
   const [isFormVisible, setIsFormVisible] = useState(false);
   const [inputVal, setInputVal] = useState("");

   const [{ isOver }, drop] = useDrop(() => ({
      accept: 'card',
      drop: (item, monitor) => {
         
         addCardToList(item, monitor)
      },
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

   const deleteCards = () => {
      const listId = list.id;
      dispatch(getDeleteAllCards({ listId }))
   }

   const addCardToList = (item,monitor) => {
      // console.log(item, '1 дія')
      console.log(monitor, '1 дія')
      
      dispatch(dragAndDrop({ listId: list.id, cardId: item.id }));
      // отримуємо пустий масив
      // хоч і приходить id у обєкті у функцію
   }


   return (
      <>
         <div key={list.id} ref={drop}>
            <div className="list-element">
               <div>
                  {list.title}
                  <button onClick={deleteCards}><DeleteIcon fontSize="small" /></button>
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