export default function ButtonSolid({ text, link, leftIcon }: { text: string, link: string, leftIcon?: any }) {

    return (
        <div>
            <a href={link} target="_blank">
                <button className='
                    flex
                    flex-row
                    justify-center
                    items-center
                    rounded-[8px]
                    p-3
                    pr-5
                    pl-5
                    bg-fuchsia-400
                    m-2
                    text-slate-900
                    text-lg
                    font-bold
                    hover:bg-fuchsia-400/75
                    transition-all
                    duration-500
                    ease-in-out
                '>
                    {leftIcon}
                    <p>{text}</p>
                </button>
            </a>
        </div>
    )

}