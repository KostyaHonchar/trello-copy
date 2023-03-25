import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { useDrag } from 'react-dnd';
import EditCard from '../utils/EditCard';
import { useSelector } from 'react-redux';


const TrelloCard = ({ cardText, id }) => {
   const [{ isDragging }, drag] = useDrag(() => ({
      type: 'card',
      item: { id },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   }));
   
   const [{ isOver, collectedProps, canDrop }, drop] = useDrop(() => ({
      accept: 'card',
      drop: (item) => addCardToList(item.id),
      collect: (monitor) => ({
         isOver: monitor.isOver(),
         collectedProps: monitor.getDropResult(),
         canDrop: monitor.canDrop()
      }),
   }));


   const addCardToList = (id) => {
      // const listOfCards = listItem.children.filter((card) => id === card.id)
      console.log(isOver)
      console.log(collectedProps)
      console.log(canDrop)
      // dispatch(addCardToChosenList({id:id}))
   }
   
   
   const opacity = isDragging ? 0.5 : 1;

   return (
      <Card className='list-item' ref={drag}  style={{ opacity }}>
         <CardContent >
            <Typography>
               {cardText.title}
            </Typography>
            <EditCard obj={cardText} />
         </CardContent>
      </Card>
   )
}

export default TrelloCard


