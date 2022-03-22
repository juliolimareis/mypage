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
import Selection from '../components/layouts/selection'
import Paragraph from '../components/layouts/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import imageProfile from '../images/perfil.png'

const Page = () => {
	return (
		<Container>

			<Box borderRadius={'lg'} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6}>
				Hello, world!
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Júlio César Lima Reis
					</Heading>
					<p>Dev (Full Stack, Analist, Developer)</p>
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

			<Selection delay={0.1}>
				<Heading as="h3" variant="selection-title">
					Works	
				</Heading>
				<Paragraph>
					Sou formado em Análise e desenvolvimento 
					de Sistemas pelo Instituto Federal do 
					Espírito Santo e moro em Vitória. 
					Comecei no Instituto Nacional da Mata 
					Atlântica como desenvolvedor(1 ano), 
					em seguida comecei a jornada na 
					Healthmap(2 anos) como analista 
					desenvolvedor. 
					Fui transferido para DixHealth e trabelhei da CSI.
				</Paragraph>

				<Box align="center" mt={4}>
					{/* <NextLink href="/"> */}
						<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
							My protifolio
						</Button>
					{/* </NextLink> */}
				</Box>

			</Selection>

		</Container>
	)
}

export default Page
