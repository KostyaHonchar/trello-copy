import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const EditCard = ({ obj }) => {
   const listObjs = useSelector(store => store.listSlice.list)
   const [newText, setNewText] = useState();
   const [isEditing, setIsEditing] = useState(false);
   const dispatch = useDispatch();

   
   

   
   
   const submitEdit = (e) => {
      e.preventDefault();
      
      console.log(listObjs)
      dispatch(editCard({ id: obj.id, title: newText }))
      hideForm();
   }
   const updateInput = (e) => {
      setNewText(e.target.value)
   };
   const openForm = () => {
      setIsEditing(true);
   }
   const hideForm = () => {
      setNewText('');
      setIsEditing(false);
   }


   return (
      <div >
         <button onClick={openForm} >Edit card</button>
         {isEditing &&
            <div>
               <textarea value={newText}
                  onChange={updateInput} />
               <button onClick={submitEdit}>Save</button>
               <button onClick={hideForm}>Cancel</button>
               <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>}
      </div>
   )
}

export default EditCard