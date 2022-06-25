import { useState, useEffect } from 'react'
import { Layout } from 'components/layouts'
import { NoFavorites } from 'components/ui'
import { localFavorites } from 'utils'
import { Container, Text } from '@nextui-org/react'

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons)
  }, [])

  return (
    <Layout title='Pokemon - Favoritos'>
      <NoFavorites />
    </Layout>
  )
}

export default FavoritesPage
