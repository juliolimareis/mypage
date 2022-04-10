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
import parser from 'html-react-parser'
import useLocale from '../hooks/useLocale'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/layouts/selection'
import { Paragraph, ParagraphInto } from '../components/layouts/paragraph'

const About = () => {
  const { t } = useLocale()

  return (
    <Layout>
      <Container>

        <Section delay={0.1}>
          <Heading as="h3" variant="selection-title">
            {t.about}
          </Heading>

          <Paragraph>
            {t.introAbout}
          </Paragraph>

          <Paragraph>
            <b>
              {t.questionLineWork}
            </b>
            <ParagraphInto>
              {t.systemsDevelopment}
            </ParagraphInto>
          </Paragraph>

          <Paragraph>
            <b>
              {t.questionAbout}
            </b>
            <ParagraphInto>
              {parser(t.startDesc)}
            </ParagraphInto>
          </Paragraph>

          <Paragraph>
            <b>
              {t.questionDevStrategies}
            </b>
            <ParagraphInto>
              {parser(t.answerDevStrategies)}
            </ParagraphInto>
          </Paragraph>

          <Paragraph>
            <b>
              {t.questionDoYouLikeWorking}
            </b>
            <ParagraphInto>
              {t.answerDoYouLikeWorking}
            </ParagraphInto>
          </Paragraph>

          <Paragraph>
            <b>
              {t.questionTechnologyExperience}
            </b>
          </Paragraph>

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
