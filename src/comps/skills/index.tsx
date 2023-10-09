import ToolTag from "../toolTag"

export default function Skills({ backendSkills, frontendSkills, otherSkills } : { backendSkills: string[], frontendSkills: string[], otherSkills: string[] }) {
    return(
        <div className='
            grid 
            gap-4 
            grid-cols-1
            grid-rows-1
            sm:grid-cols-2
            sm:grid-rows-1
            md:grid-cols-3 
            md:grid-rows-1
        '>

            <div id='backend' className="
                flex
                flex-col
                bg-zinc-500/20
                rounded-[8px]
                p-5
            ">
                <h1 className='
                    text-3xl
                    font-bold
                    mb-2
                    font-code
                    text-center
                '>
                    Backend
                </h1>
                <div className='
                    flex
                    flex-row
                    items-start
                    flex-wrap
                '>
                    {backendSkills.map((skill) => {
                        return (
                            <ToolTag name={skill} color={'#d1d5db'}/>
                        )
                    })}
                </div>
            </div>

            <div id='frontend' className="
                flex
                flex-col
                bg-zinc-500/20
                rounded-[8px]
                p-5
            ">
                <h1 className='
                    text-3xl
                    font-bold
                    mb-2
                    font-code
                    text-center
                '>
                    Frontend
                </h1>
                <div className='
                    flex
                    flex-row
                    items-start
                    flex-wrap
                '>
                    {frontendSkills.map((skill) => {
                        return (
                            <ToolTag name={skill} color={'#d1d5db'}/>
                        )
                    })}
                </div>
            </div>

            <div id='other' className="
                flex
                flex-col
                bg-zinc-500/20
                rounded-[8px]
                p-5
            ">
                <h1 className='
                    text-3xl
                    font-bold
                    mb-2
                    font-code
                    text-center
                '>
                    Other
                </h1>
                <div className='
                    flex
                    flex-row
                    items-start
                    flex-wrap
                '>
                    {otherSkills.map((skill) => {
                        return (
                            <ToolTag name={skill} color={'#d1d5db'}/>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}