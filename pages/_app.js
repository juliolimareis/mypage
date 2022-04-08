import theme from "../libs/theme"
import Fonts from "../components/fonts"
import Layout from "../components/layouts/main"
import { AnimatePresence } from "framer-motion"
import { ChakraProvider } from "@chakra-ui/react"
import { appWithTranslation } from "next-i18next"

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default appWithTranslation(Website) 
