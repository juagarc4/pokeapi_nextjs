import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from 'components/ui'

interface Props {
  children?: React.ReactNode
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name='author' content='Raul Garcia' />
        <meta name='description' content={`Informacion sobre el Pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  )
}
