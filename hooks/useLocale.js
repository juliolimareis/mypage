import { useRouter } from 'next/router'

import en from '../locales/en'
import pt from '../locales/pt'

export const useLocale = () => {
	const router = useRouter()
	const { locale } = router
	const t = locale === 'pt' ? pt : en

	return { t, locale }
}

export default useLocale