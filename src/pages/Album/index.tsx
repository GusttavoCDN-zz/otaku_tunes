import { Flex, Stack, Image, Text } from '@chakra-ui/react'

import { useAlbums } from 'contexts/AlbumsContext'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from 'components/Header'
import { MusicItem } from './MusicItem'

export function Album() {
  const { currentAlbumMusics, getCurrentAlbumMusics, albums } = useAlbums()
  const { pathname } = useLocation()
  const albumId = pathname.split('/')[2]

  const currentAlbum = albums.find(
    (album) => album.collectionId === Number(albumId)
  )

  useEffect(() => {
    getCurrentAlbumMusics(albumId)
  }, [getCurrentAlbumMusics, albumId])

  return (
    <Flex w="100vw" flexDir={'column'}>
      <Header />

      <Stack
        direction={'row'}
        w={'90%'}
        spacing={'5vw'}
        justify="center"
        m={'0 auto'}
        mt={40}
      >
        <Stack spacing={4} textAlign="left" w="30vw" maxW={400} minW={200}>
          <Image
            src={currentAlbum?.artworkUrl100}
            w="100%"
            borderTopRadius="md"
          />
          <Text fontWeight="bold" fontSize={'2xl'}>
            {currentAlbum?.collectionName}
          </Text>
          <Text color="gray.500" fontWeight={'medium'} fontStyle="italic">
            {currentAlbum?.artistName}
          </Text>
        </Stack>

        <Stack spacing={4} textAlign="left" w="50vw">
          {currentAlbumMusics.map((music) => (
            <MusicItem key={music.trackId} {...music} />
          ))}
        </Stack>
      </Stack>
    </Flex>
  )
}
