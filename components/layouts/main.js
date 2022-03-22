import Head from 'next/head'
import NavBar from '../navBar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({children, router}) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width, initial-scale=1' />
				<title>Júlio Lima Reis - Home Page</title>
			</Head>

			<NavBar path={router.asPath} />

			<Container maxWidth="container.md" pt={14}>
				{children}
			</Container>
		</Box>
	)
}

export default Main
