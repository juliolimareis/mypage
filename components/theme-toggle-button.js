import { AnimatePresence, motion } from "framer-motion";
import {
	Box,
	Image,
	IconButton,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

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

export const FlagToggleButton = ({ props }) => {
	const { t, i18n } = useTranslation()
	const [language, setLanguage] = useState(props?.locale ?? 'en')
	// const [nextLanguage, setNextLanguage] = useState('pt-BR')

	const changeLanguage = () => {
		if (language == 'en'){
			i18n.changeLanguage(language)
			setLanguage('pt-BR')
		}else{
			i18n.changeLanguage(language)
			setLanguage('en')
		}
	}

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div style={{ display: "inline-block" }}
				key={language}
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 20, opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<IconButton
					m={2}
					title={t('Mudar idioma da página')}
					aria-label="language"
					icon={
						language == 'en' ? 
							<Flag name='great-britain'/>
						: 
							<Flag name='brasil'/>
					}
					onClick={changeLanguage}
				/>
			</motion.div>
		</AnimatePresence>
	)
}

const Flag = ({name}) => (
	<Image w={10} h={8} src={`/images/flags/${name}.webp`} />
)

