import { FaGithub } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"


import ButtonSolid from "../ButtonSolid"
import ToolTag from "../toolTag"
import ButtonOutline from "../buttonOutline"

export default function ProjectBig(
    { title, description, image, link, id,linkLabel, github, tools }: 
    { title: string, description: string, image: string, link: string, id: string, linkLabel: string, github: string, tools: string[] }) {
    return(
        <div className="
            flex
            flex-col
            md:flex-row
            rounded-[8px]
            bg-zinc-500/20
            p-5
            w-[95vw]
            md:w-[65vw]
            text-left
            mb-[5rem]
        "> 
            <img src={image} className="
                aspect-video
                w-[700px]
                rounded-[8px]
                mb-5
                md:mb-0
            " />
            <div className="
                flex
                flex-col
                pl-5
                pr-5
            ">
                <h1 className='
                    text-4xl
                    font-bold
                    mb-2
                '>
                    {title}
                </h1>
                <p className='
                    text-lg
                    leading-6
                    font-code
                '>
                    {description}
                </p>
                
                <br></br>
                <div className='
                    flex
                    flex-row
                    justify-center
                    items-center
                    flex-wrap
                '>
                    {tools.map((tool) => {
                        return (
                            <ToolTag name={tool} color={'#d1d5db'}/>
                        )
                    })
                    }
                </div>
                <br></br>
                <div className='
                    flex
                    flex-row
                    justify-center
                    items-center
                    flex-wrap
                '>
                    <ButtonSolid text={linkLabel} link={link}
                        leftIcon={<BiLinkExternal style={{
                            height: '1.5rem',
                            width: '1.5rem',
                            color: '#0f172a',
                            marginRight: '0.5rem',
                        }} />}
                    />
                    <ButtonOutline text={'GitHub'} link={github}
                        leftIcon={<FaGithub style={{
                            height: '1.5rem',
                            width: '1.5rem',
                            color: '#f0abfc',
                            marginRight: '0.5rem',
                        }} />}
                    />
                </div>
                <a href={'/projects/' + id} className='
                    mt-2
                    text-lg
                    text-zinc-300
                    text-center
                    hover:text-fuchsia-300
                    hover:underline
                    transition-all
                    duration-300
                    ease-in-out
                '>
                    Read More
                </a>
            </div>
        </div>
    )
}