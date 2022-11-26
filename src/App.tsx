import { Routes } from 'Routes'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import { AlbumsProvider } from 'contexts/AlbumsContext'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlbumsProvider>
        <Routes />
      </AlbumsProvider>
    </ChakraProvider>
  )
}
