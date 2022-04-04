import NextLink from 'next/link'
import {
	Container,
	Box,
	Heading,
	Image,
	useColorModeValue,
	Link,
	Button,
	Badge
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/layouts/selection'
import Experience from '../components/layouts/experience'
import { BioSelection, BioYear } from '../components/layouts/bio'
import { Paragraph, ParagraphInto } from '../components/layouts/paragraph'
import ArrowDesc from '../components/layouts/arrowDesc'

const Technologies = () => {
	return (
		<Layout>
			<Container>

				<Section delay={0.1}>
					<Heading as="h3" variant="selection-title">
						Front-End
					</Heading>

					<Paragraph>
						<Experience name='Node' years='2018' level={5} color='#74ab5e'>
							<ParagraphInto>
								<ArrowDesc>API Express</ArrowDesc>
								<ArrowDesc>WebSocket(Socket.io e Ws)</ArrowDesc>
								<ArrowDesc>Redis</ArrowDesc>
								<ArrowDesc>Knex</ArrowDesc>
								<ArrowDesc>Ts.ED</ArrowDesc>
								<ArrowDesc>API Express Gateway</ArrowDesc>
								<ArrowDesc>Criação de serviço realtime parecido com firebase</ArrowDesc>
								<ArrowDesc>Microsserviços</ArrowDesc>
								<ArrowDesc>Criação de API</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='Java' years='2012' level={4} color='#eb2b2f'>
							<ParagraphInto>
								<ArrowDesc>Criação de Aplicações</ArrowDesc>
								<ArrowDesc>WebSocket</ArrowDesc>
								<ArrowDesc>Spring Boot</ArrowDesc>
								<ArrowDesc>Criação de sistemas</ArrowDesc>
								<ArrowDesc>Deploy Docker</ArrowDesc>
								<ArrowDesc>Upload de arquivos</ArrowDesc>
								<ArrowDesc>Conexão com banco de dados</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='PHP' years='2015' level={4} color='#7377ad'>
							<ParagraphInto>
								<ArrowDesc>Criação de API</ArrowDesc>
								<ArrowDesc>Manipulação de imagens </ArrowDesc>
								<ArrowDesc>Tratativa de arquivos CSV</ArrowDesc>
								<ArrowDesc>Criação de sistemas</ArrowDesc>
								<ArrowDesc>Deploy Docker</ArrowDesc>
								<ArrowDesc>Upload de arquivos</ArrowDesc>
								<ArrowDesc>Conexão com banco de dados</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='Spring Boot' years='2021' level={4} color='#6aad3d'>
							<ParagraphInto>
								<ArrowDesc>Criação de API</ArrowDesc>
								<ArrowDesc>Manipulação de arquivos</ArrowDesc>
								<ArrowDesc>Upload de arquivos</ArrowDesc>
								<ArrowDesc>Conexão com banco de dados</ArrowDesc>
								<ArrowDesc>Deploy Docker</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience noExp name='Banco de Dados' level={0} />

						<ParagraphInto>
							<Experience name='Mongodb' years='2021' level={4} color='' />
						</ParagraphInto>

						<ParagraphInto>
							<Experience name='SQL Server' years='2020' level={4} color='' />
						</ParagraphInto>

						<ParagraphInto>
							<Experience name='MariaDB' years='2015' level={4} color='' />
						</ParagraphInto>

						<ParagraphInto>
							<Experience name='MySQL' years='2015' level={4} color='' />
						</ParagraphInto>

						<ParagraphInto>
							<Experience name='PostgreSQL' years='2018' level={4} color='' />
						</ParagraphInto>

						<ParagraphInto>
							<Experience name='Firebase' years='2018' level={3} color='' />
						</ParagraphInto>

						<ParagraphInto>
							<Experience name='Oracle Database' years='2021' level={3} color='' />
						</ParagraphInto>

						<Paragraph>
							<Experience name='Linux' years='2013' level={5} color=''>
								<ParagraphInto>
									<ArrowDesc>Experiência em sistemas Linux, Arch Linux e Ubuntu, Mint</ArrowDesc>
									<ArrowDesc>Criação de scripts e comando bash/shell Unix(https://github.com/juliolimareis/scripts)</ArrowDesc>
									<ArrowDesc>Configuração de servidores Ubuntu e Arch Linux</ArrowDesc>
									<ArrowDesc>Conexão com banco de dados</ArrowDesc>
									<ArrowDesc>Experiência em ferramentas open source, gimp, gedit, medit, nano, vim etc</ArrowDesc>
									<ArrowDesc>Instalação, manutenção e otimização de sistemas Arch Linux e Ubuntu(e derivados)</ArrowDesc>
								</ParagraphInto>
							</Experience>
						</Paragraph>

						<Paragraph>
							<Experience name='Docker' years='2013' level={5} color='#1099d3'>
								<ParagraphInto>
									<ArrowDesc>Criação de containers de banco de dados</ArrowDesc>
									<ArrowDesc>Criação de containers de serviço de cache Redis</ArrowDesc>
									<ArrowDesc>Criação de containers front-end e back-end</ArrowDesc>
									<ArrowDesc>Configuração de containers em rede privada</ArrowDesc>
								</ParagraphInto>
							</Experience>
						</Paragraph>

					</Paragraph>

					{/*

					JAVA (Experiência ★★★★)

					Docker /compose (Experiência ★★★★)
					-> Criação de containers de banco de dados
					-> Criação de containers de serviço de cache Redis
					-> Criação de containers front-end e back-end
					-> Configuração de containers em rede privada */}

				</Section>

			</Container>
		</Layout>
	)
}

export default Technologies
