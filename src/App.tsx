import { Routes } from 'Routes'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'
import { AlbumsProvider } from 'contexts/AlbumsContext'
import { FavoriteMusicsProvider } from 'contexts/FavoriteMusicsContext'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlbumsProvider>
        <FavoriteMusicsProvider>
          <Routes />
        </FavoriteMusicsProvider>
      </AlbumsProvider>
    </ChakraProvider>
  )
}
