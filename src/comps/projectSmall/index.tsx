import { BiLinkExternal } from "react-icons/bi"
import ButtonSolid from "../ButtonSolid"
import ButtonOutline from "../buttonOutline"
import ToolTag from "../toolTag"
import { FaGithub } from "react-icons/fa"

export default function ProjectSmall({ title, description, link, linkLabel, github, id, tools }: { title: string, description: string, link: string, linkLabel: string, github: string, id: string, tools: string[] }) {

    return (
        <div className="
            flex
            flex-col
            md:flex-row
            rounded-[8px]
            bg-zinc-500/20
            p-5
            text-left
        "> 

            <div className="
                flex
                flex-col
                pl-3
                pr-3
            ">
                <h1 className='
                    text-4xl
                    font-bold
                    mb-3
                    text-center
                '>
                    {title}
                </h1>
                <p className='
                    text-lg
                    leading-6
                    font-code
                    text-center
                    mb-2
                '>
                    {description}
                </p>
                <div className='
                    flex
                    flex-row
                    justify-center
                    items-center
                    flex-wrap
                    mb-2
                '>
                    {tools.map((tool) => {
                        return (
                            <ToolTag name={tool} color="fuchsia" />
                        )
                    })
                    }

                </div>
                <div className='
                    flex
                    flex-row
                    justify-center
                    items-center
                    flex-wrap
                '>
                    <ButtonSolid text={linkLabel} link={link} color={'fuchsia'} 
                        leftIcon={<BiLinkExternal style={{
                            height: '1.5rem',
                            width: '1.5rem',
                            color: '#0f172a',
                            marginRight: '0.5rem',
                        }} />}
                    />
                    <ButtonOutline text={'GitHub'} link={github} color={'fuchsia'}
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