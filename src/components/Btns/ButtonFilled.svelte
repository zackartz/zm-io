<script lang="ts">
    export let href: string;
</script>

<a {href}>
    <slot /> 
</a>

<style>
    a {
        @apply text-white hover:bg-indigo-400 transition-colors duration-150 flex mr-2 p-3 px-6 border-2 hover:border-indigo-400 border-indigo-500 bg-indigo-500 mt-4 rounded-md;
    }
</style>