import { Stack, Icon, Flex, Text } from '@chakra-ui/react'
import { useFavoriteMusics } from 'contexts/FavoriteMusicsContext'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

type MusicItemProps = {
  trackName: string
  artworkUrl100: string
  previewUrl: string
}

export function MusicItem({
  trackName,
  previewUrl,
  artworkUrl100
}: MusicItemProps) {
  const { addFavoriteMusic, removeFavoriteMusic, favoriteMusicsList } =
    useFavoriteMusics()

  const isFavorite = favoriteMusicsList.find(
    (favoriteMusic) => favoriteMusic.previewUrl === previewUrl
  )

  const heart = isFavorite ? AiFillHeart : AiOutlineHeart

  const handleClick = () => {
    const music = { trackName, previewUrl, artworkUrl100 }
    if (isFavorite) removeFavoriteMusic(music)
    else addFavoriteMusic(music)
  }

  return (
    <Stack>
      <Text fontSize={'2xl'} color={'CaptionText'}>
        {trackName}
      </Text>
      <Flex gap={10}>
        <audio
          controls
          style={{
            width: '80%',
            borderRadius: '2.5rem'
          }}
        >
          <source src={previewUrl} type="audio/mpeg" />
        </audio>
        <button type="button" onClick={handleClick}>
          <Icon as={heart} w="40px" h="40px" />
        </button>
      </Flex>
    </Stack>
  )
}
