import { FaEnvelope, FaFilePdf } from "react-icons/fa"
import ButtonOutline from "../buttonOutline"
import Skills from "../skills"

export default function AboutMe() {
    return (
        <div className='
            mt-20
            flex
            flex-col
            justify-center
            items-center
            w-screen
            text-center
        '>
            <div className='
                mb-20
                w-[95vw]
                sm:w-[85vw]
                rounded-[8px]
                bg-zinc-500/20
                justify-center
                items-center
                flex
                flex-col
                p-10
            '>
                <div className='
                    flex
                    flex-col
                    sm:flex-row
                    justify-center
                    items-center
                '>
                    <img src='https://media.licdn.com/dms/image/C4E03AQGlkLlOK5Y6ng/profile-displayphoto-shrink_200_200/0/1655788500792?e=1689811200&v=beta&t=NpD_68AInoNuo3eIBZshKxwVdUFXOM362RDeRRHdHJk' className="
                        w-[200px]
                        h-[200px]
                        aspect-auto
                        rounded-full
                        sm:mr-10
                        mb-5
                    " />
                    <p className='
                        text-lg
                        leading-6
                        font-code
                        sm:text-left
                        mb-5
                    '>
                        Born and raised near Denver, Colorado. I am a second-year Computer Science student at Colorado State University (sko rams). Aside from coding, I also enjoy building Legos, music, SCUBA diving, and playing chess (don't ask my Elo it's bad). I am a full stack dev, however, I have a special place in my heart for backend work. Currently looking for an internship in Fort Collins CO or remote!
                    </p>
                </div>
                {/* <p className='
                    text-lg
                    leading-6
                    font-code
                '>
                    I am currently remaking <a href="https://lastag.xyz" target="_blank" className='
                        text-fuchsia-400
                        hover:text-fuchsia-500
                        transition-all
                        duration-500
                        ease-in-out
                    '>LasTag</a>, a Linktree clone but for gamers. */}
                {/* </p> */}
                
                <h1 className='
                    text-4xl
                    font-bold
                    mb-2
                    mt-5
                '>
                    Skills
                </h1>
                <Skills 
                    backendSkills={['Node.JS', 'Express', 'MongoDB', 'MySQL', 'Python', 'GoLang', 'Redis', 'GraphQL', 'REST', 'JWT', 'HTTP', 'DNS', 'SMTP', 'PostgreSQL', 'S3', 'EC2', 'Rust']}
                    frontendSkills={['React.JS', 'Next.JS', 'TS', 'TailwindCSS', 'ChakraUI', 'HTML', 'CSS', 'SVG', 'Electron', 'React Native', 'Swift']}
                    otherSkills={['Google Cloud', 'AWS', 'Vercel', 'Git', 'Docker', 'Linux', 'Windows', 'MacOS', 'Nginx', 'Jest', 'CI/CD','Figma', 'Photoshop', 'Illustrator']}
                />
                <br /> <br />

                <div className='
                    flex
                    flex-row
                    justify-center
                    items-center
                '>
                    <ButtonOutline text="General Resume" link="/Kyle-Dickey-Resume.pdf"
                        leftIcon={<FaFilePdf style={{
                            height: '1.5rem',
                            width: '1.5rem',
                            color: '#f0abfc',
                            marginRight: '0.5rem',
                    }} />}/>
                    <div className='w-5'></div>
                    <ButtonOutline text="Contact Me" link="mailto:kyle@dicey.gg"
                        leftIcon={<FaEnvelope style={{
                            height: '1.5rem',
                            width: '1.5rem',
                            color: '#f0abfc',
                            marginRight: '0.5rem',
                    }} />}/>
                </div>
            </div>
        </div>
    )
}