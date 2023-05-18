import React from "react"

export default function HeroHome() {
    const [age, setAge] = React.useState('0')

    React.useEffect(() => {
        // make an interval to update the age every 100ms
        const interval = setInterval(() => {
            // get the birthdate
            const birthdate = new Date('2004-05-02')
            // get the current date
            const currentDate = new Date()
            // get the difference between the two dates
            const difference = currentDate.getTime() - birthdate.getTime()
            // convert the difference to years
            const years = difference / (1000 * 60 * 60 * 24 * 365.25)
            // round the years to 7 decimal places but keep it as a string
            const roundedYears = years.toFixed(7)
            // set the age
            setAge(roundedYears)
        }, 10)
        // return a function to clear the interval
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="
            flex 
			h-screen 
			w-screen 
			justify-center 
			content-center 
			items-center 
			flex-col
        ">
            <div className='
				bg-[url("/svg/noise.svg")]
				bg-blend-overlay
				bg-opacity-10
				bg-black
				bg-fixed
				z-50
				absolute
				w-screen
				h-screen
			'></div>

			<div className='
				relative
				flex
				flex-col
				justify-center
				items-center
                w-screen
                h-screen
			'>
				<div className='
					absolute
					w-[20rem]
					sm:w-[30rem]
					sm:h-[30rem]
					h-[20rem]
					bg-gradient-to-r from-cyan-500 to-pink-500
					rounded-full
					blur-[150px]
					animate-blob
				' /> 

				<div className='
					flex
					flex-col
					z-10
					text-center sm:text-left
					pl-5
                    align-
				'>
					<p className='text-fuchsia-300 font-code text-xl mb-2'>Hello, my name is</p>
					<h1 className='text-7xl sm:text-9xl italic font-bold'>Kyle Dickey</h1>
                    <br />

                    
				</div>
                <div
                    className="
                        flex
                        flex-col
                        z-10
                        text-left
                        text-xl 
                        font-code
                        text-zinc-300
                        pl-5
                        pr-5
                        w-[20rem]
                        sm:w-[40rem]
                        mt-5
                    "
                >
                    <p className="text-zinc-300">{"{"}</p>
                    <div className="
                        flex
                        flex-col
                        pl-5
                        text-left
                    ">
                        <p>"age": {age},</p>
                        <p>"occupation": "Freelance dev / college student",</p>
                        <p>"location": "Denver, Colorado"</p>
                    </div>
                    <p className="text-zinc-300">{"}"}</p>
                </div>
			</div>
        </div>
    )
}