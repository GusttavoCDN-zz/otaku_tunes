import { Flex } from '@chakra-ui/react'
import { NavLink } from './NavLink'

export function NavBar() {
  return (
    <Flex justify={'space-around'}>
      <NavLink page={'Search'} goTo="/home" />
      <NavLink page={'Favorites'} goTo="/favorites" />
      <NavLink page={'Profile'} goTo="/profile" />
    </Flex>
  )
}
