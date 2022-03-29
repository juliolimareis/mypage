import { Container, Box, Flex, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/layouts/selection'
import { WorkGridItem } from '../components/grid-item'
import thumbApiPhotoSlide from "../public/images/works/api-photo-slide.png"
import Layout from "../components/layouts/article"

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" variant="selection-title">
          Works
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          <Section>
            <WorkGridItem id="api-photo-slide" title="API Photo Slide" thumbnail={thumbApiPhotoSlide}>
              Api Photo Slide
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
