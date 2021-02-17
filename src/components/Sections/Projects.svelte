<script lang="ts">
    import ProjectItem from "./Projects/ProjectItem.svelte";
    import ProjectView from "./Projects/ProjectView.svelte";

</script>

<main>
    <div>
        <h3>My Projects</h3>
        <h1>I have worked on a variety of projects, here are some of my favorites.</h1>
        <ProjectView>
            <ProjectItem>
                <img slot="icon" class="w-7 h-8" src="https://ggez.zackmyers.io/favicon.ico" alt="">
                <h2>GGEZ ESPORTS</h2>
                <p>A tournament platform built from scratch with Svelte and Golang</p>
            </ProjectItem>
            <ProjectItem>
                <img slot="icon" class="w-7 h-8" src="https://ggez.zackmyers.io/favicon.ico" alt="">
                <h2>GGEZ ESPORTS</h2>
                <p>A tournament platform built from scratch with Svelte and Golang</p>
            </ProjectItem>
            <ProjectItem>
                <img slot="icon" class="w-7 h-8" src="https://ggez.zackmyers.io/favicon.ico" alt="">
                <h2>GGEZ ESPORTS</h2>
                <p>A tournament platform built from scratch with Svelte and Golang</p>
            </ProjectItem>
            <ProjectItem>
                <img slot="icon" class="w-7 h-8" src="https://ggez.zackmyers.io/favicon.ico" alt="">
                <h2>GGEZ ESPORTS</h2>
                <p>A tournament platform built from scratch with Svelte and Golang</p>
            </ProjectItem>
        </ProjectView>
    </div>
</main>

<style>
    main {
        @apply bg-gradient-to-tr from-big-stone-500 to-indigo-500;
    }

    div {
        @apply lg:w-4/6 mx-auto p-10;
    }

    h3 {
        @apply uppercase font-semibold text-big-stone-200;
    }

    h2 {
        @apply font-semibold text-gray-50;
    }

    p {
        @apply text-gray-300;
    }

    h1 {
        @apply font-bold tracking-tight text-gray-50 text-4xl;
    }
</style>