export default function ButtonOutline({ text, link, leftIcon, color }: { text: string, link: string, leftIcon?: any, color: string }) {

    return (
        <div>
            <a href={link} target="_blank">
                <button className={`
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
                    text-${color}-300
                    border-2
                    border-${color}-300
                    text-lg
                    font-bold
                    hover:bg-${color}-400/10
                    transition-all
                    duration-500
                    ease-in-out
                `}>
                    {leftIcon}
                    <p>{text}</p>
                </button>
            </a>
        </div>
    )

}