export default function ButtonOutline({ text, link, leftIcon }: { text: string, link: string, leftIcon?: any }) {

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
                    m-1
                    bg-transparent
                    text-fuchsia-300
                    border-2
                    border-fuchsia-300
                    text-lg
                    font-bold
                    hover:bg-fuchsia-400/10
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