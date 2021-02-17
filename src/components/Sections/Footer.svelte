<script>
    import LinkList from "./Footer/LinkList.svelte";
</script>

<main>
    <div>
        <svg viewBox="0 0 271 213" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="m97.034 163 162.58-162.58 10.974 24.513-113.83 113.74h94.086l12.656 24.326h-166.47z"/>
            <path d="m224.68 0h-167.68l-25.02 25h167.7l25-25z"/>
            <path d="M30.4026 74.3255L19 50L174.679 50L11.6789 213H11.541L0 188.56L114.324 74.3255H30.4026Z"/>
            <path d="m218.48 213h-171.45l25-25h171.47l-25.02 25z"/>
        </svg>
        <h3>© Zachary Myers 2021</h3>
        <LinkList />
    </div>
</main>

<style>
    main {
        @apply w-full;
    }

    div {
        @apply lg:w-4/6 mx-auto p-10;
    }

    svg {
        @apply w-8 h-8 text-gray-400 my-auto float-right;
    }

    h3 {
        @apply uppercase font-semibold text-big-stone-400;
    }
</style>