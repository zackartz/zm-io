<div class="main">
    <slot name="icon" />
    <div class="text">
        <slot />
    </div>
</div>

<style>
    .main {
        @apply p-6 bg-gray-50 bg-opacity-20 hover:bg-opacity-30 transition-colors duration-150 border-white border border-opacity-20 rounded-md my-auto flex;
    }

    .text {
        @apply ml-4;
    }
</style>