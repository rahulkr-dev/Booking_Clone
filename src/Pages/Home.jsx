import React from 'react'
import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, Input, Text, Image } from "@chakra-ui/react"
import TextInsideImage from '../Components/TextInsideImage'
import Footer from '../Components/Footer'
import HomeSectionCard1 from '../Components/HomeSectionCard1';
import HomeSectionCard2 from '../Components/HomeSection2';

export const Home = () => {
  return (
    <div >
      <Box h="280px" bg="#003580" >
        <Flex className="home-top-tag" >
          <div>Stays</div>
          <div>Flights</div>
          <div>Car Rentals</div>
          <div>Attractions</div>
          <div>Airport Taxis</div>
        </Flex>
        <Box m=" 0 10.3rem">
          <Box>
            <Heading textAlign='left' m="3rem 0 15px 3px" color='white' fontWeight='bold' size="3xl" >
              Find your next stay
            </Heading>
            <Heading textAlign='left' m="15px 0 15px 3px" color='white' fontSize="22px" fontWeight='normal' >
              Search low prices on hotels,home and much more ...
            </Heading>
          </Box>
          <Box mt="3rem" w="full" pos="relative">
            <Flex border="3px solid #ECC94B" w='full' bg='white' zIndex='1' pos='absolute' bottom='-4.2rem'>
              <Input h="3.2rem" w="38%" color='white' border='2px solid yellow' placeholder='Where are you going' />
              <Input
                w="22%"
                color='white'
                fontWeight='bold'
                h="3.2rem"
                placeholder='Check in  -  Check out'
              />
              <Input h="3.2rem" w="30%" fontWeight='white' color='white' placeholder='2 adults  -  0 children  - 1 room' />
              <Button h="3.2rem" w="10%" colorScheme='blue'>Search</Button>
            </Flex>

          </Box>
          <Flex alignItems='start' mt="8rem">
            <Checkbox defaultChecked>I'm travelling for work</Checkbox>
          </Flex>
          <Box>
            <Heading textAlign='start' >Offers</Heading>
            <Text m="8px 0 15px 0" textAlign='start'>Promotions, deals and offers for you</Text>
            <Grid pos='relative' gap="2rem" templateColumns="repeat(2,1fr)">
              <GridItem h="210px"><Image h="207px" borderRadius="1rem" src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/173282684.jpeg?k=e31b490d521194e65d41490f43dc704291ca07eaa762b6f36bca714d3211b9a1&o=" />
                <TextInsideImage text1="Save 15% with Late Escape Deals"
                text2="Tick one more destination off your wishlist" 
                btn="Explore deals"
                width='8rem'/>
              
              </GridItem>
              <GridItem h="210px"><Image h="207px" borderRadius="1rem" src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner_wide.a1b12d47.png" />
              <TextInsideImage
              text1='Escape for a while'
              text2="Enjoy the freedom of a monthly stay on Booking.com"
              btn="Discover monthly stays"
              width="14rem"
              />
              </GridItem>
            </Grid>
          </Box>

        </Box>
      </Box>
      <Box mt="30rem"></Box>
      <HomeSectionCard1 />
     <HomeSectionCard2 />
      <Footer />
    </div>
  )
}
