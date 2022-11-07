import Logo from'./logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import DarkButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, children, target, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
            p={2}
            bg={active ? 'glassTeal' : undefined} 
            color={active ? '#adff2f' : inactiveColor}
            target={target}
            {...props}
            > 
            {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
  
    return (
      <Box
        position="sticky"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        css={{ backdropFilter: 'blur(13px)' }}
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
                <Heading as ="h1" size="lg" letterSpacing={'tight'}>
                    <Logo />
                </Heading>
            </Flex>   
            <Box flex={1} align="right">
            <DarkButton />
            <Box ml={2} display={'inline-block'}>
           <Menu>
             <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                /> 
            <MenuList> 
                <NextLink href="/source" passHref>
                    <MenuItem as={Link}>Código Fonte</MenuItem>
                </NextLink>
                <NextLink href="/Trabalhos" passHref>
                    <MenuItem as={Link}>Portfólio</MenuItem>
                </NextLink>
                
            </MenuList>
        </Menu>
        </Box> 
        </Box>
    </Container>
</Box>
)
}

export default Navbar