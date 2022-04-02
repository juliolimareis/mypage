import works from '../database/works'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/selection'
import { WorkGridItem } from '../components/grid-item'
import thumbApiPhotoSlide from "../public/images/works/api-photo-slide.png"
import { Container, Box, Flex, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" variant="selection-title">
          Works
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {
						works.map((work, i) => (
							<Section key={i}>
								<WorkGridItem 
									id={work.id}
									title={work.title}
									thumbnail={work.images[0]}
								>
									{work.description}
								</WorkGridItem>
          		</Section>
						))
					}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
