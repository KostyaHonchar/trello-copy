import React, { useState } from 'react';
import { addList, addCard } from '../store/listSlice';
import { useDispatch } from 'react-redux';


const AddNew = ({ type, parentId }) => {
  const [inputVal, setInputVal] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (type) {
      dispatch(addCard({ id: Math.random(), title: inputVal, parentId: parentId }));
    } else {
      dispatch(addList({ id: Math.random(), title: inputVal }));
    }
    hideForm();
    setInputVal('');
  };

  const updateInput = (e) => {
    setInputVal(e.target.value)
  };
  const openForm = () => {
    setIsFormVisible(true);
  }
  const hideForm = () => {
    setIsFormVisible(false);
  }

  return (
    <div className='add-new-item '>
      <button onClick={openForm} >+ Add{type ? " a card" : " another list"}</button>
      {isFormVisible &&
        <form onSubmit={submitHandler}>
          <input value={inputVal} onChange={updateInput} />
          <button onClick={hideForm}>Cancel</button>
          <button onSubmit={submitHandler}>Save</button>
        </form>}
    </div>
  )
}

export default AddNew