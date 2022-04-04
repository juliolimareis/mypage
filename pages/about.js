import NextLink from 'next/link'
import {
	Container,
	Box,
	Heading,
	Image,
	useColorModeValue,
	Link,
	Button,
} from '@chakra-ui/react'
import Section from '../components/layouts/selection'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Paragraph, ParagraphInto } from '../components/layouts/paragraph'
import { BioSelection, BioYear } from '../components/layouts/bio'
import { Technologies } from './front-end'

const About = () => {
	return (
		<Layout>
			<Container>

				<Section delay={0.1}>
					<Heading as="h3" variant="selection-title">
						Works
					</Heading>

					<Paragraph>
						<b>Olá, </b>seja bem vindo ao meu perfil.
					</Paragraph>

					<Paragraph>
						Desenvolver requer planejamento e produtividade. Lidar com as opções de mercado e definir soluções é algo fundamental para um bom projeto.
					</Paragraph>

					<Paragraph>
						<b>
							Qual o seu ramo de atuação?
						</b>
						<ParagraphInto>
							Desenvolvimento de sistemas.
						</ParagraphInto>
					</Paragraph>

					<Paragraph>
						<b>
							Conte um pouco sobre sua história:
						</b>
						<ParagraphInto>
							Sou formado em Análise e desenvolvimento de Sistemas pelo Instituto Federal do Espírito Santo e moro em Vitória. Comecei no Instituto Nacional da Mata Atlântica como desenvolvedor(1 ano), em seguida comecei a jornada na Healthmap(2 anos) como analista desenvolvedor. Fui transferido para DixHealth e trabelhei da CSI.
						</ParagraphInto>
					</Paragraph>

					<Paragraph>
						<b>
							Quais suas estratégias de desenvolvimento?
						</b>
						<ParagraphInto>
							<p>- Implementar códigos limpos e com boas tipagens, visando a manutenção e entrosamento da equipe.</p>
							<p>- Estudar tecnologias com foco em implementação.</p>
							<p>- Analisar soluções de problemas e/ou implementação.</p>
							<p>- Pesquisar novas tecnologias.</p>
						</ParagraphInto>
					</Paragraph>

					<Paragraph>
						<b>
							Gosta de trabalhar com back-end ou front-end?
						</b>
						<ParagraphInto>
							Difícil responder, gosto dos dois. Recentemente tenho trabalhado como full stack.
						</ParagraphInto>
					</Paragraph>

					<Paragraph>
						<b>
							Quais tecnologias você tem experiência?
						</b>
					</Paragraph>

					{/* <Technologies /> */}

					<Box align="center" mt={4}>
						<NextLink href="/front-end">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								Front-End
							</Button>
						</NextLink>
					</Box>

					<Box align="center" mt={4}>
						<NextLink href="/back-end">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								Back-End
							</Button>
						</NextLink>
					</Box>

				</Section>

			</Container>
		</Layout>
	)
}

export default About
