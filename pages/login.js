
import { Container, Box, Heading, Button, Link, FormControl, FormLabel, Input, Stack, Checkbox} from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layouts/postLayout'
import { ChevronRightIcon } from '@chakra-ui/icons'

const loginPage = () => {
    return(
        <Layout>
        <Container>
        <Heading as="h2" variant="page-title">
        User Login
        </Heading>
        <Box>
        <form>
            <FormControl>
                <FormLabel>E-Mail</FormLabel>
                <Input type='email' placeholder='E-mail Here' />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type ='password' placeholder='Password Here' />
            </FormControl>
                
                <Button rightIcon={<ChevronRightIcon />} fill="currentcolor">
                Login

            </Button>
            <Stack>
                <Box>
                    <Link href='/register'>Register Here </Link>
                </Box>
            </Stack>
        </form>
        </Box>
        </Container>
        </Layout>
    )
}


const logForm = () => {
    return (
    <Box>
        <form>
            <FormControl>
                <FormLabel>E-Mail</FormLabel>
                <Input type='email' placeholder='E-mail Here' />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type ='password' placeholder='Password Here' />
            </FormControl>

            <Stack>
                <Box>
                    <Checkbox>Remember Me</Checkbox>
                </Box>
                <Box>
                    <Link> Forgot you Password </Link>
                </Box>
            </Stack>
        </form>
        </Box>
    )
}

export default loginPage