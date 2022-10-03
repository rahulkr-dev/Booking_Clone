import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

let firstLineContent = ['Countries', 'Regions', 'Cites', 'Districts', 'Airports', 'Hotels', 'Places of interset'];
let secondLineContent = ['Homes', 'Apartments', 'Resorts', 'Villas', 'Hostels', 'B&Bs', 'Guest houses'];
let thirdLineContent = ['Unique places to stay', 'All destinations', 'Discover', 'Reviews', 'Discover monthly stays', 'Unpacked: Travel articles', 'Travel Communities', 'Seasonal and holiday deals'];
let fourthLineContent = ['Car hire', 'Flight finder', 'Resturant reservations', 'Booking.com for Travel Agents'];
let fifthLineContent = ['Coronavirus(COVID19) FAQs', 'About Booking.com', 'Customer Service help', 'Partner help', 'Careers', 'Sustainability', 'Press centre', 'Safety resource centre', 'investor relations', 'Terms & Conditios', 'Partner dispute', 'How we work', 'Privacy & Cookie Statement', 'MSA Statement', 'Corporate contact']
let firstLine = firstLineContent.map((item, id) => <p key="id">{item}</p>)
let secondLine = secondLineContent.map((item, id) => <p key="id">{item}</p>)
let thirdLine = thirdLineContent.map((item, id) => <p key="id">{item}</p>)
let fourthLine = fourthLineContent.map((item, id) => <p key="id">{item}</p>)
let fifthLine = fifthLineContent.map((item, id) => <p key="id">{item}</p>)
export const FooterLastSection = () => {
    return (
        <Grid className='footerLastSection' p="1rem 6rem 2rem 5rem" templateColumns='repeat(5,1fr)'>
            <GridItem fontSize='14px'>
                {firstLine}
            </GridItem>
            <GridItem fontSize='14px'>
                {secondLine}
            </GridItem>
            <GridItem fontSize='14px'>
                {thirdLine}
            </GridItem>
            <GridItem fontSize='14px'>
                {fourthLine}
            </GridItem>
            <GridItem fontSize='14px'>
                {fifthLine}
            </GridItem>
        </Grid>
    )
}
