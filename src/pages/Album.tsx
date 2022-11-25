import { Flex } from '@chakra-ui/react'
import { Header } from 'components/Header'
import { useAlbums } from 'contexts/AlbumsContext'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function Album() {
  const { currentAlbumMusics, getCurrentAlbumMusics } = useAlbums()
  const { pathname } = useLocation()
  const albumId = pathname.split('/')[2]

  useEffect(() => {
    getCurrentAlbumMusics(albumId)
  }, [])

  return (
    <Flex w="100vw" flexDir={'column'}>
      <Header />

      {currentAlbumMusics.map((music) => (
        <div key={music.trackId}>{music.trackName}</div>
      ))}
    </Flex>
  )
}
