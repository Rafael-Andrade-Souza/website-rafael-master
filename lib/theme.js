import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode('#bcbcbc', '#000000')(props)

        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 27,
                textUnderlineOffset: 6,
                textDecorationColor: '#5b5b5b',
                textDecorationThickness: 5,
                marginTop: 6,
                marginBottom: 8,
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#000080', '#5b5b5b')(props),
            textUnderlineOffset: 3,

        })
    }
}

const colors = {
    glassTeal: '#88ccca'
}

const fonts = {
    heading: "M PLUS Rounded 1c"
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: 'true'
}

const theme = extendTheme ({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme
