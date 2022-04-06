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
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/layouts/selection'
import { BioSelection, BioYear } from '../components/layouts/bio'
import { Paragraph, ParagraphInto } from '../components/layouts/paragraph'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          p={3}
          mb={6}
          borderRadius={'lg'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Welcome my web page.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Júlio César Lima Reis
            </Heading>
            <p>Dev (Full Stack, Analyst, Developer)</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center" > <Image
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
            Works
          </Heading>

          <Paragraph>
            <p>
              Desenvolvedor full stack graduado em Análise e desenvolvimento
              de Sistemas pelo Instituto Federal do
              Espírito Santo(2017).
            </p>

            <br />

            <p>
              {/* Atualmente moro em Vitória - ES. */}

              Comecei desenvolvendo sistemas nos projetos da faculdade que
              renderam boas experiências como desenvolvedor.
              Meu primeiro trabalho profissional foi no Instituto Nacional da Mata
              Atlântica como desenvolvedor onde durou um ano,
              em seguida comecei a jornada na empresa de gestão do cuidado
              <Link isExternal href='https://healthmap.com.br/'> Healthmap</Link> como analista
              desenvolvedor na qual rendeu dois anos. Logo em seguida tive uma rápuda passagem
              na empresa
              <Link
                isExternal href='https://www.linkedin.com/company/dixhealth/?originalSubdomain=br'>DixHealth</Link>.

              Iniciei o trabalho na <Link isExternal href='https://www.linkedin.com/company/csiway/'>CSI</Link>
              que derou oito meses.

              Hoje trabalho na <Link isExternal href='https://www.linkedin.com/search/results/all/?keywords=dr.%20tis%20-%20plataforma%20de%20telemedicina%20e%20pacs&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=e6727da5-ee6b-41ad-9b40-d936f5c17335&sid=Yn%3A'> Dr.Tis</Link>
              empresa focada em PACS e telemedicina.
            </p>
          </Paragraph>

          <Box align="center" mt={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
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
            Born in Pedro Canário, Brazil.
          </BioSelection>
          <BioSelection>
            <BioYear>2017</BioYear>
            Graduated in Systems Analysis and Development - Federal Institute of Espírito Santo, Brazil.
          </BioSelection>
          <BioSelection>
            <BioYear>2018</BioYear>
            Worked at National Institute of the Atlantic Forest, Brazil.
          </BioSelection>
          <BioSelection>
            <BioYear>2019</BioYear>
            Worked at Healthmap, Brazil.
          </BioSelection>
          <BioSelection>
            <BioYear>2021</BioYear>
            Worked at DixHealth, Brazil.
          </BioSelection>
          <BioSelection>
            <BioYear>2021</BioYear>
            Worked at CSI, Brazil.
          </BioSelection>
          <BioSelection>
            <BioYear>2022 to present</BioYear>
            Dr.Tis Brasil.
          </BioSelection>
        </Section>

      </Container>
    </Layout >
  )
}

export default Page
