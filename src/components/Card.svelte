<div>
    <slot />
    <img src="/code.svg" alt="A code background">
</div>


<style>
    div {
        @apply relative p-4 z-10 md:p-10 w-full sm:w-11/12 md:w-4/6 overflow-hidden mx-auto border border-gray-200 rounded-2xl;
    }

    img {
        @apply absolute w-auto z-0 transform translate-x-1/3 -translate-y-2/3 mb-40 overflow-hidden;
    }
</style>