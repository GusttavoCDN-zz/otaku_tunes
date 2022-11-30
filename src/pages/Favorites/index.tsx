import { Flex, Heading, Stack } from '@chakra-ui/react'
import Header from 'components/Header'
import { useFavoriteMusics } from 'contexts/FavoriteMusicsContext'
import { FavoriteMusicItem } from './FavoriteMusicItem'

export function Favorites() {
  const { favoriteMusicsList } = useFavoriteMusics()
  console.log(favoriteMusicsList)

  return (
    <Flex w="100vw" flexDir={'column'}>
      <Header />

      <Heading as="h1" size="2xl" textAlign="center" mt={20}>
        Favorite Musics:
      </Heading>

      <Stack spacing={4} mt={20} alignItems="center">
        {favoriteMusicsList.map((music, i) => (
          <FavoriteMusicItem key={i} {...music} />
        ))}
      </Stack>
    </Flex>
  )
}
