import BlogDate from "../blogDate";

export default function BlogAuthor({ name, date }: { name: string, date: string }) {
    return (
        <div className='
            flex
            flex-row
            items-center
            mb-2
        '>
            <img src='https://media.licdn.com/dms/image/C4E03AQGlkLlOK5Y6ng/profile-displayphoto-shrink_200_200/0/1655788500792?e=1689811200&v=beta&t=NpD_68AInoNuo3eIBZshKxwVdUFXOM362RDeRRHdHJk' 
            className="
                w-14
                max-h-14
                aspect-auto
                rounded-full
                mr-2
            " />
            
            <div className='
                flex
                flex-col
                justify-center
                items-start
            '>
                <h1 className='
                    text-2xl
                    font-bold
                    text-zinc-400
                '>
                    {name}
                </h1>
                <BlogDate dateString={date} />
            </div>

        </div>
    )
}