import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react'
import { HeaderLogo } from 'assets/Logo'
import { UserContext } from 'contexts/UserContext'
import { useContext } from 'react'

export function Header() {
  const { user } = useContext(UserContext)

  return (
    <Flex flexDir="column" w="inherit">
      <Flex
        as="header"
        align="center"
        justify="space-between"
        flexDir={'row'}
        pt={0}
        px={12}
        w="inherit"
        bgColor={'green.strong'}
      >
        <HeaderLogo w={200} h={125} pb={8} />

        <Text color={'white'} fontSize={'lg'} fontWeight="hairline">
          {user.email}
        </Text>
      </Flex>

      <Flex justify={'space-around'}>
        <Box bgColor={'blackAlpha.100'} flex={1} textAlign="center" p={4}>
          <Link fontSize={'2rem'} fontWeight="bold" color={'green.light'}>
            Pesquisa
          </Link>
        </Box>
        <Box
          bgColor={'blackAlpha.100'}
          flex={1}
          textAlign="center"
          p={4}
          color={'green.light'}
        >
          <Link fontSize={'2rem'} fontWeight="bold">
            Favoritas
          </Link>
        </Box>
        <Box
          bgColor={'blackAlpha.100'}
          flex={1}
          textAlign="center"
          p={4}
          color={'green.light'}
        >
          <Link fontSize={'2rem'} fontWeight="bold">
            Perfil
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}
