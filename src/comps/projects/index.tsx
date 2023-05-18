import ProjectBig from "../projectBig";
import ProjectSmall from "../projectSmall";

export default function Projects() {
    return (
        <div className='
				flex
				flex-col
				justify-center
				items-center
				w-screen
				text-center
				p-10
				mb-20
			'>
				<h1 className='
					text-5xl
					font-bold
					mb-4
				'>
					Projects
				</h1>
				<p className='
					text-xl
					text-zinc-400
					font-code
					mb-10
				'>
					In no particular order...
				</p>
				<div className='
					flex
					flex-row
					justify-center
					items-center
					flex-wrap
				'>
					<ProjectBig 
						title={'Hansumfella Website'}
						description={'A merch website for a Twitch streamer I like watching. I was commisioned to make the website by the streamer, it was a fun and very successful project.'}
						image={'/images/projects/hansumfella-project.png'}
						link={'https://hansumfella.com'}
						id={'hansumfella-merch'}
						linkLabel={'Website'}
						github={'https://github.com/dickeyy/hansumfella-website'}
						tools={['Next.JS', 'ChakraUI', 'Shopify API', 'Twitch API', 'GraphQL', 'REST API', 'Vercel']}
					/>
					
					<ProjectBig 
						title={'Seeds'}
						description={'The easiest bot to use on Discord. Seeds is a multi-purpose bot with a focus on moderation and utility. Currently it is in over 270 servers and has over 100,000 unique users.'}
						image={'/images/projects/seeds-project.png'}
						link={'https://seedsbot.xyz'}
						id={'seeds'}
						linkLabel={'Website'}
						github={'https://github.com/dickeyy/seeds-bot'}
						tools={['Node.JS', 'Discord.JS', 'MongoDB', 'Redis', 'Next.JS', 'ChakraUI', 'NextAuth', 'Google Cloud', 'Vercel']}
					/>

					<ProjectBig 
						title={'Mirky Analytics'}
						description={'A developer first analytics platform, focused on saftey and security. This app is more of a proof of concept, however the main features work and I am proud of it.'}
						image={'/images/projects/mirky-project.png'}
						link={'https://mirky.app'}
						id={'mirky'}
						linkLabel={'Website'}
						github={'https://github.com/MirkyAnalytics'}
						tools={['React.JS', 'ChakraUI', 'Websockets', 'MongoDB', 'AWS', 'Node.JS', 'REST API', 'Node Package', 'Vercel']}
					/>
				</div>
				{/* Create a grid of small projects */}
				<div className='
					grid 
					gap-4 
					grid-cols-1
					grid-rows-1
					sm:grid-cols-2
					sm:grid-rows-2
					md:grid-cols-3 
					md:grid-rows-3
					w-[95vw]
           			md:w-[85vw]
				'>

					<ProjectSmall 
						title={'Travel Log'}
						link={'https://travel.dickey.gg'}
						id={'travel-log'}
						description="A website to track all the places you've visited."
						linkLabel={'Website'}
						github={'https://github.com/dickeyy/travel-log'}
						tools={['React.JS', 'ChakraUI', 'MongoDB', 'Google Maps']}
					/>

					<ProjectSmall 
						title={'Wordle Clone'}
						link={'https://wordle.dickey.gg'}
						id={'wordle'}
						description="A realtime multiplayer clone of the popular game Wordle."
						linkLabel={'Website'}
						github={'https://github.com/dickeyy/wordle-clone'}
						tools={['HTML', 'CSS', 'Firebase']}
					/>

					<ProjectSmall 
						title={'Kyle + Renee'}
						link={'https://kyleandrenee.com'}
						id={'kylerenee'}
						description="A website I that made for my girlfriend and I."
						linkLabel={'Website'}
						github={'https://github.com/dickeyy/kyle-and-renee'}
						tools={['React.JS', 'Spline 3D', 'ChakraUI', 'Vercel']}
					/>

					<ProjectSmall 
						title={'Spotinder'}
						link={'https://spotinder.dickey.gg'}
						id={'spotinder'}
						description="A website to find new music for Spotify. Similar to Tinder, but for music."
						linkLabel={'Website'}
						github={'https://github.com/dickeyy/spotinder'}
						tools={['React.JS', 'Spotify API', 'MongoDB']}
					/>

					<ProjectSmall 
						title={'Spot Higher Lower'}
						link={'https://sphl.dickey.gg'}
						id={'sphl'}
						description="A website to check your music knowledge, similar to the game Higher Lower."
						linkLabel={'Website'}
						github={'https://github.com/dickeyy/spotify-higher-lower'}
						tools={['React.JS', 'Spotify API', 'MongoDB']}
					/>

					<ProjectSmall 
						title={'Dismegle Chat Logs'}
						link={'https://dismegle.com'}
						id={'dismegle-logs'}
						description="UI for historical chat logs from the popular Discord server Dismegle."
						linkLabel={'Website'}
						github={'https://github.com/dismegle/website'}
						tools={['Next.JS', 'Vercel', 'Discord API']}
					/>

					<ProjectSmall 
						title={'Dismegle AI'}
						link={'https://dismegle.com'}
						id={'dismegle-ai'}
						description="A series of AI models for moderation on Dismegle."
						linkLabel={'Website'}
						github={'https://github.com/dickeyy/dismegle-ai'}
						tools={['Brain.JS', 'PyTorch', 'Discord API']}
					/>

					<ProjectSmall 
						title={'LasTag'}
						link={'https://lastag.xyz'}
						id={'lastag'}
						description="The last gamer tag you'll ever need. Basically Linktree for gamers."
						linkLabel={'Website'}
						github={'https://github.com/dickeyy/lastag'}
						tools={['Next.JS', 'ChakraUI', 'Vercel', 'MongoDB']}
					/>

					<ProjectSmall 
						title={'Alias'}
						link={'https://aliasgame.xyz'}
						id={'lastag'}
						description="A modern way to play a game my family and I made."
						linkLabel={'Website'}
						github={'https://github.com/dickeyy/lastag'}
						tools={['Firebase', 'React.JS']}
					/>

				</div>

				<h1
					className='
						text-3xl font-bold
						mt-10
						mb-2
					'
				>
					And so, so many more...
				</h1>

				<h1
					className='
						text-2xl 
						font-code
					'
				>
					Check my GitHub for all of them.
				</h1>

			</div>
    )
}