import React from "react"
//IMPORT Toaster for small notifications pop-up
// import { Toaster } from 'react-hot-toast'

//SETUP THIRDWEB
/**
 * The chain ID 137 represents the Polygon network
 * The `injected` connector is a web3 connection method used by Metamask
 */
 const supportedChainIds = [	80001]
 const connectors = {
   injected: {},
 }
 
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

//IMPORT CHAKRAUI
import { ChakraProvider } from '@chakra-ui/react'

//IMPORT INTERNAL Layout
import Layout from '../components/Layout'

//IMPORT STYLE CSS
import "../scss/styles.scss"   

//IMPORT StateContext from context/stateContext
// import { StateContext } from "../context/StateContext"

function MyApp({ Component, pageProps }) {
  return (
  // <StateContext>
  <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
  <ChakraProvider>
  <Layout>
    {/* <Toaster /> */}
  <Component {...pageProps} />
  </Layout>
  </ChakraProvider>
  </ThirdwebWeb3Provider>
  // </StateContext>
  )
}


export default MyApp
