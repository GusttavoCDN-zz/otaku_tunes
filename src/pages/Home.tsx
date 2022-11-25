import { Button, Flex, Icon, Input, Stack } from '@chakra-ui/react'
import { Header } from 'components/Header'
import { RiSearchLine } from 'react-icons/ri'

export function Home() {
  return (
    <Flex w="100vw" flexDir={'column'}>
      <Header />

      <Stack direction={'row'} w="inherit" justify="center" mt={20}>
        <Flex
          as="label"
          flex={1}
          maxW={650}
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          p={4}
        >
          <Input
            placeholder="Search a Music"
            px="4"
            mr="4"
            variant={'unstyled'}
          />
          <Icon as={RiSearchLine} fontSize="20" />
        </Flex>
        <Button type="button" h="58px" w="150px" colorScheme="linkedin">
          Search
        </Button>
      </Stack>
    </Flex>
  )
}
