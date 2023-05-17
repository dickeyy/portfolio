export default function SocialButton(props : any) {
    return (
        <div className='
            flex
            p-5
        '>
            <a href={props.link} target='_blank' rel='noreferrer' className="
                flex
                justify-center
                items-center
                w-[5rem]
                h-[5rem]
                rounded-full
                shadow-md
                hover:shadow-lg
                transition
                duration-300
                ease-in-out 
            ">
                {props.icon}
            </a>
        </div>
    )
}