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

type AlbumProviderProps = {
  children: React.ReactNode
}

type AlbumContextData = {
  albums: Album[]
  fetchAlbums: (artist: string) => Promise<void>
}

const AlbumsContext = createContext({} as AlbumContextData)

export function AlbumsProvider({ children }: AlbumProviderProps) {
  const [albums, setAlbums] = useState<Album[]>([])

  const fetchAlbums = async (artist: string) => {
    const artistNameURL = encodeURI(artist).replaceAll('%20', '+')
    const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`
    const { data } = await httpRequest.get<{ results: Album[] }>(getAlbumsAPI)

    setAlbums(data.results)
  }

  return (
    <AlbumsContext.Provider value={{ albums, fetchAlbums }}>
      {children}
    </AlbumsContext.Provider>
  )
}

export function useAlbums() {
  const context = useContext(AlbumsContext)
  return context
}
