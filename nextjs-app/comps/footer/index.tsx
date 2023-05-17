import SocialButton from "../socialButton";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='
            flex
            mb-5
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
                p-1
                rounded-[8px]
                bg-zinc-500/20
                backdrop-blur-md
                drop-shadow-zinc-500/20
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
    backgroundColor={'rgba(180, 180, 180, 0.2)'}
    backdropFilter={'blur(10px)'}
    boxShadow={'rgba(28, 28, 28, 0.2) 0px 0px 10px'}
    borderRadius={'8px'}
    margin={'1rem auto'}
    zIndex={'100'}
*/