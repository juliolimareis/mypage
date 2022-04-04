import Logo from './logo'
import NextLink from 'next/link'
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	MenuItem,
	MenuList,
	Menu,
	MenuButton,
	IconButton,
	useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
	const active = path === href
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
	return (
		<NextLink href={href}>
			<Link
				p={2}
				bg={active ? 'glassTeal' : undefined}
				color={active ? '#202023' : inactiveColor}
			>
				{children}
			</Link>
		</NextLink>
	)
}

const NavBar = props => {
	const { path } = props
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue('#ffffff40', '#20202380')}
			style={{ backdropFilter: 'blur(10px' }}
			zIndex={1}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={'tighter'}>
						<Logo />
					</Heading>
				</Flex>

				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					align="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<LinkItem href="/about" path={path}>
						About
					</LinkItem>
					<LinkItem href="/works" path={path}>
						Works
					</LinkItem>
					<LinkItem href="/front-end" path={path}>
						Front-End
					</LinkItem>
					<LinkItem href="/back-end" path={path}>
						Back-End
					</LinkItem>
					<LinkItem href="/posts" path={path}>
						Posts
					</LinkItem>
					<LinkItem href="https://www.linkedin.com/in/julio-cesar-lima-reis-a8246215b/" path={path}>
						LinkedIn
					</LinkItem>
				</Stack>

				<Box flex={1} align="right">
					<ThemeToggleButton />
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>

							<MenuList>
								<NextLink href="/about" passHref>
									<MenuItem>About</MenuItem>
								</NextLink>
								<NextLink href="/works" passHref>
									<MenuItem>Works</MenuItem>
								</NextLink>
								<NextLink href="/front-end" passHref>
									<MenuItem>Front-End</MenuItem>
								</NextLink>
								<NextLink href="/back-end" passHref>
									<MenuItem>Back-End</MenuItem>
								</NextLink>
								<NextLink href="/posts" passHref>
									<MenuItem>Posts</MenuItem>
								</NextLink>
								<NextLink href="https://www.linkedin.com/in/julio-cesar-lima-reis-a8246215b/" passHref>
									<MenuItem>LinkedIn</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Box>

			</Container>
		</Box>
	)
}

export default NavBar
