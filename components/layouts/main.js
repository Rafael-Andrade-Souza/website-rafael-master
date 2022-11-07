import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import FootNote from '../footnote.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
       <Head>
        <title>Rafael Andrade</title>
      </Head>

      <Navbar path={router.asPath} />
      
      <Container maxW="container.md" pt={13}>

    {children}

      < FootNote />
      </Container>
      </Box>
  )
}

export default Main