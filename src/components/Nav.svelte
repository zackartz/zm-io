<script>
    import NavLeft from "./Nav/NavLeft.svelte";
    import NavRight from "./Nav/NavRight.svelte";
</script>

<div>
    <NavLeft />
    <NavRight />
</div>

<style>
    div {
        @apply absolute w-full bg-white;
    }
</style>