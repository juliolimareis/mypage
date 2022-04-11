import {
	Heading,
	Container,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/selection'
import Experience from '../components/layouts/experience'
import { Paragraph, ParagraphInto } from '../components/layouts/paragraph'
import ArrowDesc from '../components/layouts/arrowDesc'
import useLocale from '../hooks/useLocale'
import parse from 'html-react-parser'

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
						<Experience name='Node' years='2018' level={5} color='#74ab5e'>
							<ParagraphInto>
								<ArrowDesc>{t.bNode1}</ArrowDesc>
								<ArrowDesc>{t.bNode2}</ArrowDesc>
								<ArrowDesc>{t.bNode3}</ArrowDesc>
								<ArrowDesc>{t.bNode4}</ArrowDesc>
								<ArrowDesc>{t.bNode5}</ArrowDesc>
								<ArrowDesc>{t.bNode6}</ArrowDesc>
								<ArrowDesc>{t.bNode7}</ArrowDesc>
								<ArrowDesc>{t.bNode8}</ArrowDesc>
								<ArrowDesc>{t.bNode9}</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='Java' years='2012' level={4} color='#eb2b2f'>
							<ParagraphInto>
								<ArrowDesc>{t.bJava1}</ArrowDesc>
								<ArrowDesc>{t.bJava2}</ArrowDesc>
								<ArrowDesc>{t.bJava3}</ArrowDesc>
								<ArrowDesc>{t.bJava4}</ArrowDesc>
								<ArrowDesc>{t.bJava5}</ArrowDesc>
								<ArrowDesc>{t.bJava6}</ArrowDesc>
								<ArrowDesc>{t.bJava7}</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='PHP' years='2015' level={4} color='#7377ad'>
							<ParagraphInto>
								<ArrowDesc>{t.bPHP1}</ArrowDesc>
								<ArrowDesc>{t.bPHP2}</ArrowDesc>
								<ArrowDesc>{t.bPHP3}</ArrowDesc>
								<ArrowDesc>{t.bPHP4}</ArrowDesc>
								<ArrowDesc>{t.bPHP5}</ArrowDesc>
								<ArrowDesc>{t.bPHP6}</ArrowDesc>
								<ArrowDesc>{t.bPHP7}</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='Spring Boot' years='2021' level={4} color='#6aad3d'>
							<ParagraphInto>
								<ArrowDesc>{t.bSpringBoot1}</ArrowDesc>
								<ArrowDesc>{t.bSpringBoot2}</ArrowDesc>
								<ArrowDesc>{t.bSpringBoot3}</ArrowDesc>
								<ArrowDesc>{t.bSpringBoot4}</ArrowDesc>
								<ArrowDesc>{t.bSpringBoot5}</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='Linux' years='2013' level={5} color=''>
							<ParagraphInto>
								<ArrowDesc>{t.bLinux1}</ArrowDesc>
								<ArrowDesc>{parse(t.bLinux2)}</ArrowDesc>
								<ArrowDesc>{t.bLinux3}</ArrowDesc>
								<ArrowDesc>{t.bLinux4}</ArrowDesc>
								<ArrowDesc>{t.bLinux5}</ArrowDesc>
								<ArrowDesc>{t.bLinux6}</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='Docker' years='2013' level={5} color='#1099d3'>
							<ParagraphInto>
								<ArrowDesc>{t.bDocker1}</ArrowDesc>
								<ArrowDesc>{t.bDocker2}</ArrowDesc>
								<ArrowDesc>{t.bDocker3}</ArrowDesc>
								<ArrowDesc>{t.bDocker4}</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience noExp name={t.database} level={0} />

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

					</Paragraph>

				</Section>

			</Container>
		</Layout>
	)
}

export default Technologies
