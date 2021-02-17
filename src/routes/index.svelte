<script>
	import Button from "$components/Btns/Button.svelte";
	import ButtonFilled from "$components/Btns/ButtonFilled.svelte";
	import Card from "$components/Card.svelte";
	import Footer from "$components/Sections/Footer.svelte";
	import Projects from "$components/Sections/Projects.svelte";
</script>

<svelte:head>
	<title>Zack Myers</title>
</svelte:head>

<main>
	<Card>
		<p>Welcome!</p>
		<h1>I’m zack — a
			developer from 
			Honolulu, Hawaii.
		</h1>
		<div>
			<Button href="/contact">
				Contact
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</Button>
			<ButtonFilled href="/contact">
				See My Work
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</ButtonFilled>
		</div>
	</Card>
</main>
<h2>See More</h2>
<svg xmlns="http://www.w3.org/2000/svg" class="down" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
</svg>
<Projects />
<Footer />

<style>
	main {
		@apply grid bg-gray-50 mb-16 min-h-screen justify-center w-full content-center;
	}

	* {
		@apply z-10;
	}

	h1 {
		@apply text-4xl relative z-10 md:text-5xl lg:text-6xl lg:w-3/4 text-left tracking-tight text-transparent py-4 pr-1 mr-auto bg-clip-text bg-gradient-to-tl from-big-stone-500 to-indigo-500 font-black;
	}

	svg {
		@apply w-4 ml-2 h-4 my-auto;
	}

	p {
		@apply text-gray-500 uppercase text-lg font-semibold mt-6;
	}

	div {
		@apply flex relative mt-4;
	}

	.down {
		@apply w-9 h-9 -mt-32 mb-32 text-big-stone-400 mx-auto ;
	}

	h2 {
		@apply text-center -mt-32 mb-32 uppercase text-sm font-semibold text-big-stone-400;
	}
</style>