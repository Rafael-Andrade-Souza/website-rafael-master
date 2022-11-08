import NextLink from 'next/link'
import { SkillBar } from 'react-skillbars'
import { Container, Box, Heading, Button, Link, Image} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BiographSection, BiographYear } from '../components/biograph'
import Layout from '../components/layouts/postLayout'
import skills from '../components/icons/skills'

const Page = () => {
    return (
    <Layout>
    <Container>
            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
    <Heading as="h2" variant="page-title">
        Rafael Andrade 
    </Heading>
    <p>JavaScript | Express | Node.JS | Docker</p>
    </Box>
    <Box 
    flexShrink={0} 
    mt={{ base: 4, md: 0 }} 
    ml={{ md: 6 }}
    textAlign="center"
    >
    <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
          
    <Image
        borderColor="WhiteAlpha.800" 
        borderWidth={2} 
        borderStyle="solid" 
        maxWidth="100px"
        display="inline-block"
        borderRadius="full"
        src='/images/rafael.jpg'
        alt={'Perfil Rafael'}
        layout='fill'
    />
    </Box>
    </Box>
    </Box>
    <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            Sobre Mim
        </Heading>
        <Paragraph>Sou Rafael Andrade, graduado em Economia pela FAE Curitiba (2019) e estudioso de lógica e integração de sistemas, busco uma oportunidade como desenvolvedor back-end. 
Começei a estudar desenvolvimento de sistemas através de cursos via CodeAcademy, Udemy e self-learning e a me interessar cada vez mais pelo assunto. Esta minha aptidão na área e desejo de atuar como desenvolvedor me motivaram a buscar uma mudança de carreira. Estou sempre a par das tecnologias mais inovadoras do setor e busco desenvolver soluções ágeis, eficientes e de fácil implementação.</Paragraph>
    <Box align ="center" my={4}>
        <NextLink href="https://github.com/Rafael-Andrade-Souza?tab=repositories">
            <Button rightIcon={<ChevronRightIcon />} fill="currentcolor">
                Portfólio
            </Button>

            </NextLink>
    </Box>
    </Section>
    <Section delay={0.4}>
        <Heading as ="h3" variant="section-title">
            Habilidades
        </Heading>
        <SkillBar skills={skills} height={13}/>
    </Section>
    <Section delay={0.6}>
        <Heading as="h3"variant="section-title">
            Linha do Tempo
        </Heading>
        <BiographSection>
        <BiographYear>1996</BiographYear>
        Nascido em Curitiba, Brasil.
        </BiographSection>
        <BiographSection>
            <BiographYear>2019</BiographYear>
        Graduado <em>Summa Cum Laude</em> em Economia pela FAE Curitiba.
        </BiographSection>
        <BiographSection>
            <BiographYear>2020</BiographYear>
        Nascimento do {' '}
        <Link href="https://www.instagram.com/fomeemcasa/">Fôme</Link> (minha hamburgueria).
        </BiographSection>
        <BiographSection>
            <BiographYear>2021</BiographYear>
        Conclusão do curso Back-End by CodeAcademy.
        </BiographSection>
        <BiographSection>
        <BiographYear>2022</BiographYear>
        Início da busca de uma oportunidade de carreira.
        </BiographSection>             
        </Section>

    <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
        ♥
        </Heading>
        <Paragraph>
           EX-Jogador {' '}
           <Link href="https://www.youtube.com/watch?v=UJDvXpHHplM">profissional</Link> de LoL pela CNB, dogs,
           cozinha, arte, design, música.

        </Paragraph>
        
    </Section>
    </Container>
    </Layout>
    )     
    }

export default Page 
