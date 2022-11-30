import { Box, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

type NavLinkProps = {
  page: string
  goTo: string
}

export function NavLink({ page, goTo }: NavLinkProps) {
  const { pathname } = useLocation()

  let isActive = false

  if (pathname.includes(goTo)) isActive = true
  if (page === 'Search' && pathname.includes('album')) isActive = true

  return (
    <Box
      flex={1}
      textAlign="center"
      p={4}
      bgColor={isActive ? 'green.medium' : 'gray.100'}
    >
      <ChakraLink
        to={goTo}
        as={RouterLink}
        fontSize={'2rem'}
        fontWeight="bold"
        color={isActive ? 'whiteAlpha.900' : 'green.light'}
      >
        {page}
      </ChakraLink>
    </Box>
  )
}
