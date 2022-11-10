
import { Container, Box, Heading, Button, Link, FormControl, FormLabel, Input, Stack, Checkbox} from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layouts/postLayout'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'

const registerPage = () => {
    return(
        <Layout>
        <Container>
        <Heading as="h2" variant="page-title">
        Registration
        </Heading>
        <Box>
        <form>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type='text' placeholder='Your Name Here'/>
            </FormControl>
            <FormControl>
                <FormLabel>E-Mail</FormLabel>
                <Input type='email' placeholder='E-mail Here'/>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type ='password' placeholder='Password Here'/>
            </FormControl>
                
                <Button rightIcon={<ChevronRightIcon />} fill="currentcolor">
                Register
                </Button>
            
            <Stack>
                <Box>
                    <Link href='/login'>Login</Link>
                </Box>
            </Stack>
        </form>
        </Box>
        </Container>
        </Layout>
    )
}


const registerForm = () => {
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

export default registerPage