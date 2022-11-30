import { Stack, Flex, Icon, Text, SimpleGrid } from '@chakra-ui/react'
import { useFavoriteMusics } from 'contexts/FavoriteMusicsContext'
import { AiFillHeart } from 'react-icons/ai'

type FavoriteMusicItemProps = {
  trackName: string
  artworkUrl100: string
  previewUrl: string
}

export function FavoriteMusicItem({
  artworkUrl100,
  previewUrl,
  trackName
}: FavoriteMusicItemProps) {
  const { removeFavoriteMusic } = useFavoriteMusics()

  const handleClick = () => {
    const music = { trackName, previewUrl, artworkUrl100 }
    removeFavoriteMusic(music)
  }

  return (
    <Stack minW="40vw">
      <Text fontSize={'2xl'} color={'CaptionText'} textAlign="center">
        {trackName}
      </Text>
      <Flex gap={10}>
        <audio
          controls
          style={{
            width: '100%',
            borderRadius: '2.5rem'
          }}
        >
          <source src={previewUrl} type="audio/mpeg" />
        </audio>
        <button type="button" onClick={handleClick}>
          <Icon as={AiFillHeart} w="40px" h="40px" />
        </button>
      </Flex>
    </Stack>
  )
}
