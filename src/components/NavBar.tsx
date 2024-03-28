import React from 'react'
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/react.svg'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInputs } from './SearchInputs'

const NavBar = () => {
  return (
    <HStack padding="1rem">
        <Image src={logo} alt='logo' boxSize={10} paddingRight={1} />
        <SearchInputs />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar
