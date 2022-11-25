import { Button, Flex, Input, Stack } from '@chakra-ui/react'
import { Logo } from 'assets/Logo'
import { useUser } from 'contexts/UserContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { httpRequest } from 'services/api'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useUser()

  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const { data } = await httpRequest.get(`/users/${email}`)

    if (data[0].password === password) {
      localStorage.setItem('user', JSON.stringify(data[0]))
      setUser(data[0])
      navigate('/home')
    } else console.log('Invalid credentials')
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
        w={'697px'}
        border="1px solid"
        borderColor="gray.100"
        borderRadius="10px"
        boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        p={12}
        flexDir="column"
      >
        <Stack>
          <Input
            type={'email'}
            name="email"
            value={email}
            borderColor={'gray.300'}
            focusBorderColor="gray.400"
            _hover={{
              borderColor: 'gray.400'
            }}
            placeholder={'E-mail'}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Input
            type={'password'}
            name="password"
            borderColor={'gray.300'}
            focusBorderColor="gray.400"
            _hover={{
              borderColor: 'gray.400'
            }}
            placeholder={'Password'}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Stack>
        <Button type="submit" colorScheme="linkedin" mt={8}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
