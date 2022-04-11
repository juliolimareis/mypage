import {
	Heading,
	Container,
} from '@chakra-ui/react'
import useLocale from '../hooks/useLocale'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/selection'
import ArrowDesc from '../components/layouts/arrowDesc'
import Experience from '../components/layouts/experience'
import { Paragraph, ParagraphInto } from '../components/layouts/paragraph'

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
								<ArrowDesc>{t.fFlutter1}</ArrowDesc>
								<ArrowDesc>{t.fFlutter1}</ArrowDesc>
								<ArrowDesc>{t.fFlutter2}</ArrowDesc>
								<ArrowDesc>{t.fFlutter3}</ArrowDesc>
								<ArrowDesc>{t.fFlutter4}</ArrowDesc>
								<ArrowDesc>{t.fFlutter5}</ArrowDesc>
								<ArrowDesc>{t.fFlutter6}</ArrowDesc>
								<ArrowDesc>{t.fFlutter7}</ArrowDesc>
								<ArrowDesc>{t.fFlutter8}</ArrowDesc>
								<ArrowDesc>{t.fFlutter9}</ArrowDesc>
								<ArrowDesc>{t.fFlutter10}</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='Vue' years='2018' level={5} color='#3fb27f'>
							<ParagraphInto>
								<ArrowDesc>{t.fVue1}</ArrowDesc>
								<ArrowDesc>{t.fVue2}</ArrowDesc>
								<ArrowDesc>{t.fVue3}</ArrowDesc>
								<ArrowDesc>{t.fVue4}</ArrowDesc>
								<ArrowDesc>{t.fVue5}</ArrowDesc>
								<ArrowDesc>{t.fVue6}</ArrowDesc>
								<ArrowDesc>{t.fVue7}</ArrowDesc>
								<ArrowDesc>{t.fVue8}</ArrowDesc>
								<ArrowDesc>{t.fVue9}</ArrowDesc>
								<ArrowDesc>{t.fVue10}</ArrowDesc>
								<ArrowDesc>{t.fVue11}</ArrowDesc>
								<ArrowDesc>{t.fVue12}</ArrowDesc>
								<ArrowDesc>{t.fVue13}</ArrowDesc>
								<ArrowDesc>{t.fVue14}</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='React' years='2021' level={4} color='#5ed3f3'>
							<ParagraphInto>
								<ArrowDesc>{t.fReact1}</ArrowDesc>
								<ArrowDesc>{t.fReact2}</ArrowDesc>
								<ArrowDesc>{t.fReact3}</ArrowDesc>
								<ArrowDesc>{t.fReact4}</ArrowDesc>
								<ArrowDesc>{t.fReact5}</ArrowDesc>
								<ArrowDesc>{t.fReact6}</ArrowDesc>
								<ArrowDesc>{t.fReact7}</ArrowDesc>
								<ArrowDesc>{t.fReact8}</ArrowDesc>
								<ArrowDesc>{t.fReact9}</ArrowDesc>
								<ArrowDesc>{t.fReact10}</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>

					<Paragraph>
						<Experience name='Angular' years='2020' level={4} color='#bd002e'>
							<ParagraphInto>
								<ArrowDesc>{t.fAngular1}</ArrowDesc>
								<ArrowDesc>{t.fAngular2}</ArrowDesc>
								<ArrowDesc>{t.fAngular3}</ArrowDesc>
								<ArrowDesc>{t.fAngular4}</ArrowDesc>
								<ArrowDesc>{t.fAngular5}</ArrowDesc>
								<ArrowDesc>{t.fAngular6}</ArrowDesc>
								<ArrowDesc>{t.fAngular7}</ArrowDesc>
								<ArrowDesc>{t.fAngular8}</ArrowDesc>
								<ArrowDesc>{t.fAngular9}</ArrowDesc>
								<ArrowDesc>{t.fAngular10}</ArrowDesc>
							</ParagraphInto>
						</Experience>
					</Paragraph>
				</Section>

			</Container>
		</Layout>
	)
}

export default Technologies
