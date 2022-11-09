import link from 'next/link'
import { Container, Box, Heading, Button, Link, Image, Flex, FormControl, FormLabel, Input, Stack, Checkbox} from '@chakra-ui/react'
import React from 'react'
import Head from 'next/head'

const app =() => {
    return(
        <Container>
        <header />
        <loginArea />
        </Container>
    )
}
const header = () => {
    return(
        <Container>
            <Box>
                <h1> Sign in to your account</h1> 
            </Box>
        </Container>
    )
}

const loginArea = () => {
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

            <Stack isInline>
                <Box>
                    <Checkbox>Remember Me</Checkbox>
                </Box>
                <Box>
                    <link> Forgot you Password </link>
                </Box>
            </Stack>
        </form>
        </Box>
    )
}

export default app