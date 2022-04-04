import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/works'
import { Box, Container, Badge, Link, List, ListItem } from '@chakra-ui/react'

import works from '../../database/works'

//registra os parâmetros para nesta rota
export const getStaticPaths = async () => {
	const paths = works.map(work => {
		return {
			params: {
				id: String(work.id)
			}
		}
	})
	return {
		paths,
		fallback: false
	}
}

//procurar o parâmetro id na rota, caso não encontre, entrar na pagina 404
export const getStaticProps = async (context) => {
	const id = context.params.id
	const work = works.find(work => work.id === id)

	return {
		props: {
			work
		}
	}

}

const Work = ({work}) => (
	<Layout title='api-photo-slide'>
		<Container marginTop={3}>
			<Title>
				{work.title} <Badge>{work.date}</Badge>
			</Title>
			<Box as='p'>
			{work.description}
			</Box>
			<List ml={4} my={4}>
				{ work.github &&
						(<ListItem>
							<Meta>GitHub</Meta>
							<Link href={work.github} isExternal>
								{work.github}<ExternalLinkIcon mx="2px" />
							</Link>
						</ListItem>)
				}
			</List>
			<List ml={4} my={4}>
				<ListItem>
					{
						work.images.map((image, i) => (
							<WorkImage key={i} src={image}/>
						))
					}
				</ListItem>
			</List>
		</Container>
	</Layout>
)

export default Work
