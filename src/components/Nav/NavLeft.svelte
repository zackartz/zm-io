<script lang="ts">
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    let show: boolean = false;

    onMount(() => {
        show = true;
    })
</script>

{#if show}
    <div transition:fade>
        <a href="/">
            <svg viewBox="0 0 271 213" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="m97.034 163 162.58-162.58 10.974 24.513-113.83 113.74h94.086l12.656 24.326h-166.47z"/>
                <path d="m224.68 0h-167.68l-25.02 25h167.7l25-25z"/>
                <path d="M30.4026 74.3255L19 50L174.679 50L11.6789 213H11.541L0 188.56L114.324 74.3255H30.4026Z"/>
                <path d="m218.48 213h-171.45l25-25h171.47l-25.02 25z"/>
            </svg>
        </a>
    </div>
{/if}


<style>
    div {
        @apply flex float-left text-center p-4;
    }

    a {
        @apply my-auto hover:bg-gray-50 transition-colors duration-150 text-black hover:text-cinnabar-700;
    }

    svg {
        @apply w-6 h-6 m-3.5;
    }
</style>