export default function BlogLayout({ children }: { children: any }) {
    return (
        <div className='
            flex 
            dark
            flex-col
            overflow-x-hidden
            h-screen
            p-10
            w-[100vw]
        '>
            {children}
        </div>
    )
}
