<script>
	import "./_global.pcss";
	import Nav from "$components/Nav.svelte";
</script>


<Nav />
<div>
	<slot />
</div>

<style>
	div {
		@apply w-full bg-gray-50;
	}
</style>