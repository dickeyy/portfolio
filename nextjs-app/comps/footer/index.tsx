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