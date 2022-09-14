import { Box, ListItem, UnorderedList } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import {BsYoutube} from 'react-icons/bs'
import {SiHashnode} from 'react-icons/Si'
import Link from 'next/link'

export const Footer =()=> {
    return (
        <>
        
            <Box    p={'2em'} my={'3em'}>
                <Box display={'flex'} gap={['1em','8em']} flexDir={['column','row']}>

                </Box>

                <Box my={'3em'} display={'flex'} justifyContent={['center']} >


                    <Box display={'inline-flex'} justifyContent={['center']} gap={'2em'}>
                        <Link href='#'><FaGithub/></Link>
                        <Link href='#'><FaLinkedin/></Link>
                        <Link href='#'><FaTwitter/></Link>
                        <Link href='#'><BsYoutube/></Link>
                        <Link href='#'><SiHashnode/></Link>
                    </Box>
                </Box>
            </Box>
        
        </>
    )
}