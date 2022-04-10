import {
	Heading,
	Container,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/selection'
import ArrowDesc from '../components/layouts/arrowDesc'
import Experience from '../components/layouts/experience'
import { Paragraph, ParagraphInto } from '../components/layouts/paragraph'
import useLocale from '../hooks/useLocale'

const Technologies = () => {
	const { t } = useLocale()

	return (
		<Layout>
			<Container>

				<Section delay={0.1}>
					<Heading as="h3" variant="selection-title">
						Front-End
					</Heading>

					<Paragraph>
						<Experience name='Flutter' years='2018' level={5} color='#54c4f8'>
							<ParagraphInto>
								<ArrowDesc> Orientação a objetos voltada a componentes reativos</ArrowDesc>
								<ArrowDesc> Metodologia e implementação GetX</ArrowDesc>
								<ArrowDesc> Integração com Android nativo</ArrowDesc>
								<ArrowDesc> Gerenciamento de tasks em background</ArrowDesc>
								<ArrowDesc> build Android/iOS</ArrowDesc>
								<ArrowDesc> Publicação Android/IOS</ArrowDesc>
								<ArrowDesc> Upload de arquivos</ArrowDesc>
								<ArrowDesc> Integração com WebSocket</ArrowDesc>
								<ArrowDesc> Integração com API</ArrowDesc>
								<ArrowDesc> Implementação de temas</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='Vue' years='2018' level={5} color='#3fb27f'>
							<ParagraphInto>
								<ArrowDesc> Criação de componentes dinâmicos</ArrowDesc>
								<ArrowDesc> TypeScript</ArrowDesc>
								<ArrowDesc> VueX</ArrowDesc>
								<ArrowDesc> Buefy</ArrowDesc>
								<ArrowDesc> Integração com API</ArrowDesc>
								<ArrowDesc> Deploy Docker</ArrowDesc>
								<ArrowDesc> Criação de sites</ArrowDesc>
								<ArrowDesc> Upload de imagens</ArrowDesc>
								<ArrowDesc> Criação de templates</ArrowDesc>
								<ArrowDesc> Slots</ArrowDesc>
								<ArrowDesc> Validação de formulários</ArrowDesc>
								<ArrowDesc> Upload de arquivos</ArrowDesc>
								<ArrowDesc> Integração com Leaflet</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='React' years='2021' level={4} color='#5ed3f3'>
							<ParagraphInto>
								<ArrowDesc> Criação de componentes dinâmicos</ArrowDesc>
								<ArrowDesc> JSX</ArrowDesc>
								<ArrowDesc> Criação de Hooks</ArrowDesc>
								<ArrowDesc> Material-UI</ArrowDesc>
								<ArrowDesc> Integração com API</ArrowDesc>
								<ArrowDesc> Deploy Docker</ArrowDesc>
								<ArrowDesc> Criação de sites</ArrowDesc>
								<ArrowDesc> Criação de templates</ArrowDesc>
								<ArrowDesc> Validação de formulários</ArrowDesc>
								<ArrowDesc> Upload de arquivos</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='Angular' years='2020' level={4} color='#bd002e'>
							<ParagraphInto>
								<ArrowDesc> Criação de componentes dinâmicos</ArrowDesc>
								<ArrowDesc> Módulos</ArrowDesc>
								<ArrowDesc> Criação de Hooks</ArrowDesc>
								<ArrowDesc> Material-UI</ArrowDesc>
								<ArrowDesc> Integração com API</ArrowDesc>
								<ArrowDesc> Deploy Docker</ArrowDesc>
								<ArrowDesc> Criação de sites</ArrowDesc>
								<ArrowDesc> Criação de templates</ArrowDesc>
								<ArrowDesc> Validação de formulários</ArrowDesc>
								<ArrowDesc> Upload de arquivos</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>



				</Section>

			</Container>
		</Layout>
	)
}

export default Technologies
