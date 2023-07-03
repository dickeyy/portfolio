import SocialButton from "../socialButton";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiKofi } from 'react-icons/si';

export default function Footer() {
    return (
        <div className='
            flex
            flex-col
            justify-center
            items-center
            w-screen
            overflow-x-hidden
        '>
            <div className='
                flex
                mb-2
                fixed
                bottom-[10px]
                z-[99]
                rounded-[8px]
                bg-zinc-500/20
                p-1
                justify-center
                backdrop-blur-md
                items-center
            '>
                <div className='
                    flex
                    flex-row
                    justify-center
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

                    <SocialButton link={'https://ko-fi.com/dickey'} icon={<SiKofi style={{ 
                        height: '2rem',
                        width: '2rem',
                        color: '#d1d5db',
                    }} />} />
                </div>
            </div>
        </div>
    )
}