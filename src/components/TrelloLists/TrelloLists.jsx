import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TrelloList from './TrelloList';
import { useDispatch } from 'react-redux';
import { getList } from '../../store/listSlice.reducer';


const TrelloLists = () => {
   const listItem = useSelector(store => store.listSlice.list)
   const dispatch = useDispatch();
   const [isFormVisible, setIsFormVisible] = useState(false);
   const [inputVal, setInputVal] = useState("");

   const submitHandler = (e) => {
      e.preventDefault()
      const title = e.target.inputListId.value;
      dispatch(getList({ title }));
      setIsFormVisible(false);
      setInputVal('');
   };


   return (
      <div className='lists' >
         {listItem.map((list) => (
            <div key={list.id}>
               <TrelloList list={list} listItem={listItem} id={list.id} />
            </div>
         ))}
         <div >
            <div className='add-new-item '>
               <button onClick={() => setIsFormVisible(true)}>+ Add list</button>
               {isFormVisible &&
                  <form onSubmit={submitHandler}>
                     <input value={inputVal} name='inputListId' onChange={(e) => setInputVal(e.target.value)} />
                     <button onClick={() => setIsFormVisible(false)}>Cancel</button>
                     <button onSubmit={submitHandler}>Save</button>
                  </form>}
            </div>
         </div>
      </div >
   )
}

export default TrelloLists