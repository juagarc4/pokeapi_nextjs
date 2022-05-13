import type { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react'
import { Layout } from 'components/layouts'
import pokeApi from 'api/pokeApi'
import { PokemonListResponse, SmallPokemon } from 'interfaces'
import { PokemonCard } from 'components/pokemon'

interface Props {
  pokemons: SmallPokemon[]
}
const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=898')
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    const id = index + 1
    const imagenSVG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    const imagePNG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    const image = id < 650 ? imagenSVG : imagePNG
    return {
      ...pokemon,
      id: id,
      image: image,
    }
  })

  return {
    props: {
      pokemons,
    },
  }
}

export default HomePage
