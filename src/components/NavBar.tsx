import React from 'react'
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/react.svg'
import { ColorModeSwitch } from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding="2rem">
        <Image src={logo} alt='logo' boxSize='60px' />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
