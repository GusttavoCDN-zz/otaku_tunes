import { Routes } from 'Routes'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import { UserProvider } from 'contexts/UserContext'
import { AlbumsProvider } from 'contexts/AlbumsContext'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <AlbumsProvider>
          <Routes />
        </AlbumsProvider>
      </UserProvider>
    </ChakraProvider>
  )
}
