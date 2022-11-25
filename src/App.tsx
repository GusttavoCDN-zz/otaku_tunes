import { Routes } from 'Routes'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import { UserProvider } from 'contexts/UserContext'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ChakraProvider>
  )
}
