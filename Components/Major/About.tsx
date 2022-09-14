import { Box, Text, Flex, Image, Center  } from "@chakra-ui/react";
import Buttons from "../Minors/Buttons";
import DefaultText from "../Minors/DefaultText";

const About =()=> {
    return (
        <>

          <Box bg={'var(--flats)'} p={'2em'}>
            <DefaultText fontSize="1.1em" fontWeight="bold" textAlign={['center','left']}> About Me </DefaultText>
            
            <Box gap={'2'}>


                <Box textAlign={['center', 'left']} px={['', '2em']}>
                   <Flex gap={'3em'} my={'2em'} flexDir={['column','row']} alignItems={'center'}>
                 
                    
                    <Box>
                        <Text my={'1em'}>
                            {'> '} whoami
                        </Text>
                        <Text>
                            I am Daniel Adeboye a community first developer i create educational contents that helps the community grow, a lover of DevTools.
                        </Text>
                    </Box>
                   </Flex>
                </Box>
                
                <Center>
                    <Buttons color="black" bg="yellow.300">Say Hi 👋 </Buttons>
                </Center>

            </Box>

          </Box>    
        
        </>
    )
}

export default About;