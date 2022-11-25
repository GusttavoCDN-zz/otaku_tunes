import { createContext, useContext, useState } from 'react'
import { httpRequest } from 'services/api'

type Album = {
  artistId: number
  artistName: string
  collectionId: number
  collectionName: string
  collectionPrice: number
  artworkUrl100: string
  releaseDate: string
  trackCount: number
}

type Music = {
  artistName: string
  collectionName: string
  kind?: 'song'
  trackName: string
  trackId: string
  previewUrl: string
}

type AlbumProviderProps = {
  children: React.ReactNode
}

type AlbumContextData = {
  albums: Album[]
  fetchAlbums: (artist: string) => Promise<void>
  getCurrentAlbumMusics: (albumId: string) => Promise<void>
  currentAlbumMusics: Music[]
}

const AlbumsContext = createContext({} as AlbumContextData)

export function AlbumsProvider({ children }: AlbumProviderProps) {
  const [albums, setAlbums] = useState<Album[]>([])
  const [currentAlbumMusics, setCurrentAlbumMusics] = useState<Music[]>([])

  const fetchAlbums = async (artist: string) => {
    const artistNameURL = encodeURI(artist).replaceAll('%20', '+')
    const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`
    const { data } = await httpRequest.get<{ results: Album[] }>(getAlbumsAPI)

    setAlbums(data.results)
  }

  const getCurrentAlbumMusics = async (albumId: string) => {
    const musicAPI = `https://itunes.apple.com/lookup?id=${albumId}&entity=song`
    const { data } = await httpRequest.get<{ results: Music[] }>(musicAPI)

    const musics = data.results.filter((music) => music.kind)

    setCurrentAlbumMusics(musics)
  }

  return (
    <AlbumsContext.Provider
      value={{ albums, fetchAlbums, getCurrentAlbumMusics, currentAlbumMusics }}
    >
      {children}
    </AlbumsContext.Provider>
  )
}

export function useAlbums() {
  const context = useContext(AlbumsContext)
  return context
}
