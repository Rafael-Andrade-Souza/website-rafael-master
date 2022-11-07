import { Box } from '@chakra-ui/react'

const FootNote = () => {
  return (
    <Box align="center" opacity={0.2} fontSize="sm">
      &copy; {new Date().getFullYear()} Rafael Andrade. Todos os direitos reservados.
    </Box>
  )
}

export default FootNote