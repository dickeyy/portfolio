import { FaEnvelope, FaFile, FaFilePdf } from "react-icons/fa"
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
                sm:w-[90vw]
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
                    <img src='/images/me.JPG' className="
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
                        Born and raised near Denver, Colorado. I am a second-year Computer Science student at Colorado State University. Aside from coding, I also enjoy movies, music, SCUBA diving, and playing chess (don't ask my Elo it's bad). I am a full stack dev, however, I have a special place in my heart for backend work. I am currently looking for a summer 2024 internship, so if you're hiring, please reach out!
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className='
                        text-4xl
                        font-semibold
                    '>
                        Skills
                    </h1>
                    <Skills 
                        backendSkills={['Node.JS', 'Express', 'MongoDB', 'MySQL', 'Python', 'GoLang', 'Redis', 'GraphQL', 'REST', 'JWT', 'HTTP', 'DNS', 'SMTP', 'PostgreSQL', 'S3', 'R2', 'Java', 'GoLang']}
                        frontendSkills={['React.JS', 'Next.JS', 'TS', 'TailwindCSS', 'ChakraUI', 'HTML', 'CSS', 'SVG', 'Electron', 'React Native', 'Swift', 'Expo']}
                        otherSkills={['Google Cloud', 'AWS', 'Vercel', 'Git', 'Docker', 'Linux', 'Windows', 'MacOS', 'Nginx', 'Jest', 'CI/CD','Figma', 'Photoshop', 'Illustrator']}
                    />

                    <div className='
                        flex
                        mt-5
                        flex-row
                        justify-center
                        items-center
                    '>
                        <ButtonOutline text="General Resume" link="/resume"
                            leftIcon={<FaFile style={{
                                height: '1.5rem',
                                width: '1.5rem',
                                color: '#f0abfc',
                                marginRight: '0.5rem',
                        }} />}/>
                        <div className='w-5'></div>
                        <ButtonOutline text="Contact Me" link="mailto:kyle@dickey.gg"
                            leftIcon={<FaEnvelope style={{
                                height: '1.5rem',
                                width: '1.5rem',
                                color: '#f0abfc',
                                marginRight: '0.5rem',
                        }} />}/>
                    </div>
                    {/* <ButtonOutline text="Meet With Me" link="mailto:kyle@dicey.gg"
                        leftIcon={<FaEnvelope style={{
                            height: '1.5rem',
                            width: '1.5rem',
                            color: '#f0abfc',
                            marginRight: '0.5rem',
                    }} />}/> */}
                </div>
                <div className="flex flex-col gap-4 mt-10 w-full">
                    <h1 className='
                            text-2xl
                            font-bold
                            text-center
                        '>
                            Last seen working on
                    </h1>
                    <div className='
                        flex
                        flex-col
                        justify-center
                        items-center
                        bg-zinc-500/20
                        w-full
                        p-5
                        rounded-[8px]
                    '>
                        <p className='
                            text-lg
                            leading-6
                            font-code
                            text-center
                        '>
                            An app to connect with people who get you. Find your next friend group on <span className='font-bold text-fuchsia-500 hover:underline'><a href={"https://outgone.app"} target="_blank">Outgone</a></span>.
                        </p>

                        <p className='
                            text-lg
                            leading-6
                            font-code
                            text-center
                            mt-2
                        '>
                            A way for developers to make money from fans of their work, it's called <span className='font-bold text-fuchsia-500 hover:underline'><a href={"https://tip.dev"} target="_blank">tip.dev</a></span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}