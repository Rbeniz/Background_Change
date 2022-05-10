

import { Button, Flex, Heading, Stack, Text, Image, useBreakpointValue, Box, HStack, border } from "@chakra-ui/react";
import "./App.css";
import Card from "./Card/Card";
import React, { useState } from 'react'
import dataSlider from "./Card/dataCards";

function App() {


  const [pdpState, setPdpState] = useState("https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")

  function changePdp(url: string) {
    console.log("clicked");
    setPdpState(url);

  }

  return (
    <>

      <Stack minH={'100vh'}
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)) ,url(${pdpState})`}
        bgPosition="center" bgSize="cover" bgRepeat="no-repeat"
      >







        <Stack spacing={6} maxW={'100vw'} paddingLeft={'40px'} paddingTop={'40px'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>

            <Text
              as={'span'}
              position={'relative'}
              color={'white'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'crimson',
                zIndex: -1,
              }}>
              Discover
            </Text>

            <br />

            <Text color={'blue.400'} as={'span'}>
              New Horizons
            </Text>

          </Heading>

          <HStack w={'100vw'} position={'relative'} left={'-40px'} >
            <Box className="blur" ></Box>

            <HStack w={'100vw'} overflow="scroll" maxW="100vw" spacing='40px' className="carousselle">

              <Box w={'40px'}></Box>

              do {
                Array.from({ length: 10 }).map((item, index) => {
                  return (
                    <Card
                      link={`/Imgs/img${index + 1}.jpg  `}
                      change={changePdp}
                      title={dataSlider[0].title}
                      details={dataSlider[0].details}
                    />
                  );
                })

              } while (pdpState);

              <Box w={'40px'} ></Box>

            </HStack>

            <Box className="blur" position={'absolute'} right={'0px'}></Box>
          </HStack>

          <HStack p={6}>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={"white"}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, odio?
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={"white"}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, porro.
            </Text>

          </HStack>



          <Stack direction={{ base: 'column', md: 'row' }} spacing={5} >
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button>
            {/* <Button
              rounded={'full'}
              bg={'white'}
              border='2px'
              borderColor='blue.500'
              color={'blue.500'}
              
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button> */}
            <Button rounded={'full'} color='white' colorScheme={'white'} variant='outline' paddingRight={'20px'}>How It Works</Button>
          
            <Box w={'70%'} h={'2px'} bg={'white'} position={'relative'} top={'15px'} left={'10px'} ></Box>
          </Stack>



        </Stack>






        {/* <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
        </Flex> */}

       

      </Stack>


    </>

  );
}

export default App;