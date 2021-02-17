<script lang="ts">
    export let href: string;
</script>

<a {href}>
    <slot /> 
</a>

<style>
    a {
        @apply text-indigo-500 hover:bg-blue-50 transition-colors duration-150 flex mr-2 p-3 px-6 border-2 border-indigo-500 mt-4 rounded-md;
    }
</style>