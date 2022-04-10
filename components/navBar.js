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
import useLocale from '../hooks/useLocale'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ThemeToggleButton, FlagToggleButton } from './theme-toggle-button'

const LinkItem = ({ href, path, children, isExternal }) => {
	const active = path === href
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

	return (
		<>
			{ isExternal ? 
				(
					<Link
						p={2}
						isExternal
						bg={active ? 'glassTeal' : undefined}
						color={active ? '#202023' : inactiveColor}
					>
						{children}
					</Link>
				)
			:
				(
					<NextLink href={href}>
						<Link
							p={2}
							bg={active ? 'glassTeal' : undefined}
							color={active ? '#202023' : inactiveColor}
							isExternal={isExternal}
						>
							{children}
						</Link>
					</NextLink>
				)
			}
		</>
	)
}

const NavBar = props => {
	const { t } = useLocale()
	const { path } = props
	
	return (
		<Box
			as="nav"
			w="100%"
			zIndex={1}
			position="fixed"
			style={{ backdropFilter: 'blur(10px' }}
			bg={useColorModeValue('#ffffff40', '#20202380')}
			{...props}
		>
			<Container
				p={2}
				wrap="wrap"
				align="center"
				display="flex"
				maxW="container.md"
				justify="space-between"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={'tighter'}>
						<Logo />
					</Heading>
				</Flex>

				<Stack
					flexGrow={1}
					align="center"
					mt={{ base: 4, md: 0 }}
					width={{ base: 'full', md: 'auto' }}
					display={{ base: 'none', md: 'flex' }}
					direction={{ base: 'column', md: 'row' }}
				>
					<LinkItem href="/about" path={path}>
						{t.about}
					</LinkItem>
					<LinkItem href="/works" path={path}>
						{t.works}
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
					<Link isExternal href="https://www.linkedin.com/in/julio-cesar-lima-reis-a8246215b/">
						LinkedIn
					</Link>
				</Stack>

				<Box flex={1} align="right">
					<FlagToggleButton />
					<ThemeToggleButton />
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu>
							<MenuButton
								as={IconButton}
								variant="outline"
								aria-label="Options"
								icon={<HamburgerIcon />}
							/>
							<MenuList>
								<NextLink href="/about" passHref>
									<MenuItem>{t.about}</MenuItem>
								</NextLink>
								<NextLink href="/works" passHref>
									<MenuItem>{t.works}</MenuItem>
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
								<Link isExternal href="https://www.linkedin.com/in/julio-cesar-lima-reis-a8246215b/">
									<MenuItem>LinkedIn</MenuItem>
								</Link>
							</MenuList>
						</Menu>
					</Box>
				</Box>

			</Container>
		</Box>
	)
}

export default NavBar
