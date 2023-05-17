import SocialButton from "../socialButton";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='
            flex
            p-5
            fixed
            bottom-[-0px]
            z-99999
            w-screen
            h-[5rem]
            justify-center
            items-center
        '>
            <div className='
                flex
                flex-row
                justify-center
                items-center
                w-screen
                h-[5rem]
            '>
                <SocialButton link={'https://github.com/dickeyy'} icon={<FaGithub style={{ 
                    height: '2rem',
                    width: '2rem',
                    color: '#d1d5db',
                }} />} />

                <SocialButton link={'https://twitter.com/kyledickeyy'} icon={<FaTwitter style={{ 
                    height: '2rem',
                    width: '2rem',
                    color: '#d1d5db',
                }} />} />

                <SocialButton link={'https://linkedin.com/in/kyletdickey'} icon={<FaLinkedin style={{ 
                    height: '2rem',
                    width: '2rem',
                    color: '#d1d5db',
                }} />} />

                <SocialButton link={'https://instagram.com/kyle.dickeyy'} icon={<FaInstagram style={{ 
                    height: '2rem',
                    width: '2rem',
                    color: '#d1d5db',
                }} />} />
            </div>
        </div>
    )
}

/*
    display={'flex'}
    w={'90vw'}
    p={'0.7rem'}
    position={'fixed'}
    top={'0'}
    left={'5vw'}
    height={'fit-content'}
    backgroundColor={'rgba(180, 180, 180, 0.2)'}
    backdropFilter={'blur(10px)'}
    boxShadow={'rgba(28, 28, 28, 0.2) 0px 0px 10px'}
    borderRadius={'8px'}
    margin={'1rem auto'}
    zIndex={'100'}
*/
