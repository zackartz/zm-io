<script lang="ts">
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    import links from "../../routes/nav";

    let show: boolean = false;
    let delay: number = 200;

    onMount(() => {
        show = true;
    });

    function getDelay() {
        return (delay += 200);
    }
</script>

<div>
    {#if show}
        {#each links as l, i}
            <a
                class="link"
                transition:fade={{ delay: getDelay() }}
                href={l.link}>{l.title}</a
            >
        {/each}
    {/if}
</div>

<style>
    div {
        @apply flex float-right text-center p-4;
    }

    a {
        @apply p-4 mx-2 my-auto hover:text-cinnabar-700 uppercase text-sm font-semibold hover:bg-gray-50 transition-colors duration-150;
    }
</style>
