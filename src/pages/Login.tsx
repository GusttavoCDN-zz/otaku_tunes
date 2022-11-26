import { Button, Flex, Input, Stack } from '@chakra-ui/react'
import { Logo } from 'assets/Logo'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [name, setName] = useState('')
  const [, setUsername] = useLocalStorage('user')

  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setUsername(name)
    navigate('/home')
  }

  return (
    <Flex
      align={'center'}
      w="100vw"
      h="100vh"
      justify="center"
      flexDir="column"
    >
      <Logo w="360px" h="360px" />

      <Flex
        as="form"
        onSubmit={handleSubmit}
        mt={12}
        w={['300px', '300px', '697px']}
        border="1px solid"
        borderColor="gray.100"
        borderRadius="10px"
        boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        p={12}
        flexDir="column"
      >
        <Stack>
          <Input
            type={'text'}
            name="name"
            value={name}
            borderColor={'gray.300'}
            focusBorderColor="gray.400"
            _hover={{
              borderColor: 'gray.400'
            }}
            placeholder={'Write your name'}
            onChange={({ target }) => setName(target.value)}
          />
        </Stack>
        <Button type="submit" colorScheme="linkedin" mt={8}>
          Log in
        </Button>
      </Flex>
    </Flex>
  )
}
