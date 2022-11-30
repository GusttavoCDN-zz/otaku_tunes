import { createContext, useContext, useState } from 'react'

type FavoriteMusic = {
  trackName: string
  artworkUrl100: string
  previewUrl: string
}

type FavoriteMusicsContextData = {
  favoriteMusicsList: FavoriteMusic[]
  addFavoriteMusic: (music: FavoriteMusic) => void
  removeFavoriteMusic: (music: FavoriteMusic) => void
}

type FavoriteMusicsProviderProps = {
  children: React.ReactNode
}

const FavoriteMusicsContext = createContext({} as FavoriteMusicsContextData)

const storageFavoriteMusics = JSON.parse(
  localStorage.getItem('favoriteMusics') as string
) as FavoriteMusic[]

export function FavoriteMusicsProvider({
  children
}: FavoriteMusicsProviderProps) {
  const [favoriteMusicsList, setFavoriteMusicsList] = useState<FavoriteMusic[]>(
    storageFavoriteMusics || []
  )

  const addFavoriteMusic = (music: FavoriteMusic) => {
    const newFavoriteMusicsList = [...favoriteMusicsList, music]
    localStorage.setItem(
      'favoriteMusics',
      JSON.stringify(newFavoriteMusicsList)
    )
    setFavoriteMusicsList(newFavoriteMusicsList)
  }

  const removeFavoriteMusic = (music: FavoriteMusic) => {
    const newFavoriteMusicsList = favoriteMusicsList.filter(
      (favoriteMusic) => favoriteMusic.previewUrl !== music.previewUrl
    )
    localStorage.setItem(
      'favoriteMusics',
      JSON.stringify(newFavoriteMusicsList)
    )
    setFavoriteMusicsList(newFavoriteMusicsList)
  }

  return (
    <FavoriteMusicsContext.Provider
      value={{
        favoriteMusicsList,
        addFavoriteMusic,
        removeFavoriteMusic
      }}
    >
      {children}
    </FavoriteMusicsContext.Provider>
  )
}

export function useFavoriteMusics() {
  const context = useContext(FavoriteMusicsContext)
  return context
}
