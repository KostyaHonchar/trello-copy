import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';

const TrelloCard = ({ cardText, id }) => {
   

   const [{ isDragging }, drag] = useDrag(() => ({
      type: 'card',
      item: { id },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   }))

   


   const opacity = isDragging ? 0.5 : 1;

   return (
      <Card className='list-item' ref={drag} style={{ opacity }} >
         <CardContent >
            <Typography>
               {cardText.title}
            </Typography>
         </CardContent>
      </Card>
   )
}

export default TrelloCard


