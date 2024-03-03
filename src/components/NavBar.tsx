import React from 'react'
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/react.svg'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} alt='logo' boxSize='60px' />
        <Text fontSize='2xl'>NabvBar</Text>
    </HStack>
  )
}

export default NavBar
