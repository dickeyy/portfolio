import Head from "next/head";

export default function SEOHead({ title }: { title: string}) {

    return (
        <Head>
            <title>{title}</title>
			<meta name="description" content="Kyle Dickey - Freelance Developer / College Student" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="https://dickey.gg/logo.png" />
            <meta name="theme-color" content="#d946ef" />

			{/* //   <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content="https://dickey.gg" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="dickey" />
			<meta property="og:description" content="Kyle Dickey - Freelance Developer / College Student" />
			<meta property="og:image" content="https://dickey.gg/logo.png" />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_small_image" />
			<meta property="twitter:domain" content="dickey.gg" />
			<meta property="twitter:url" content="https://dickey.gg" />
			<meta name="twitter:title" content="Kyle Dickey - Freelance Developer / College Student" />
			<meta name="twitter:description" content="Kyle Dickey - Freelance Developer / College Student" />
			<meta name="twitter:image" content="https://dickey.gg/logo.png" />
        </Head>
    )

}