import {  Box, Text,VStack} from '@chakra-ui/react';
import React, {useState} from 'react'



function Card(props: { change: any; link: string ; title: string ; details: string}) {

  
  const [urlState,seUrlState] =useState(`${props.link}`)


  return (
    <VStack   bg="#FFFFFF"   minW="350px" h={[200, 300, 400]}
    borderRadius={10} boxShadow="md" 
    bgImage={`linear-gradient(rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.2)) ,url(${urlState})`}
    bgPosition="center" bgSize="fill" bgRepeat="no-repeat"
    position="relative"  
    onClick={()=>props.change(urlState)}
    >
      

     <Box  position="absolute"  bottom="10px" textTransform="uppercase">
     <Text size="14px" fontWeight="900" color="white">{props.title}</Text>
       <Text size="14px" fontWeight="500" color="white">Lorem ipsum dolor sit.</Text>
       
       <Text  size="18px" fontWeight="600">$2500</Text>
     </Box>
   </VStack>


  );
}

export default Card;