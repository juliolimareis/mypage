import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  a,
  Button,
} from '@chakra-ui/react'
import useLocale from '../hooks/useLocale'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/layouts/selection'
import { Paragraph } from '../components/layouts/paragraph'
import { BioSelection, BioYear } from '../components/layouts/bio'
import parse from 'html-react-parser'

const Page = () => {
  const { t } = useLocale()

  return (
    <Layout>
      <Container>
        <Box
          p={3}
          mb={6}
          borderRadius={'lg'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          {t.welcome}
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Júlio César Lima Reis
            </Heading>
            <Box as='p'>{t.dev}</Box>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borders="solid"
              maxW="200px"
              display="inline-block"
              borderRadius="full"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQH-WeO2SXSSuw/profile-displayphoto-shrink_200_200/0/1624736717154?e=2147483647&v=beta&t=Y_i0WVvvHSNwJCnDcl3ufaCnxxVfWI6bo9ySBjcI8BA"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="selection-title">
            {t.presentation}
          </Heading>

          <Paragraph>
            <Box as='p'>
              {t.graduated}
            </Box>

            <br />

            <Box as='p'>
              {t.presentationDesc}
            </Box>
          </Paragraph>

          <Box align="center" mt={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {t.myPortfolio}
              </Button>
            </NextLink>
          </Box>

        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="selection-title">
            Bio
          </Heading>
          <BioSelection>
            <BioYear>1990</BioYear>
            {t.bornIn}
          </BioSelection>
          <BioSelection>
            <BioYear>2017</BioYear>
            {t.graduation}
          </BioSelection>
          <BioSelection>
            <BioYear>2018</BioYear>
            {t.work1}
          </BioSelection>
          <BioSelection>
            <BioYear>2019</BioYear>
            {t.work2}
          </BioSelection>
          <BioSelection>
            <BioYear>2021</BioYear>
            {t.work3}
          </BioSelection>
          <BioSelection>
            <BioYear>2021</BioYear>
            {t.work4}
          </BioSelection>
          <BioSelection>
            <BioYear>2022 to present</BioYear>
            {t.work5}
          </BioSelection>
        </Section>

      </Container>
    </Layout >
  )
}

export default Page
