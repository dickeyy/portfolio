import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Page() {
    const resumeLink = "https://dickey.notion.site/Kyle-Dickey-Junior-Fullstack-Sofware-Engineer-8ddbb7c5642f45a3bec4f144a542596c"
    const router = useRouter()

    // redirect to resume
    useEffect(() => {
        router.push(resumeLink)
    }, [])

    return (
        <main className={`flex min-h-screen flex-col justify-center items-center px-10 `}>

    	</main>
    )
}