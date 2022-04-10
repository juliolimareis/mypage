import Head from 'next/head'
import NavBar from '../navBar.js'
import { useTranslation } from 'react-i18next'
import { Box, Container } from '@chakra-ui/react'

const Main = ({children, router}) => {
	const { t } = useTranslation()

	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width, initial-scale=1' />
				<title>Júlio Lima Reis - {t('Minha Página')}</title>
			</Head>

			<NavBar path={router.asPath} />

			<Container maxWidth="container.md" pt='130px'>
				{children}
			</Container>

		</Box>
	)
}

export default Main
