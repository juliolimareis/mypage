import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

import imageLogo from '../images/icon.png'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height;
padding:10;

&:hover img {
	transform: rotate(20);
}
`

const Logo = () => {
	// const footPrintImg = `/images/logo${useColorModeValue('', '-dark')}.png`
	
	return (
		<Link href="/">
			<a>
				<LogoBox>
					<Image src={imageLogo} width={50} height={50} alt="logo"/>
					<Text
          	color={useColorModeValue('gray.800', 'shileAlpha.900')}
						fontFamily="M PLUS Rounded 1c"
						fontWeight="bold"
						ml={3}
					>
						Júlio Lima Reis
					</Text>
				</LogoBox>
			</a>
		</Link>
	)
}

export default Logo
	
