import { Avatar, Box, Flex, Link, Text } from '@chakra-ui/react'
import { HeaderLogo } from 'assets/Logo'
import { useUser } from 'contexts/UserContext'

export function Header() {
  const { user } = useUser()

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

        <Flex align="center" gap={4}>
          <Text color={'white'} fontSize={'lg'} fontWeight="hairline">
            {user.email}
          </Text>
          <Avatar
            size="lg"
            name={user.email}
            src="https://github.com/gusttavocdn.png"
          />
        </Flex>
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
