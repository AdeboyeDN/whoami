import { Box, ListItem, UnorderedList } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const Footer =()=> {
    return (
        <>
        
            <Box    p={'2em'} my={'3em'}>
                <Box display={'flex'} gap={['1em','8em']} flexDir={['column','row']}>

                </Box>

                <Box my={'3em'} display={'flex'} justifyContent={['space-between']} >
                    <Box>
                        Adeboyedn 2022
                    </Box>

                    <Box display={'inline-flex'} gap={'2em'}>
                        <FaGithub/>
                        <FaLinkedin/>
                        <FaTwitter/>
                        

                    </Box>
                </Box>
            </Box>
        
        </>
    )
}