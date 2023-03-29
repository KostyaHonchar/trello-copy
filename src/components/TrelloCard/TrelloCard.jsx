import React, { useState } from 'react'
import "./card.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import moment from "moment/moment";
import { getEditCard } from '../../store/listSlice.reducer';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const TrelloCard = ({ cardText, id, parentId }) => {
   const dispatch = useDispatch();
   const [newTitle, setNewTitle] = useState(cardText.title);
   const [isFormVisible, setIsFormVisible] = useState(false);
   const lastEditedTime = moment(cardText.lastEdited).startOf('minute').fromNow();


   const [{ isDragging }, drag] = useDrag(() => ({
      type: 'card',
      item: { id, parentId },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   }))
   const opacity = isDragging ? 0.5 : 1;

   const handleEditCard = () => {
      setIsFormVisible(false)
   };

   const editCard = (e) => {
      e.preventDefault()
      dispatch(getEditCard({ id, title: newTitle }));
      setIsFormVisible(false)
   }
   return (
      <Card className='list-item' ref={drag} style={{ opacity }} >
         <CardContent >
            {cardText.title}
            <button onClick={() => setIsFormVisible(true)} style={{ marginLeft: "5px" }} ><ModeEditIcon fontSize='small' className='edit-button' /></button>

            {isFormVisible &&
               <form >
                  <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                  <button onClick={handleEditCard}>Cancel</button>
                  <button onClick={editCard}>Save</button>
               </form>}
            <p className='date-edit'>Last Edited:{lastEditedTime}</p>
         </CardContent>
      </Card>
   )
}

export default TrelloCard


