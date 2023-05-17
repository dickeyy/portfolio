export default function SocialButton(props : any) {
    return (
        <div className='
            flex
            p-1.5
        '>
            <a href={props.link} target='_blank' rel='noreferrer' >
                <div className="
                    flex
                    justify-center
                    items-center
                    p-2
                    rounded-[8px]
                    bg-zinc-500/20
                    backdrop-blur-[10px]
                    drop-shadow-zinc-500/20
                    hover:bg-zinc-700/30
                    transition
                    duration-200
                    ease-in-out
                ">
                    {props.icon}
                </div>
            </a>
        </div>
    )
}