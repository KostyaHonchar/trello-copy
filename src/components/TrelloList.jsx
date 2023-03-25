import React, { useState } from 'react';
import TrelloCard from './TrelloCard';
import AddNew from '../utils/AddNew';
import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { addCardToChosenList } from '../store/listSlice';
import { useDispatch } from 'react-redux';



const TrelloList = () => {
   const listItem = useSelector(store => store.listSlice.list)
   const dispatch = useDispatch();

   



   return (
      <div className='lists' >
         {listItem.map((list) =>
            <div key={list.id} >
               <div className='list-element' ref={drop} >{list.title}
                  {list?.children?.length > 0 && list.children.map((children) =>
                     <TrelloCard
                        key={children.id}
                        cardText={children}
                        id={children.id}
                     />
                  )}
                  <div>
                     <AddNew type="card" parentId={list.id} />
                  </div>
               </div>
            </div>
         )
         }
         <div >
            <AddNew />
         </div>
      </div >
   )
}




export default TrelloList