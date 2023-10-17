import { useState } from "react";
import ProjectBig from "../projectBig";
import ProjectSmall from "../projectSmall";

export default function Projects() {

	const [viewMore, setViewMore] = useState(false)

	const [projects, setProjects] = useState({
		big: [
			{
				title: "tip.dev",
				description: "A platform for developers to get paid for their work. I am currently working on this project, and I am very excited about it. I plan to launch it by December 2023.",
				image: "/images/projects/tipdev-project.png",
				link: "https://tip.dev",
				id: "tipdev",
				linkLabel: "Website",
				github: "https://github.com/tipdotdev",
				tools: ["Next.JS", "TailwindCSS", "Stripe API", "MongoDB", "REST API", "Vercel", "Redis", "Railway"],
			},

			{
				title: "Hansumfella Merch",
				description: "A merch website for a Twitch streamer I like watching. I was commissioned to make the website by the streamer, it was a fun and very successful project.",
				image: "/images/projects/hansumfella-project.png",
				link: "https://hansumfella.com",
				id: "hansumfella-merch",
				linkLabel: "Website",
				github: "https://github.com/dickeyy/hansumfella-website",
				tools: ["Next.JS", "TailwindCSS", "Shopify API", "Twitch API", "GraphQL", "REST API", "Vercel"],
			},
			
			{
				title: "LasTag",
				description: "The last gamer tag you'll ever need. Basically Linktree for gamers. This was one of my first ever web apps, and I recently finished rebuilding the core functionality of it. Sign in with demo@dickey.gg and password: lastagdemo.",
				image: "/images/projects/lastag-project.png",
				link: "https://lastag.xyz",
				id: "lastag",
				linkLabel: "Website",
				github: "https://github.com/dickeyy/lastag",
				tools: ["Next.JS", "TailwindCSS", "Vercel", "MongoDB", "REST API", "Clerk", "Stripe"],
			}
		],
		small: [
			{
				title: "Seeds",
				link: "https://seedsbot.xyz",
				id: "seeds",
				description: "A very popular multi-purpose Discord bot.",
				linkLabel: "Website",
				github: "https://github.com/dickeyy/seeds-bot",
				tools: ["Node.JS", "Discord API", "MongoDB", "Redis", "REST API"],
			},
			{
				title: "Travel Log",
				link: "https://travel.dickey.gg",
				id: "travel-log",
				description: "A website to track all the places you've visited. Sign in with demo@dickey.gg and password: travellogdemo",
				linkLabel: "Website",
				github: "https://github.com/dickeyy/travel-log",
				tools: ["React.JS", "ChakraUI", "MongoDB", "Google Maps"],
			},
			{
				title: "Alias",
				link: "https://alias.dickey.gg",
				id: "alias",
				description: "A modern way to play a game my family and I made.",
				linkLabel: "Website",
				github: "https://github.com/dickeyy/alias",
				tools: ["Next.JS", "TailwindCSS", "Firebase", "Vercel"],
			},
			{
				title: "Tiktok Scraper",
				id: "tiktok-scraper",
				description: "A small project I made for HansumFella to scrape follower counts from a given list of users.",
				linkLabel: "GitHub",
				github: "https://github.com/dickeyy/tiktok-scraper",
				tools: ["Node.JS", "Cheerio", "Redis"],
			},
			{
				title: "Mirky",
				link: "https://mirky.app",
				id: "mirky",
				description: "(Rebuilding right now) A developer-first analytics platform.",
				linkLabel: "Website",
				github: "https://github.com/MirkyAnalytics",
				tools: ["React", "ChakraUI", "Vercel", "MongoDB"],
			},
			{
				title: "Wordle Clone",
				link: "https://wordle.dickey.gg",
				id: "wordle",
				description: "A realtime multiplayer clone of the popular game Wordle.",
				linkLabel: "Website",
				github: "https://github.com/dickeyy/wordle-clone",
				tools: ["HTML", "CSS", "Firebase"],
			},
			{
				title: "Kyle + Renee",
				link: "https://kyleandrenee.com",
				id: "kylerenee",
				description: "A website I that made for my girlfriend and I.",
				linkLabel: "Website",
				github: "https://github.com/dickeyy/kyle-and-renee",
				tools: ["Next.JS", "TailwindCSS", "Spline"],
			},
			{
				title: "Spotinder",
				link: "https://spotinder.dickey.gg",
				id: "spotinder",
				description: "A website to find new music for Spotify. Similar to Tinder, but for music.",
				linkLabel: "Website",
				github: "https://github.com/dickeyy/spotinder",
				tools: ["React.JS", "Spotify API", "MongoDB"],
			},
			{
				title: "Spot Higher Lower",
				link: "https://sphl.dickey.gg",
				id: "sphl",
				description: "A website to check your music knowledge, similar to the game Higher Lower.",
				linkLabel: "Website",
				github: "https://github.com/dickeyy/spotify-higher-lower",
				tools: ["React.JS", "Spotify API", "MongoDB"],
			},
			{
				title: "Dismegle Chat Logs",
				link: "https://dismegle.com",
				id: "dismegle-logs",
				description: "UI for historical chat logs from the popular Discord server Dismegle.",
				linkLabel: "Website",
				github: "https://github.com/dismegle/website",
				tools: ["Next.JS", "Vercel", "Discord API"],
			},
			{
				title: "Dismegle AI",
				id: "dismegle-ai",
				description: "A series of AI models for moderation on Dismegle.",
				linkLabel: "Website",
				github: "https://github.com/dickeyy/dismegle-ai",
				tools: ["Brain.JS", "PyTorch", "Discord API"],
			}
		]
	})

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
					
					{projects.big.map((project, index) => (
						<ProjectBig
							title={project.title}
							description={project.description}
							image={project.image}
							link={project.link}
							id={project.id}
							linkLabel={project.linkLabel}
							github={project.github}
							tools={project.tools}
						/>
					))}

				</div>
				{/* Create a grid of small projects */}
				{viewMore ?
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
						md:w-[90vw]
					'>

						{projects.small.map((project, index) => (
							<ProjectSmall
								title={project.title}
								link={project.link}
								id={project.id}
								description={project.description}
								linkLabel={project.linkLabel}
								github={project.github}
								tools={project.tools}
							/>
						))}

					</div>
				: 
					<div className='
						grid
						gap-4
						grid-cols-1
						grid-rows-1
						sm:grid-cols-2
						sm:grid-rows-1
						md:grid-cols-3 
						md:grid-rows-1
						w-[95vw]
						md:w-[90vw]
					'>
						
						{projects.small.slice(0, 3).map((project, index) => (
							<ProjectSmall
								title={project.title}
								link={project.link}
								id={project.id}
								description={project.description}
								linkLabel={project.linkLabel}
								github={project.github}
								tools={project.tools}
							/>
						))}
						
					</div>

				}

				<a onClick={() => setViewMore(!viewMore)} className='
					cursor-pointer
					text-2xl
					text-zinc-500
					text-center
					mt-10
					mb-2
					transition-all
					duration-300
					hover:text-fuchsia-300
				'>
					{viewMore ? 'View Fewer' : 'View More'}
				</a>

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