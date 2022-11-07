import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const Grid = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor ="pointer">
            <Image src={thumbnail}
            alt={title}
            className="grid-thumbnail"
            placeholder="blur"
            loading="lazy"
            />
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={17}>{children}</Text>
        </LinkBox>
    </Box>
)

export const gridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/works${id}`}>
        <LinkBox cursor="pointer">
            <Image src={thumbnail} alt={title} className="grid-item"
            placeholder='blur' />
            <LinkOverlay href={`/works/%{id}`}>
                <Text mt={2} fontSize={20}>
                    {Title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
        </NextLink>
    </Box>
)

export const gridStyle = () => (
    <Global styles={`
    .grid-item {
        border-radius: 12px;

    }
    `}
    />
)