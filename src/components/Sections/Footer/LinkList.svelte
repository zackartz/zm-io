<script lang="ts">
    import links from "../../../routes/nav";
</script>

<div>
    {#each links as l}
        <a href={l.link}>{l.title}</a>
    {/each}
</div>

<style>
    div {
        @apply flex-col mt-4 flex;
    }

    a {
        @apply font-semibold hover:text-indigo-500 transition-colors duration-150 text-sm tracking-tight
    }
</style>