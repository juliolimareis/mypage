import { AnimatePresence, motion } from "framer-motion";
import {
	Box,
	Image,
	IconButton,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import useLocale from "../hooks/useLocale";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const ThemeToggleButton = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div style={{ display: "inline-block" }}
				key={useColorModeValue("light", "dark")}
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 20, opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<IconButton
					m={2}
					aria-label="Toggle theme"
					colorScheme={useColorModeValue('purple', 'orange')}
					icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
					onClick={toggleColorMode}
				/>
			</motion.div>
		</AnimatePresence>
	)
}

export const FlagToggleButton = () => {
	const router = useRouter()
	const { t, locale } = useLocale()

	const changeLanguage = (lang) => {
		const path = lang + router.pathname
    router.replace(path, path, {locale:lang})
	}

	return (
		<>
			{
				locale == 'en' ?
					(
						<IconButton
							m={2}
							title={t.changeLanguage}
							aria-label="language"
							icon={<Flag name='brasil'/>}
							onClick={() => changeLanguage('pt')}
						/>
					)
				:
					(
						<IconButton
							m={2}
							name='en'
							title={t.changeLanguage}
							aria-label="language"
							icon={<Flag name='great-britain'/>}
							onClick={() => changeLanguage('en')}
						/>
					)
			}
		</>
	)
}

const Flag = ({name}) => (
	<Image w={10} h={8} src={`/images/flags/${name}.webp`} />
)

